import { Modal, Image, Text } from "@mantine/core";
import type { Product } from "../types/Product";

type DetailModalProps = {
     product: Product | null;
     opened: boolean;
     onClose: () => void;
};

const DetailModal = ({ product, opened, onClose }: DetailModalProps) => {

     return (
          <Modal overlayProps={{
          backgroundOpacity: 0.55,
          blur: 3,
        }} opened={opened} onClose={onClose} title={product?.name} centered size="lg">
               {product ? (
                    <>
                         <Image src={product.image} radius="md" mb="md" />
                         <Text fw={500} fz="lg" mb="sm">{product.name}</Text>
                         <Text mb="sm">{product.description}</Text>
                         <Text fw={700} fz="xl">{product.price}$</Text>
                    </>
               ) : (
                    <Text>Loading...</Text>
               )}
          </Modal>
     );
};

export default DetailModal;
