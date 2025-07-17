import { useEffect, useState } from "react";
import { SimpleGrid } from "@mantine/core";
import type { Product } from "../types/Product";
import ProductCard from "./ProductCard";

const SuggestionAssistant = () => {
  const [suggestedProducts, setSuggestedProducts] = useState<Product[]>([]);

  useEffect(() => {
    const viewedRaw = localStorage.getItem("viewed");
    const viewed = viewedRaw ? JSON.parse(viewedRaw) : [];
    setSuggestedProducts(viewed.slice(0, 3)); 
  }, []);

  if (!suggestedProducts.length) {
    return <p className="text-sm text-gray-600">Không có sản phẩm nào để gợi ý.</p>;
  }

  return (
    <>
      <p className="text-sm text-gray-700 mb-2">
        🤖 Dựa trên sản phẩm bạn đã xem, đây là vài gợi ý:
      </p>
      <div className="overflow-y-auto max-h-[340px] pr-2">
        <SimpleGrid cols={1} spacing="md">
          {suggestedProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </SimpleGrid>
      </div>
    </>
  );
};

export default SuggestionAssistant;
