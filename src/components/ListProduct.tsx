
import { useEffect, useRef, useState } from 'react';
import ProductCard from './ProductCard';
import { Center, Space, Text } from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import type { Product } from '../types/Product';
import AxiosAPI from '../config/axiosInstance';
import Autoplay from 'embla-carousel-autoplay';
import DetailModal from './DetailModal';

const ListProduct = () => {

     const [course, setCourse] = useState<Product[]>([]);
     const autoplay = useRef(Autoplay({ delay: 1000 }));
     const [opened, setOpened] = useState(false);
     const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

     const handleSeeProduct = (product: Product) => {
          setSelectedProduct(product);
          setOpened(true);
     };

     useEffect(() => {
          const fetchCourses = async () => {
               const res = await AxiosAPI.get<Product[]>('/courses');
               if (res?.data) {
                    setCourse(res.data);
               }
          };
          fetchCourses();
     }, [])
     return (

          <>
               <Center>
                    <Text
                         size="lg"
                         fw={900}
                         variant="gradient"
                         gradient={{ from: 'blue', to: 'cyan', deg: 90 }}
                    >
                         Gradient Text
                    </Text>
               </Center>
               <Space h="md" />

               <div style={{ maxWidth: 1200, margin: '0 auto' }}>

                    <Carousel withIndicators
                         height={"auto"}
                         slideSize="auto"
                         slideGap="md"
                         plugins={[autoplay.current]}
                         onMouseEnter={autoplay.current.stop}
                         onMouseLeave={() => autoplay.current.play()} >
                         {course.slice(0, 8).map((course) => (
                              <Carousel.Slide key={course.id}>

                                   <ProductCard
                                        key={course.id}
                                        id={course.id}
                                        name={course.name}
                                        price={course.price}
                                        image={course.image}
                                        description={course.description}
                                        isLike={course.isLike}
                                        onSee={handleSeeProduct}

                                   />   </Carousel.Slide>

                         ))}

                    </Carousel>
                    <DetailModal product={selectedProduct} opened={opened} onClose={() => setOpened(false)} />
               </div>
               
          </>
     )
}

export default ListProduct
