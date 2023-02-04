"use client";
import { Box, Text, Heading, Input, Button } from "@chakra-ui/react";
import Link from "next/link";

export type route={
  name:string,route:string
}
type ContentType = {
  heading: string;
  links: route[];
};

const footerContent: ContentType[] = [
  {
    heading: "INFORMATION",
    links: [{name:"Privacy Policy",route:'/privacy'}, {name:"Terms & Conditions",route:'/terms'}],
  },
  {
    heading: "QUICK LINKS",
    links: [
      {name:"Web 3.0 and Metaverse",
       route:'/web3'},
      {name:"Artificial Intelligence",
       route:'/deeplearning'},
      {name:"Cloud Native Computing",
       route:'cloud'},
      {name:"Ambient Computing and IOT",
       route:'ambient'},
      {name:"Genomics and Bioinformatics Specialization",
       route:'genomics'},
      {name:"Network Programmability and Automation Specialization",
       route:'/automation'}
    ],
  },
  {
    heading: "CONTACT",
    links: [ {name:"Contact us",route:'/contact'}, {name:"About us", route:'./about'}],
  },
];
export default function Footer() {
  return (
    <Box
      w="full"
      bgColor="#2F1063"
      color="white"
      h={{ base: "fit-content", xl: "300px" }}
      position="relative"
      display="flex"
      flexDirection="column"
      justifyContent="space-evenly"
      alignItems="center"
      fontFamily="Montserrat"
    >
      <Box
        w={{ base: "fit-content", xl: "full" }}
        display="flex"
        rowGap="30px"
        alignContent="center"
        mt={{ base: "30px", xl: "0px" }}
        flexDirection={{ base: "column", xl: "row" }}
        justifyContent={{ base: "center", xl: "space-evenly" }}
      >
        <Text
          w={{ base: "250px", lg: "300px" }}
          fontSize={{ base: "10px", lg: "14px" }}
        >
          Certified Web 3.0 and Metaverse Developer A One and Quarter Years
          Panaverse DAO Earn as you Learn Program Getting Ready for the Next
          Generation of the Internet Consolidating Web 3.0, Metaverse,
          Artificial Intelligence (AI), Cloud, Edge, Ambient Computing/IoT,
          Network Automation, and Bioinformatics Technologies
        </Text>

        {footerContent.map((footer: ContentType,ind:number) => (
          <Box display="flex" flexDirection="column" rowGap="10px" key={ind}>
            <Heading as="ul" fontSize="14px" fontWeight="bolder">
              {footer.heading}
            </Heading>
            <Box
              fontSize="12px"
              fontWeight={{ base: "medium", lg: "bold" }}
              style={{ listStyle: "none" }}
              display="flex"
              flexDirection="column"
              justifyItems="start"
              alignItems="start"
              rowGap="5px"
              w="200px"
            >
              {footer.links.map((link: route,index:number) => (
                <Text as="li" key={index}><Link href={link.route}>{link.name}</Link></Text>
              ))}
            </Box>
          </Box>
        ))}

        <Box display="flex" flexDirection="column" rowGap="5px" w="200px">
          <Heading fontSize="20px">Subscribe to Newsletter</Heading>
          <Input placeholder="Enter email to subscribe" />
          <Button bgColor="#FEE1F5" color="black" width="150px" alignSelf="end">
            Subscribe
          </Button>
        </Box>
      </Box>
      
      <Box
        w="full"
        height={{base:'fit-content',xl:"5px"}}
        borderTop="solid 1px white"
        justifySelf="end"
        alignSelf="end"
        bgColor="#2F1063"
      >
        <Text color="white" textAlign="center" fontSize="12px" mt="5px">
          @Copyright Panaverse.co. All Right Reserved
        </Text>
      </Box>
    </Box>
  );
}
