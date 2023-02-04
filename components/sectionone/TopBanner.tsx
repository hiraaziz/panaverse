"use client";
import {
  Box,
  Heading,
  Stack,
  Text,
  HStack,
  VStack,
  Container,
  Button,
} from "@chakra-ui/react";
import Image from "next/image";
import banner from "../../public/banner.png";
import { ArrowForwardIcon, CheckCircleIcon } from "@chakra-ui/icons";
import Link from "next/link";

const options = [
  "Zoom Classes",
  "Onsite Classes",
  "1.2 Year Course",
  "Latest Technology",
  "Assignments",
  "Quizes",
];

export default function TopBanner() {
  return (
    <Box
      w="full"
      h="max-content"
      bgGradient="linear(280deg, #F5EEFE,#F5EEFE,#F7EEFF,#FFFFFF)"
    >
      <Stack
        as="div"
        display="flex"
        direction={{ base: "column", lg: "row" }}
        justifyContent={{ base: "start", xl: "center" }}
        alignItems='center'
        w="full"
        my="auto"
        h="full"
        p="0px"
        mt={{ base: "100px", lg: "0px" }}
        mb={{ base: "80px", md: "80px", lg: "80px" }}
        columnGap="80px"
        rowGap="40px"
      >
        <Box
          as="div"
          display="flex"
          flexDirection="column"
          rowGap="10px"
          w={{
            base: "280px",
            md: "360px",
            lg: "300px",
            xl: "480px",
            "2xl": "558px",
          }}
          zIndex={1}
          px={{ base: "30px", lg: "0px" }}
        >
          <Text
            fontFamily="Inter"
            fontWeight="semibold"
            fontSize={{ base: "12px", lg: "16px" }}
            ml="20px"
          >
            <Box
              as="span"
              bgColor="#DC042B"
              color="white"
              px="2px"
              borderRadius="5px"
              fontSize={{ base: "20px", lg: "25px" }}
            >
              EARN
            </Box>
            WHILE YOU LEARN
          </Text>

          <Heading
            as="h1"
            fontFamily="Montserrat"
            fontSize={{
              base: "30px",
              md: "40px",
              lg: "50px",
              xl: "58px",
              "2xl": "70px",
            }}
            fontWeight="black"
            textAlign={{ base: "left", lg: "center" }}
            bgGradient="linear(180deg, #2F1063, #F53658)"
            bgClip="text"
            minWidth={{ base: "250px", md: "35%", lg: "400px" }}
            lineHeight={{ base: "30px", md: "35px", lg: "40px", xl: "60px" }}
          >
            WEB 3.0 AND METAVERSE DEVELOPER
          </Heading>

          <Button
            fontFamily="Montserrat"
            border="1px solid #F53636"
            bgColor="transparent"
            color="#F53636"
            w="180px"
            alignSelf="flex-end"
            _hover={{ bgColor: "#F6EEFE" }}
          >
            <Link href='https://www.piaic.org/'>APPLY <ArrowForwardIcon ml="10px" /></Link>
          </Button>
        </Box>

        <Box>
          <Image src={banner} alt="banner" width={570} height={520} />
        </Box>
      </Stack>

      <Box
        display="flex"
        flexDirection={{ base: "column", lg: "row" }}
        rowGap="10px"
        alignItems="center"
        justifyContent="space-between"
        borderTop="solid 1px #C070FF"
        w="full"
        p="20px"
      >
        {options.map((opt: string, ind: number) => (
          <Text
            key={ind}
            color="#B40077"
            fontFamily="Raleway"
            fontWeight="bold"
            fontSize={{ base: "15px", md: "15px", lg: "15px" }}
            w="160px"
          >
            <CheckCircleIcon mr="10px" />
            {opt}
          </Text>
        ))}
      </Box>
    </Box>
  );
}
