"use client";
import {
  Box,
  Heading,
  Text,
  Stack,
  VStack,
  Button,
  Drawer,
  DrawerOverlay,
  useDisclosure,
 
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  DrawerHeader,
} from "@chakra-ui/react";
import Image from "next/image";
import logo from "../../public/logo.png";
import { HamburgerIcon, CloseIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { useState } from "react";
import MobileView from "./MobileView";
import DesktopView from "./DesktopView";
import Link from "next/link";

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box>
      <Box
        as="div"
        display={{ base: "none", lg: "flex" }}
        w='full'
        h="120px"
        zIndex="1"
        bgGradient="linear(280deg, #F5EEFE,#F5EEFE,#F7EEFF,#FFFFFF)"
        justifyContent="space-evenly"
        alignItems="center"
        color="#2F1063"
        fontFamily="Montserrat">

        <Box as="div" mx="10px" my="5px">
          <Image src={logo} alt="logo" width={120} height={69} />
        </Box>

        <Box
          display="flex"
          flexDirection="row"
          width={{ lg: "320px" }}
          justifyContent="space-evenly"
          alignItems="center"
          textAlign="center"
          fontWeight="bold"
          fontSize={{ lg: "12px" }}>

          <Text fontWeight="bolder" letterSpacing='1px'><Link href='/'>HOME</Link></Text>
          <DesktopView/>
          
        </Box>

        <VStack width="fit-content" lineHeight="1px">
          <Heading
            fontWeight="black"
            fontSize={{ lg: "18px", xl: "21.5px" }}
            letterSpacing={"1px"}
          >
            Presidential Initiative
          </Heading>
          <Text
            fontWeight="bold"
            fontSize={{ lg: "8.5px", xl: "10px" }}
            textAlign={{ lg: "left", xl: "right" }}
          >
            for Artificial Intelligence and Computing (PIAIC)
          </Text>
        </VStack>
      </Box>


      {/* Mobile View */}
      <Box
        w="full"
        display={{ base: "flex", lg: "none" }}
        justifyContent="space-between"
        py="10px"
        px="20px"
        bgColor="transparent"
        zIndex={2}
      >
        <Box as="div" mx="10px" my="5px">
          <Image src={logo} alt="logo" width={120} height={69} />
        </Box>
        <Button color="#3D1362" bgColor="whiteAlpha.200" onClick={onOpen}>
          <HamburgerIcon />
        </Button>

        <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
          <DrawerOverlay />
          <MobileView />
        </Drawer>
      </Box>
    </Box>
  );
}
