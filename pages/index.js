import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import Link from 'next/link'

// chakraui
import { Container } from "@chakra-ui/react"
import { Text,IconButton, Button, ButtonGroup, Divider } from "@chakra-ui/react"

import { FaTwitter, FaGithub, FaTelegram, FaLinkedin, FaLink } from "react-icons/fa"
import { AiFillMail } from "react-icons/ai"
import { FaMugHot } from "react-icons/fa"

import { Box,Badge,Heading } from "@chakra-ui/react"


export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>Home | {siteTitle}</title>
      </Head>
      
      <Container>{/* BIO: */}
        <Text bgGradient="linear(to-l, #7928CA,#FF0080)" bgClip="text" fontSize="6xl" fontWeight="extrabold">
        Hello, I'm Murat.
        </Text>
        <Text fontSize="md">
            I living in San Francisco. I interested SwiftUI, NextJS and PHP. And I'm writing something.
        </Text>
      </Container>
      
      <Container mt="5">{/* SOCIAL BUTTONS: */}
        <IconButton aria-label="Twitter" icon={<FaTwitter />}/>{' '}
        <Button leftIcon={<FaGithub />}>Github</Button>{' '}
        <Button leftIcon={<AiFillMail />}>Send Me Mail </Button>{' '}
      </Container>

      <Container mt="10">{/* POSTS: */}
          <Text fontSize="md" mb="3" bgGradient="linear(to-l, #7928CA,#FF0080)" bgClip="text">My posts </Text> {/* #TITLE */}
            <Link href="blog/first-post">
              <Box cursor="pointer" mb="3" p={3} shadow="md" borderWidth="1px" flex="1" borderRadius="md">
                <Heading fontSize="md">Legendary GT Computing Instructor Bill Leahy Retires <Badge borderRadius="full" ml="1" px="2" py="1" colorScheme="red">New</Badge></Heading>
              </Box>
            </Link>{/* #post */}
            <Link href="blog/first-post">
              <Box cursor="pointer" mb="3" p={3} shadow="md" borderWidth="1px" flex="1" borderRadius="md">
                <Heading fontSize="md">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum aperiam, quos provident.<Badge borderRadius="full" ml="1" px="2" py="1">29.03.2021</Badge></Heading>
              </Box>
            </Link>{/* #post */}
      </Container>
      
      
    </Layout>
  )
}
