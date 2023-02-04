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
            AI and Deep Learning Quarter 4
          </CardHeader>
          <CardBody>
            <List>
              <ListItem>
                <MinusIcon />
                <Heading fontSize="16px">
                  Introduction to Machine Learning, Data Science, and AI
                </Heading>
                <br /> AI for Everyone
                https://www.coursera.org/learn/ai-for-everyone AI for Everyone
                Quiz in Week 3 Total Questions: 60, Total Time: 75 minutes
                <br /><MinusIcon/>
                <Heading fontSize="16px">
                  Building Next-Gen Intelligent Apps with OpenAI’s Powerful
                  Models We will cover GPT-4, ChatGPT, etc. and Next.js
                </Heading>
                13 https://openai.com/api/
                https://towardsdatascience.com/gpt-4-is-coming-soon-heres-what-we-know-about-it-64db058cfd45
                <br /><MinusIcon/>
                <Heading fontSize="16px">
                  Python Crash Course for TypeScript Developers
                </Heading>
                <br /> Python Crash Course, 2nd Edition: A Hands-On,
                Project-Based Introduction to Programming 2nd Edition
                <br />
                https://www.amazon.com/Python-Crash-Course-2nd-Edition/dp/1593279280/ref=sr_1_5
              </ListItem>
            </List>
          </CardBody>
        </Card>

        <Card w="full">
          <CardHeader fontSize="20px" fontWeight="black">
            AI and Deep Learning Quarter 5
          </CardHeader>
          <CardBody>
            <List>
              <ListItem>
                <MinusIcon />
                <Heading fontSize='16px'>Deep Learning with Tensorflow</Heading><br/> Deep Learning with Python, Second
                Edition 2nd Edition
                https://www.amazon.com/Learning-Python-Second-Fran%C3%A7ois-Chollet/dp/1617296864/ref=sr_1_2<br/>
                <MinusIcon/><Heading fontSize='16px'>Machine Learning Engineering for Production (MLOps) using
                Terraform for CDK</Heading><br/> A Comprehensive Guide to MLOps Terraform:<br/>
                Infrastructure As Code(IaC)<br/>
                https://betterprogramming.pub/a-comprehensive-guide-to-mlops-infrastructure-as-code-iac-ef4c97742351<br/>
                MLOps leveraging AWS SageMaker and Terraform<br/>
                https://towardsdatascience.com/mlops-leveraging-aws-sagemaker-terraform-and-gitlab-e7d97eaa6dce
              </ListItem>
            </List>
          </CardBody>
        </Card>
      </Stack>
    </Box>
  );
};

export default page;
