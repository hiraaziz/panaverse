"use client";
import {
  Box,
  Button,
  Container,
  VStack,
  Heading,
  Text,
  Circle,
} from "@chakra-ui/react";
import weblogo from "../../public/weblogo.png";
import typescript from "../../public/typescript.png";
import cash from "../../public/cash.png";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import Link from "next/link";

type cardtype = {
  img:StaticImageData,
  quarterNo:number,
  description:string,
  route:string
}
const CardInfo: cardtype[] = [
  {
    img: typescript,
    quarterNo: 1,
    description: "CS-101: Object-Oriented Programming using TypeScript",
    route:'./quarterone'
  },
  {
    img: weblogo,
    quarterNo: 2,
    description:
      "W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform",
    route:'./quartertwo'
  },
  {
    img: cash,
    quarterNo: 3,
    description:
      "$-101: Dollar Making Bootcamp - Full-Stack Template and API Product Development",
      route:'./quarterthree'
  },
];

export default function Cards() {
  return (
    <Box
      position="relative"
      as="div"
      w="full"
      h="max-content"
      bgGradient="radial(#FEDDF3,#FFFFFF)"
      display="flex"
      flexDirection="column"
      rowGap="20"
      pt={10}
      mt={{ base: "700px", lg: "350px" }}
    >
      <VStack>
        <Text
          color="#B40077"
          letterSpacing="4.5%"
          fontSize={{ base: "15px", lg: "24px" }}
          fontFamily="Montserrat"
          fontWeight="medium"
        >
          Course Content
        </Text>
        <Heading
          as="h1"
          fontFamily="Montserrat"
          fontWeight="black"
          letterSpacing="4.5%"
          color="#2F1063"
          fontSize={{ base: "35px", lg: "48px" }}
          pt={{ base: "10px", lg: "20px" }}
        >
          Core Courses
        </Heading>
        <Text
          fontFamily="Montserrat"
          fontWeight="medium"
          letterSpacing="4.5%"
          color="#717171"
          fontSize="20px"
          mt="-20px"
        >
          Common in All Specialization
        </Text>
      </VStack>

      <Box
        display="flex"
        flexDirection={{ base: "column", lg: "row" }}
        justifyContent="center"
        alignItems="center"
        mb="100px"
      >
        {CardInfo.map((card:cardtype,ind:number) => (
          <Container
            w={{ base: "330px", md: "300px", xl: "380px" }}
            h={{ base: "350px", md: "380px", xl: "500px" }}
            boxShadow="#BFBFBF 18px 20px 18px -7px"
            m="0px"
            key={ind}
          >
            <Link href={card.route}>
              <VStack spacing={8}>
                <Circle
                  as="div"
                  size={{ base: "80px", lg: "100px" }}
                  bgGradient="linear(to-br,#D197FF,#FFB4B4)"
                  mt={10}
                >
                  <Image src={card.img} alt="img" width={40} height={40} />
                </Circle>
                <Heading
                  textAlign="center"
                  bgGradient="linear(to-br,#2F1063,#B40077)"
                  bgClip="text"
                  fontFamily="Montserrat"
                  fontWeight="black"
                  fontSize={{ base: "33px", lg: "35px", xl: "55px" }}
                >
                  {card.quarterNo}
                  <br />
                  Quarter
                </Heading>
                <Text
                  textAlign="center"
                  color="#5B5B5B"
                  fontFamily="Montserrat"
                  fontSize={{ base: "12px", lg: "10px", xl: "15px" }}
                  fontWeight="medium"
                  px={6}
                >
                  {card.description}
                </Text>
              </VStack>
            </Link>
          </Container>
        ))}
      </Box>
    </Box>
  );
}

// sm: '320px',
// md: '768px',
// lg: '1024px',
// xl: '1440px',
// '2xl': '2560px',
