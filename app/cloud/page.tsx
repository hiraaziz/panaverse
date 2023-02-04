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
          Cloud Native and Computing Quarter 4
          </CardHeader>
          <CardBody>
            <List>
              <ListItem>
                <MinusIcon />
                <Heading fontSize="16px">
                    Kubernetes: Up and Running: Dive into the Future of Infrastructure 3rd Edition
                </Heading><br/>
                https://www.amazon.com/Kubernetes-Running-Dive-Future-Infrastructure/dp/109811020X/ref=sr_1_3 
              </ListItem>
              <MinusIcon />
                <Heading fontSize="16px">
                    Cloud Development Kit for Kubernetes
                </Heading><br/>
                https://cdk8s.io/ 
            </List>
          </CardBody>
        </Card>

        <Card w="full">
          <CardHeader fontSize="20px" fontWeight="black">
            Cloud Native and Computing Quarter 5
          </CardHeader>
          <CardBody>
            <List>
              <ListItem>
              <MinusIcon />
                <Heading fontSize="16px">
                    CDK for Terraform
                </Heading><br/>
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
