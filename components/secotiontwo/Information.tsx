"use client";
import React from "react";
import { Box, Stack, HStack, VStack, Heading, Text } from "@chakra-ui/react";
import Content from "./Content";
import web from "../../public/web.jpg";
import metaverse from "../../public/metaverse.png";
import blockchain from "../../public/blockchain.png";
import { infos } from "./Types";

const info: infos[] = [
  {
    heading: "Web 3.0",
    img: blockchain,
    para: " With Web 3.0, users will be able to sell their own data through decentralized data networks, ensuring that they maintain ownership control. This data will be produced by various powerful computing resources, such as mobile phones, desktop computers, appliances, automobiles, and sensors.",
  },
  {
    heading: "Metaverse",
    img: metaverse,
    para: "The metaverse represents the next step in the evolution of online interaction. Prior to the COVID-19 epidemic, online communities had already begun to displace their in-person counterparts. The virtual world, in contrast to the real one, has not only survived but expanded while the real one has remained static.",
  },
];

const Information = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      rowGap={{base:'100px',lg:'0px'}}
      h="100vh"
      w='full'
      mt={{base:'100px',lg:'0px'}}
      position='relative'

    >
      <Box
        display="flex"
        flexDirection={{ base: "column", md: "column", lg: "row" }}
        ml={{ base: "20px", lg: "50px", xl: "20px" }}
        justifyContent="center"
        h="600px"
      >
        <Content {...info[0]} />
      </Box>
      <Box
        display="flex"
        flexDirection={{ base: "column", md: "column", lg: "row-reverse" }}
        justifyContent="space-evenly"
        mr={{ base: "0px", lg: "50px", xl: "20px" }}
        h="600px"
      >
        <Content {...info[1]} />
      </Box>
    </Box>
  );
};

export default Information;
