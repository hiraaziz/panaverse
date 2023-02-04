import React from "react";
import { infos } from "./Types";
import Image, { StaticImageData } from "next/image";
import metaverse from "../../public/banner.png";
import { Box, Stack, HStack, VStack, Heading, Text } from "@chakra-ui/react";

const Content = (info: infos) => {
  return (
    <>
      <Box
        w={{base:'300px',lg:'600px'}}
        h="350px"
        display="flex"
        flexDirection="column"
        justifyContent="space-evenly"
        alignSelf="center"
      >
        <VStack spacing="10px">
          <Heading
            fontFamily="Montserrat"
            fontWeight="black"
            fontSize={{ base: "30px", lg: "50px", xl: "64px" }}
            bgGradient="linear(180deg, #2F1063, #F53658)"
            bgClip="text"
            w={{ base: "300px", lg: "300px", xl: "400px" }}
          >
            {info.heading}
          </Heading>
          <Box
            w={{ base: "30px", lg: "230px", xl: "280px" }}
            h={{ base: "6px", lg: "8px", xl: "10px" }}
            bgColor="#F53636"
          />
        </VStack>
        <Text
          textAlign="center"
          boxShadow="md"
          p="6"
          rounded="md"
          bg="white"
          color="#363636"
        >
          {info.para}
        </Text>
      </Box>

      <Image
        src={info.img}
        alt="web"
        width={410}
        height={200}
        style={{ height: "500px" }}
      />
    </>
  );
};

export default Content;
