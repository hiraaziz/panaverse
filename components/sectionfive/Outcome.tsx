
import React from "react";
import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import target from "../../public/outcome.png";
import Image from "next/image";
import '../../app/globals.css'

const Outcome = () => {
  return (
    <Box
      w="full"
      h="fit-content"
      display="flex"
      flexDirection={{ base: "column", xl: "row" }}
      justifyContent='center'
      alignItems='center'
      zIndex={1}
    
    >
      <Box
        w={{ base: "250px", lg: "500px" }}
        h="fit-content"
        display="flex"
        flexDirection="column"
        justifyContent="space-evenly"
        alignSelf="center"
      >
        <VStack spacing="10px">
          <Heading
            fontFamily="Montserrat"
            fontWeight="black"
            fontSize={{ base: "30px", lg: "45px" }}
            bgGradient="linear(220deg, #2F1063, #F53658)"
            bgClip="text"
            textAlign='center'
            w={{ base: "300px", lg: "800px", xl: "800px" }}
          >
            OUTCOME OF THIS COURSE
          </Heading>
          <Box
            w={{ base: "30px", lg: "230px", xl: "280px" }}
            h={{ base: "3px", lg: "6px" }}
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
          The graduates of this program will own products (Full-Stack App
          Templates, AR and VR Experiences, and APIs) that are marketed globally
          by the Panaverse DAO and, if they like, will also be able to start off
          by offering services at a rate of $50 per hour ($96,000 per year).
          This would give Pakistani professionals and students a fantastic
          opportunity to better their financial situation while also giving the
          economy a much-needed boost by expanding software exports.
        </Text>
      </Box>

      <Image
        src={target}
        alt="target"
        width={380}
        height={160}
        style={{ height: "500px" }}
      />
    </Box>
  );
};

export default Outcome;
