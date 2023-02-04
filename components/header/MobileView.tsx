import React from "react";
import {
  Text,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { DesktopNav } from "./DesktopView";
import { desktop, route } from "./DesktopView";
import Link from "next/link";

const MobileView = () => {
  return (
    <DrawerContent fontFamily="Montserrat">
      <DrawerCloseButton />
      <DrawerHeader color="#3d1362" fontWeight="bolder">
        PANAVERSE
      </DrawerHeader>
      <DrawerBody
        display="flex"
        flexDirection="column"
        rowGap="20px"
        mt="20px"
        color="#3D1362"
        letterSpacing="1px"
      >
        <Accordion allowMultiple>
          <AccordionItem bgColor="transparent" borderBottom='none'>
            <Text>
              {DesktopNav.map((mob:desktop,index:number) => (
                <>
                  <AccordionButton
                    display="flex"
                    justifyContent="space-between"
                    fontSize="12px"
                    fontWeight="black"
                    letterSpacing='1px'
                    key={index}
                  >
                    {mob.menubutton}
                    <AccordionIcon />
                  </AccordionButton>
                  <AccordionPanel
                    fontWeight="bold"
                    fontSize="10px"
                    display="flex"
                    flexDirection="column"
                    rowGap="10px"
                  >
                    {mob.Items.map((item:route,ind:number)=>(
                        <Text key={ind}><Link href={item.route}>{item.name}</Link></Text>
                    ))}
                  </AccordionPanel>
                </>
              ))}
            </Text>
          </AccordionItem>
        </Accordion>
      </DrawerBody>

      <DrawerFooter>
        <Text>Panaverse.Co</Text>
      </DrawerFooter>
    </DrawerContent>
  );
};

export default MobileView;
