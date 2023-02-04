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
            Course Outline
          </CardHeader>
          <CardBody>
            <List>
              <ListItem>
                <MinusIcon />
                <Heading fontSize="16px">
                  Build Full-Stack Next.js 13 Jamstack Templates
                </Heading>
                <br />
                You will be assigned to build a template which we will sell on
                Theme Forest and Panaverse DAO marketplace. The Panaverse DAO
                will receive 25% share on the sale of the template which will be
                used to manage the platform. An additional 15% will be spent on
                marketing the template. 60% of the revenues will be distributed
                to the developer through the Panaverse DAO in the form of
                Panaverse tokens. <br/>The Template Standard<br/>
                <LinkIcon/> https://github.com/panaverse/panaverse-template-standard
              </ListItem>

              <ListItem>
                <MinusIcon />
                <Heading fontSize="16px">
                    Build QraphQL APIs 
                </Heading><br/>
                You will be assigned to build APIs for which you will sell subscriptions
                on the Panaverse DAO Marketplace. The Panaverse DAO will receive 25% share
                on the sale of the template which will be used to manage the platform. An
                additional 15% will be spent on marketing the template. 60% of the revenues
                will be distributed to the developer through the Panaverse DAO in the form 
                of Panaverse tokens. 
              </ListItem>

              <ListItem>
                <MinusIcon />
                <Heading fontSize="16px">
                  UI/UX Design with Figma, TailwindCSS, and Chakra UI (Remote
                  Zoom Class)
                </Heading>
                Designing and Prototyping Interfaces with Figma: Learn essential
                UX/UI design principles by creating interactive prototypes for
                mobile, tablet, and desktop by Fabio Staiano
                <br />
                <br />{" "}
                https://www.amazon.com/Designing-Prototyping-Interfaces-Figma-interactive/dp/180056418X/ref=sr_1_1_sspa
                <br />
                Figma Design Kit for TailwindCSS
                <br />
                <br /> https://www.figma.com/community/file/768809027799962739
                <br /> Chakra UI Figma Kit
                <br />
                <br /> https://www.figma.com/community/file/971408767069651759
              </ListItem>

              <ListItem>
                <MinusIcon />
                <Heading fontSize="16px">
                  API Routes with Next.js (Remote Zoom Class)
                </Heading>
                API Routes
                <LinkIcon /> https://nextjs.org/docs/api-routes/introduction
              </ListItem>

              <ListItem>
                <MinusIcon />
                <Heading fontSize="16px">
                  APIs with Next.js and tRPC (Remote Zoom Class)
                </Heading>
                <br />
                Build a tRPC CRUD API Example with Next.js
                <br />
                <LinkIcon />
                https://codevoweb.com/build-a-trpc-crud-api-example-with-next-js/
                <br />
                Stop building REST APIs for your Next.js apps, use tRPC instead
                <LinkIcon />
                https://brockherion.dev/blog/posts/stop-building-rest-apis-for-your-next-apps/
                <br />
              </ListItem>
            </List>
          </CardBody>
        </Card>

        <Card w="full">
          <CardHeader fontSize="20px" fontWeight="black">
            Web 2.0 Projects
          </CardHeader>
          <CardBody>
            <List>
              <ListItem>
                <MinusIcon />
                <Heading fontSize="16px">Next.js Projects</Heading>
                <br />
                <LinkIcon /> https://github.com/panaverse/nextjs-projects
              </ListItem>

              <ListItem>
                <MinusIcon />
                <Heading fontSize="16px">
                  Styling Next.js Projects using TailwindCSS and Chakra UI
                </Heading>
                <br />
                <LinkIcon />{" "}
                https://github.com/panaverse/styling-nextjs-projects
              </ListItem>
            </List>
          </CardBody>
        </Card>
      </Stack>
    </Box>
  );
};

export default page;
