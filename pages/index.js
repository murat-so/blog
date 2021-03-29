import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import Link from 'next/link'

// chakraui
import { Container } from "@chakra-ui/react"
import { Text,IconButton, Button, ButtonGroup, Divider } from "@chakra-ui/react"

import { FaTwitter, FaGithub, FaTelegram, FaLinkedin, FaLink } from "react-icons/fa"
import { AiFillMail,AiFillPushpin } from "react-icons/ai"
import { FaMugHot,FaBlogger } from "react-icons/fa"

import { Box,Badge,Heading,Image } from "@chakra-ui/react"


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
      
      <Container mt="10">{/* SOCIAL BUTTONS: */}
          <Button>Photos</Button>{' '}
          <Button>Books</Button>{' '}
          <Button>Projects</Button>{' '}
          <Link href={'blog'}><Button bgGradient="linear(to-l, #7928CA,#FF0080)" _hover={{ opacity:.9, bg: "linear(to-l, #7928CA,#FF0080)" }} _active={{bg: "linear(to-l, #7928CA,#FF0080)"}} color="white">SEE MY BLOG</Button></Link>
      </Container>


      <Container mt="10">{/* REVİEWS: */}
            <Link href="reviews">
                <Button mb="3" p={3} shadow="md" fontSize="sm" w="100%" variant="outline" leftIcon={<FaTwitter />}>Twitter</Button>
            </Link>{/* #menu i*/}
            <Link href="photos">
                <Button mb="3" p={3} shadow="md" fontSize="sm" w="100%" variant="outline" leftIcon={<FaGithub />}>Github</Button>
            </Link>{/* #menu i*/}
            <Link href="photos">
                <Button mb="3" p={3} shadow="md" fontSize="sm" w="100%" variant="outline" leftIcon={<AiFillMail />}>Mail</Button>
            </Link>{/* #menu i*/}
      </Container>



      
      
    </Layout>
  )
}
