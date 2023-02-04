"use client";
import styles from './page.module.css'
import { useState } from 'react'
import TopBanner from '@/components/sectionone/TopBanner';
import { Box } from '@chakra-ui/react';
import Information from '@/components/secotiontwo/Information';
import Cards from '@/components/sectionthree/Cards';
import { Courses } from '@/components/sectionfour/Courses';
import Outcome from '@/components/sectionfive/Outcome'

export default function Home() {

  return (
    <Box display='flex' flexDirection='column' rowGap='10px'>
      <TopBanner/>
      <Information/>
      <Cards/>
      <Courses/>
      <Outcome/>
    </Box>
  )
}
