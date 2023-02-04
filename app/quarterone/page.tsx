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

const QuarterOne = () => {
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
        mx='auto'
        h="fit-content"
        mt={{ base: "0px", md: "120px", lg: "120px" }}
        mb={{ base: "80px", md: "80px", lg: "80px" }}
      >
        <Card w="full">
          <CardHeader fontSize='20px' fontWeight='black'>Course Outline</CardHeader>
          <CardBody>
            <List>
              <ListItem>
                <MinusIcon />
                <Heading fontSize="16px">HTML and CSS (Homework)</Heading>
                <br /> Learn HTML by Hira Khan (Watch Recorded Videos)
                <br />
                <LinkIcon /> https://www.youtube.com/playlist?list=PLKvqnz8z1zWQ3BALy86tIXICkG874wAc6
                <br />
                Learn CSS Intro by Hira Khan (Watch Recorded Videos)
                <br />
                <LinkIcon /> https://www.youtube.com/playlist?list=PLKvqnz8z1zWQSWIen_zUSEBmtqzPLuRob
              </ListItem>
              <ListItem>
                <MinusIcon />
                <Heading fontSize="16px">
                  Web 3.0 and Metaverse Theory
                </Heading>{" "}
                <br />
                Introduction to Panaverse DAO
                <br />
                <LinkIcon /> https://docs.google.com/presentation/d/12C1s4UBTlR9nZNEkRE6aAuGeRA3s92jx-8nJKo9jdH4/edit?usp=sharing
                <br />
                Web 3.0 User Guide
                <br />
                <LinkIcon /> https://docs.google.com/presentation/d/1FSbr9aJwO0-fmZHqWy_eHO2N_jwJLmQCy4cG8rd4ctw/edit?usp=sharing
                <br />
                Complete Web 3 Assignments included in the Web 3 User Guide
                <br />
                Virtual and Augmented Metaverse User Guide
                <br />
                <LinkIcon /> https://docs.google.com/presentation/d/1ADk87hQ0Etr2PfmN9XH7TQ0CHl6XSP_7JWNUbzPdDNc/edit?usp=sharing
              </ListItem>
              <ListItem>
                <MinusIcon />
                <Heading fontSize="16px">
                  Fundamentals of JavaScript (ECMAScript 2022 Language
                  Specification)
                </Heading>
                <br /> Learn JavaScript by Zeeshan Hanif (Watch Recorded Videos)
                <br />
                <LinkIcon /> https://www.youtube.com/playlist?list=PLKvqnz8z1zWQdc0NSLknxmxBch5gLOqyo
                <br />
                Chapters 2-6, 13 of JavaScript from Beginner to Professional:
                <br />
                Learn JavaScript quickly by building fun, interactive, and
                dynamic web apps, games, and pages
                <br />
                <LinkIcon /> https://www.amazon.com/JavaScript-Beginner-Professional-building-interactive/dp/1800562527/ref=sr_1_4
                <br />
                JavaScript Book Code
                <br />
                <LinkIcon /> https://github.com/PacktPublishing/JavaScript-from-Beginner-to-Professional
                <br />
                Getting Started Exercises with JavaScript and Node.js
                <br />
                <LinkIcon /> https://github.com/panaverse/typescript-node-projects/blob/main/getting-started-exercises.md
                <br />
                Fundamentals of JavaScript and Node.js Quiz
              </ListItem>
              <ListItem>
                <MinusIcon />
                <Heading fontSize="16px">
                  Object-Oriented Programming with TypeScript{" "}
                </Heading>
                <br /> Chapters 1-11 of Learning TypeScript: Enhance Your Web
                Development Skills Using Type-Safe JavaScript
                <br />
                <LinkIcon /> https://www.amazon.com/Learning-TypeScript-Development-Type-Safe-JavaScript/dp/1098110331/ref=sr_1_1
                <br />
                Learning Repository
                <br />
                <LinkIcon /> https://github.com/panaverse/learn-typescript
                <br /> In Class Companion projects and articles for Learning
                TypeScript
                <br />
                <LinkIcon /> https://www.learningtypescript.com/
                <br /> Homework Project
                <br />
                <LinkIcon /> https://github.com/panaverse/typescript-node-projects
                <br />
                Fundamentals of TypeScript Quiz TypeScript Professional
                Proficiency Quiz
              </ListItem>
              <ListItem>
                <MinusIcon />
                <Heading fontSize="16px">TypeScript for React</Heading>
                <br />
                Minimal TypeScript Crash Course For React With Interactive Code
                <br />
                <LinkIcon /> Exercises https://profy.dev/article/react-typescript
              </ListItem>
            </List>
          </CardBody>
        </Card>

        <Card w="full">
          <CardHeader fontSize='20px' fontWeight='black'>Quizzes and Assignments</CardHeader>
          <CardBody>
            <List>
              <ListItem>
                <MinusIcon/> 
                <Heading fontSize="16px">TypeScript Proficiency Quiz</Heading>
                <br />
                Total Questions: 63 Duration: 120 minutes Study Material:
                <br />
                <LinkIcon /> https://github.com/panaverse/learn-typescript
              </ListItem>
              <ListItem>
                <MinusIcon/>
                <Heading fontSize='16px'>Fundamentals of Version Control with Git Quiz</Heading><br/>
                Version Control using Git and GitHub By Sir Zeeshan Hanif (Watch Recorded Videos)<br/>
                <LinkIcon/> https://www.youtube.com/playlist?list=PLKueo-cldy_HjRnPUL4G3pWHS7FREAizF<br/>
                Chapters 1, 2, 3, and 4 Learn Version Control with Git: A
                step-by-step course for the complete beginner by Tobias Günther<br/>
                We will also cover these readings:<br/>
                <LinkIcon/> https://help.github.com/articles/markdown-basics/<br/>
                <LinkIcon/> http://stackoverflow.com/questions/5009600/difference-between-fork-and-branch-on-github<br/>
                <LinkIcon/> http://stackoverflow.com/questions/3329943/git-branch-fork-fetch-merge-rebase-and-clone-what-are-the-differences<br/>
                <LinkIcon/> https://git-scm.com/book/en/v2/Git-Branching-Rebasing<br/>
                <LinkIcon/> http://git-scm.com/book/en/v2/Git-Branching-Remote-Branches#Tracking-Branches<br/>
                For practice: <LinkIcon/> https://try.github.io/levels/1/challenges/1<br/>
                Homework:<br/>
                <LinkIcon/> https://www.datacamp.com/courses/introduction-to-git-for-data-science<br/>
                Git Cheatsheet<br/>
                <LinkIcon/> https://www.kdnuggets.com/2022/11/git-data-science-cheatsheet.html<br/>
              </ListItem>
            </List>
          </CardBody>
        </Card>
      </Stack>
    </Box>
  );
};

export default QuarterOne;
