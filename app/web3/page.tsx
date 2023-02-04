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
            Web 3 and Metaverse Quarter 4
          </CardHeader>
          <CardBody>
            <List>
              <ListItem>
                <MinusIcon />
                <Heading fontSize="16px">
                  Blockchain and Metaverse Theory The Metaverse:
                </Heading>{" "}
                And How It Will Revolutionize Everything by Matthew Ball
                <br />
                https://www.amazon.com/Metaverse-How-Will-Revolutionize-Everything/dp/1324092033/ref=tmm_hrd_swatch_0
                <br />
                Mastering Blockchain - Fourth Edition by Imran Bashir
                <br />
                https://www.packtpub.com/product/mastering-blockchain-fourth-edition/9781803241067
                <br /><MinusIcon/>
                <Heading fontSize="16px">
                  Smart Contract Development in Solidity Solidity Programming
                </Heading>
                Essentials - Second Edition By Ritesh Modi
                https://www.packtpub.com/product/solidity-programming-essentials-second-edition/9781803231181
                <br />
                Solidity Learning Repo
                <br />
                https://github.com/panaverse/defi-dapps-solidity-smart-contracts
                <br /><MinusIcon/>
                <Heading fontSize="16px">
                  Dapp Development using Ethers.js and Next.js 13 Dapp Learning
                </Heading>
                <br />
                Repo https://github.com/panaverse/dapps-nextjs Tokennomics<br/>
                <MinusIcon/><Heading fontSize="16px">Blockchain Project:</Heading> Create a
                Token and Launch ICO/IEO/IDO As you probably know, the ICO
                ("Initial Coin Offering") industry has been booming, and it's
                completely reinventing the way new startups kickstart
                themselves. In fact, have a look at Wikipedia's list of highest
                crowdfunding projects
                https://en.wikipedia.org/wiki/List_of_highest-funded_crowdfunding_projects,
                and you'll notice that blockchain projects absolutely dominate
                the list. Understand the difference between IDO vs. IEO vs. ICO
                https://phemex.com/blogs/what-is-a-dex-ido
              </ListItem>
            </List>
          </CardBody>
        </Card>

        <Card w="full">
          <CardHeader fontSize="20px" fontWeight="black">
            Web 3 and Metaverse Quarter 5
          </CardHeader>
          <CardBody>
            <List>
              <ListItem>
                <MinusIcon />
                <Heading fontSize='16px'>Open Metaverse Web Development</Heading><br/> Open Metaverse Learning Repo
                https://github.com/panaverse/metaverse-web <br/>
                <MinusIcon/>
                <Heading fontSize='16px'>Blender 3D asset
                Creation for the Metaverse (Remote Zoom Class)</Heading>
                Blender development is being funded by heavyweights in the real-time 3D
                (RT3D) space such as Apple, Unity, AMD, Intel, Meta, NVIDIA,
                AWS, Epic Games, Adobe, Microsoft, and Decentraland.<br/> It is
                expected to become the standard asset creation tool for
                metaverse. Blender 3.3+ Download<br/>
                https://www.blender.org/download/ Blender 3.0 Beginner Tutorial
                https://www.youtube.com/playlist?list=PLjEaoINr3zgFX8ZsChQVQsuDSjEqdWMAD<br/>
                Blender 3.0 Hotkey<br/>
                https://docs.google.com/document/d/1zPBgZAdftWa6WVa7UIFUqW_7EcqOYE0X743RqFuJL3o/edit<br/>
                Blender Projects Textbook: Blender by Example 2nd Edition<br/>
                https://www.packtpub.com/product/blender-3d-by-example-second-edition/9781789612561<br/>
                Blender Textbook: The Complete Guide to Blender Graphics:
                Computer Modeling & Animation 7th Edition by John M. Blain<br/>
                https://www.amazon.com/Complete-Guide-Blender-Graphics-Animation/dp/103212167X/ref=sr_1_5<br/>
                Best Hardware Performance for Blender Rendering<br/>
                https://www.youtube.com/watch?v=H7T0SzdFHwg<br/> Assignment 1:<br/> Build
                a 3D Donut using Blender 3 as shown in these video tutorials<br/>
                https://www.youtube.com/playlist?list=PLjEaoINr3zgFX8ZsChQVQsuDSjEqdWMAD<br/>
                Assignment 2: Build a Viking Scene using Blender 3 as shown in
                chapter 2 of the Book [Blender by Example 2nd Edition<br/>
                https://www.packtpub.com/product/blender-3d-by-example-second-edition/9781789612561<br/>
                Assignment 3: Modeling a Time Machine using Blender 3 as shown
                in chapters 3 and 4 of the Book Blender by Example 2nd Edition
                https://www.packtpub.com/product/blender-3d-by-example-second-edition/9781789612561<br/>
                Assignment 4: Build a Modern Kitchen using Blender 3 as shown in
                chapters 5, 6, and 7 of the Book Blender by Example 2nd Edition
                https://www.packtpub.com/product/blender-3d-by-example-second-edition/9781789612561<br/>
                Assignment 5: Illustrating an Alien Hero with Grease Pencil as
                shown in chapter 8 of the Book Blender by Example 2nd Edition
                https://www.packtpub.com/product/blender-3d-by-example-second-edition/9781789612561<br/>
                Assignment 6: Build a 3D Sword in the Stone using Blender 3 as
                shown in these video tutorials
                https://www.youtube.com/watch?v=bpvh-9H8S1g
              </ListItem>
            </List>
          </CardBody>
        </Card>
      </Stack>
    </Box>
  );
};

export default page;
