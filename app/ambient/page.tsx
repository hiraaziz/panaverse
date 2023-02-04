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
            Ambient Computing and IoT Quarter 4
          </CardHeader>
          <CardBody>
            <List>
              <ListItem>
                <MinusIcon />
                <Heading fontSize="16px">Alexa Skill Developement</Heading>
                <br />
                https://developer.amazon.com/en-US/alexa
              </ListItem>
              <MinusIcon />
              <Heading fontSize="16px">Alexa with Matter Protocol</Heading>
              <br />
              https://developer.amazon.com/en-US/alexa/matter<br/>
              https://developer.amazon.com/en-US/blogs/alexa/device-makers/2022/07/alexa-live-2022-ack-sdk-matter.html
            </List>
          </CardBody>
        </Card>

        <Card w="full">
          <CardHeader fontSize="20px" fontWeight="black">
            Ambient Computing and IoT Quarter 5
          </CardHeader>
          <CardBody>
            <List>
              <ListItem>
                <MinusIcon />
                <Heading fontSize="16px">CDK for Terraform</Heading>
                <br />
                https://developer.hashicorp.com/terraform/cdktf
              </ListItem>
            </List>
          </CardBody>
        </Card>
      </Stack>
    </Box>
  );
};

export default page;
