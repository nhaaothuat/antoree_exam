import { useEffect, useState } from 'react'
import AxiosAPI from '../config/axiosInstance';
import type { Product } from '../types/Product';
import { Center, SimpleGrid, Title } from '@mantine/core';
import ProductCard from './ProductCard';
import DetailModal from './DetailModal';

const History = () => {

     const [likedProducts, setLikedProducts] = useState<Product[]>([]);
     const [opened, setOpened] = useState(false);
     const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

     const handleSeeProduct = (product: Product) => {
          setSelectedProduct(product);
          setOpened(true);
     };
     useEffect(() => {
          const fetchLikedProducts = async () => {
               try {
                    const response = await AxiosAPI.get("/courses?isLike=true");
                    // console.log(response.data)
                    setLikedProducts(response.data as Product[])
               } catch (error) {
                    console.error("Failed to fetch liked products", error);
               }
          };

          fetchLikedProducts();
     }, []);

     return (
          <>

             <Center>  <Title order={2} mb="md">Liked Products</Title></Center>
               <SimpleGrid cols={4} spacing="md">
                    {likedProducts.map((product) => (
                         <ProductCard key={product.id} {...product} onSee={handleSeeProduct} />
                    ))}
               </SimpleGrid>
               <DetailModal
                    product={selectedProduct}
                    opened={opened}
                    onClose={() => setOpened(false)}
               />

          </>
     )
}

export default History
