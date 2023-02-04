"use client";
import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Box,
  Stack,
  Link,
  List,
  ListItem,
  Heading,
} from "@chakra-ui/react";
import { LinkIcon, MinusIcon } from "@chakra-ui/icons";

const page = () => {
  return (
    <Box w="full" h="max-content">
      <Stack
        as="div"
        display="flex"
        direction="column"
        justifyContent={{ base: "start", xl: "center" }}
        alignItems="center"
        w={{base:'300px',md:'400px',lg:"500px",xl:'1000px'}}
        my="auto"
        mx="auto"
        h="fit-content"
        mt={{ base: "0px", md: "120px", lg: "120px" }}
        mb={{ base: "80px", md: "80px", lg: "80px" }}
      >
        <Card w="full">
          <CardHeader fontSize="20px" fontWeight="black">
            Embedded Programming using C and Rust Quarter 4
          </CardHeader>
          <CardBody>
            <List>
              <ListItem>
                <MinusIcon />
                <Heading fontSize="16px">
                  AIntroduction to the Internet of Things and Embedded Systems
                  (Weeks 1 and 2){" "}
                </Heading>
                <br />
                <LinkIcon />{" "}
                https://docs.google.com/presentation/d/14OcW4HfS2i1Db1uKOU6SrckFEFjhSLMgfnHYB3XlEZo/edit?usp=shar
                ing
                <br /> What is the Fourth Industrial Revolution? What is IoT?
                Embedded Systems Hardware and Software for IoT Edge and Cloud
                Computing The future of IoT is AI Blockchain in the Internet of
                Things? IoT + AI + Blockchain: The Fourth Industrial Revolution
                has begun How will Matter change the IoT Infrastructure and
                address issues Metaverse and IoT Mid-Term I: Introduction to the
                Internet of Things (IoT) Quiz in Week 3 Total Questions: 46,
                Total Time: 60 minutes
                <MinusIcon />
                <Heading fontSize="16px">Introduction to C Part 1</Heading>
                <br />C environment Setup for (Windows, Linux, and Mac OS
                systems) Chapters 1-2 of “The C programming language” Variable
                names types Data types and sizes Constants Arithmetic operations
                Logical and relational operators Type conversions. Bitwise
                operators Conditional expressions. Programming Assignments will
                also be given.
                <br />
                <Heading fontSize="16px">
                  Introduction to Embedded systems Part 1
                </Heading>
                <br />
                Basic Electronics and Introduction to microcontrollers Chapter 1
                of “Internet of things with ESP8266” Arduino IDE installation
                and env setup for ESP8266 Burning your first code on ESP8266
                Project-based Assignments will also be given. Mid-Term II: C
                Programming Quiz 1 in Week 9 Total Questions: 62, Total Time: 75
                minutes
              </ListItem>
            </List>
          </CardBody>
        </Card>

      </Stack>
    </Box>
  );
};

export default page;
