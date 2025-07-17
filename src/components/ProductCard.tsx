import { CiStar } from "react-icons/ci";

import { ActionIcon, Button, Card, Group, Image, Text } from '@mantine/core';
import type { Product } from "../types/Product";

import { FaStar } from "react-icons/fa6";
import { useState } from "react";
import AxiosAPI from "../config/axiosInstance";
import { notifications } from "@mantine/notifications";

type ProductCardProps = Product & {
     onSee?: (product: Product) => void;
};

const ProductCard = ({ id, name, price, image, description, isLike, onSee }: ProductCardProps) => {

     const [liked, setLiked] = useState(isLike);

     const toggleLike = async () => {
          try {
               const newValue = !liked;
               setLiked(newValue);


               await AxiosAPI.put(`/courses/${id}`, { isLike: newValue });
               console.log(id)
               notifications.show({
                    title: newValue ? 'Đã thích sản phẩm' : 'Đã bỏ thích',
                    message: `${name} ${newValue ? 'đã được thêm vào danh sách yêu thích 💛' : 'đã được gỡ khỏi danh sách yêu thích'}`,
                    color: newValue ? 'yellow' : 'gray',
               });
          } catch (error) {
               console.error('Failed to toggle like', error);
          }
     };
     return (
          <Card shadow="sm" padding="lg" radius="md" withBorder style={{ height: 360, minWidth: 250, width: 310, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
               <Card.Section>
                    <Image
                         src={image}
                         radius="md"
                         h={150}
                    />
               </Card.Section>
               <Group justify="space-between" mt="lg">
                    <Text fw={500} fz="lg">
                         {name}
                    </Text>

                    <Group gap={5}>
                         <ActionIcon
                              onClick={toggleLike}
                              variant="subtle"

                         >
                              {liked ? <FaStar size={18} /> : <CiStar size={20} />}
                         </ActionIcon>
                    </Group>
               </Group>

               <Text fz="sm" c="dimmed" mt="sm" style={{
                    height: 40,
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
               }}>
                    {description}
               </Text>


               <Group justify="space-between" mt="md">
                    <div>
                         <Text fz="xl" span fw={500} className="text-white">
                              {price}$
                         </Text>

                    </div>

                    <Button radius="md" onClick={() => {
                         console.log("Đã click See:", { id, name, price, description });
                         onSee?.({ id, name, price, image, description, isLike })
                    }}>See</Button>
               </Group>

          </Card>
     )
}

export default ProductCard
