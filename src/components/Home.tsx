import Banner from "./Banner"
import ListProduct from "./ListProduct"

import { Modal, Button, Divider } from '@mantine/core';
import { FaRocketchat } from "react-icons/fa6";

import SuggestionAssistant from "./SuggestionAssistant";
import { useState } from "react";
import CTA from "./CTA";
import FAQ from "./FAQ";
import Sections from "./Sections";

const Home = () => {

  const [opened, setOpened] = useState(false);




  const handleOpen = () => {

    setOpened(true);
  };

  const handleClose = () => setOpened(false);
  return (
    <>
      <Banner />

      <Divider my="lg" variant="none" />
      <Sections />
      <Divider my="lg" variant="none" />
      <FAQ />
      <Divider my="lg" variant="none" />
      <ListProduct />
      <CTA />
      <Divider my="lg" variant="none" />
      <Modal opened={opened}
        onClose={handleClose}
        withCloseButton={true}
        size="md"
        overlayProps={{
          backgroundOpacity: 0,
          blur: 0,
        }}
        centered={false}
        styles={{
          content: {
            position: "fixed",
            bottom: "80px",
            right: "20px",
            margin: 0,
            width: "300px",
            height: "400px",
            borderRadius: "12px",
          },
        }}>
        <SuggestionAssistant />
      </Modal>

      <Button variant="filled" onClick={handleOpen}

        style={{
          position: 'fixed',
          bottom: 20,
          right: 20,
          zIndex: 1000,
          width: 50,
          height: 50,
          borderRadius: '50%',
          padding: 0,
          fontSize: 20,
          textAlign: 'center',
        }}>
        <FaRocketchat />
      </Button>
    </>

  )
}

export default Home
