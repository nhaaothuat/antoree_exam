import { useEffect, useState } from 'react';
import AxiosAPI from '../config/axiosInstance';
import { SimpleGrid } from '@mantine/core';
import type { Product } from '../types/Product';
import ProductCard from './ProductCard';

const FilterProduct = () => {
  const [exactPrice, setExactPrice] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [products, setProducts] = useState<Product[]>([]);

  const fetchFilteredProducts = async () => {
    try {
      let query = '/courses';
      const params = new URLSearchParams();

      if (searchTerm) params.append('search', searchTerm);
      if (exactPrice) params.append('price', exactPrice);

      if (params.toString()) {
        query += `?${params.toString()}`;
      }

      const res = await AxiosAPI.get(query);
      setProducts(res.data as Product[]);
    } catch (error) {
      console.error('Failed to fetch products', error);
    }
  };

  useEffect(() => {
    fetchFilteredProducts();
  }, []);

  const handleReset = () => {
    setSearchTerm('');
    setExactPrice('');
    fetchFilteredProducts();
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* Thanh tìm kiếm */}
      <div className="flex items-center gap-3 mb-4">
        <input
          type="text"
          placeholder="Tìm theo tên sản phẩm..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded shadow-sm sm:text-sm"
        />
        <button
          onClick={fetchFilteredProducts}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm"
        >
          Search
        </button>
      </div>

      {/* Bộ lọc theo giá */}
      <details className="group relative overflow-hidden rounded border border-gray-300 shadow-sm">
        <summary className="flex items-center justify-between gap-2 p-3 text-gray-700 transition-colors hover:text-gray-900 [&::-webkit-details-marker]:hidden">
          <span className="text-sm font-medium"> Bộ lọc theo giá </span>
          <span className="transition-transform group-open:-rotate-180">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </span>
        </summary>

        <div className="divide-y divide-gray-300 border-t border-gray-300 bg-white">
          <div className="flex items-center justify-between px-3 py-2">
            <span className="text-sm text-gray-700"> Lọc theo giá chính xác </span>
            <button
              type="button"
              onClick={handleReset}
              className="text-sm text-gray-700 underline hover:text-gray-900"
            >
              Reset
            </button>
          </div>

          <div className="p-3">
            <label htmlFor="ExactPrice" className="block mb-2 text-sm text-gray-700">
              Giá sản phẩm
            </label>
            <input
              type="number"
              id="ExactPrice"
              value={exactPrice}
              onChange={(e) => setExactPrice(e.target.value)}
              placeholder="VD: 300"
              className="w-full px-3 py-2 border border-gray-300 rounded shadow-sm sm:text-sm"
            />
          </div>

          <div className="p-3">
            <button
              type="button"
              onClick={fetchFilteredProducts}
              className="px-4 py-2 text-sm bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Áp dụng bộ lọc
            </button>
          </div>
        </div>
      </details>

      {/* Danh sách sản phẩm */}
      <SimpleGrid cols={3} spacing="lg">
        {Array.isArray(products) && products.length > 0 ? (
          products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))
        ) : (
          <p>Không có sản phẩm phù hợp</p>
        )}
      </SimpleGrid>
    </div>
  );
};

export default FilterProduct;
