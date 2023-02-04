"use client";
import React from "react";
import { Box, Heading, Text, Center } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Data } from "./CourseData";
import Link from "next/link";
export const Courses = () => {
  return (
    <Box
      as="div"
      position="relative"
      w="full"
      h="fit-content"
      py="10px"
      mb="50px"
      mt='50px'
      fontFamily="Montserrat"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      rowGap="50px"
    >
      <Box as="div" w="fit-content" display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
        <Heading fontWeight="black" color='#2F1063'>Specialized Tracks</Heading>
        <Box
            w={{ base: "200px", lg: "400px" }}
            h={{ base: "3px", lg: "3px", xl: "3px" }}
            bgColor="#aa1958"
            alignSelf='center'
            mt='10px'
          />
        <Text
          w={{ base: "320px", md: "420px", lg: "530px" }}
          fontSize="12px"
          fontWeight="regular"
          mt="10px"
          textAlign='center'
        >
          After completing the first three quarters the participants will select
          one or more specializations consisting of two courses each.
        </Text>
      </Box>

      {Data.map((datas) => (
        <Box
          as="div"
          w="full"
          display="flex"
          flexDirection={{ base: "column", lg: "row" }}
          justifyContent="center"
          alignItems="center"
          columnGap="40px"
          rowGap="20px"
        >
          <Center
            w="280px"
            h={{base:'120px',lg:"280px"}}
            color="white"
            bgGradient={datas.colorbg}
            flexDirection="column"
            rowGap="20px"
            borderRadius="32px"
            boxShadow='xl'
          >
            <Heading
              w="220px"
              fontWeight="black"
              fontSize={{base:'18px',lg:"25px"}}
              borderRadius="36px"
              lineHeight={{base:'17px',lg:'25px'}}
            >
              {datas.heading}
            </Heading>
            <Text fontSize={{base:'10px',lg:'15px'}}>
              <Link href={datas.route}>LEARN MORE <ArrowForwardIcon /></Link>
            </Text>
          </Center>

          {datas.quarters.map((quart)=>(
             <Center
             w="280px"
             h={{base:'200px',lg:"280px"}}
             bgColor="#F6F6F6"
             flexDirection="column"
             rowGap="20px"
             borderRadius="32px"
             boxShadow='xl'
           >
             <Heading
               textAlign="center"
               bgGradient={datas.colorbg}
               bgClip="text"
               fontWeight="black"
               fontSize="36px"
             >
               {quart.quarterNum}<br />
               Quarter
             </Heading>
             <Text
               w="200px"
               textAlign="center"
               fontSize="13px"
               fontWeight="medium"
               color="gray.600"
             >
               {quart.quart}
             </Text>
           </Center>
          ))}

          
        </Box>
      ))}
    </Box>
  );
};
