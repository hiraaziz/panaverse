import React from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
} from "@chakra-ui/react";
import Link from "next/link";

export type route={
  name:string,route:string
}
export type desktop = {
  menubutton: string;
  Items: route[];
};

export const DesktopNav = [
  {
    menubutton: "COURSES",
    Items: [
      {name:"Quarter 1",
        route:'/quarterone'}, 
      {name:"Quarter 2",
        route:'/quartertwo'},
      {name:"Quarter 3",
        route:'/quarterthree'}],
  },
  {
    menubutton: "SPECIALIZED",
    Items: [
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
];

const DesktopView = () => {
  return (
    <>
      {DesktopNav.map((nav: desktop) => (
        <Menu>
          <MenuButton fontWeight="bolder" letterSpacing="1px">
            {nav.menubutton}
          </MenuButton>
          <MenuList py="10px">
            {nav.Items.map((item: route) => (
              <>
                <MenuItem
                  fontWeight="bold"
                  color="#3d1362"
                  fontSize="13px"
                  letterSpacing="1px"
                  _hover={{ bgColor: "#F6EEFF" }}
                >
                  <Link href={item.route}>{item.name}</Link>
                </MenuItem>
                <MenuDivider />
              </>
            ))}
          </MenuList>
        </Menu>
      ))}
    </>
  );
};

export default DesktopView;
