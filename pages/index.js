import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import Link from 'next/link'

// chakraui
import { Container } from "@chakra-ui/react"
import { Text,IconButton, Button, ButtonGroup, Divider } from "@chakra-ui/react"

import { FaTwitter, FaGithub, FaTelegram, FaLinkedin, FaLink } from "react-icons/fa"
import { AiFillMail } from "react-icons/ai"
import { FaMugHot } from "react-icons/fa"



export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>Home | {siteTitle}</title>
      </Head>
      
      <Container>
        <Text bgGradient="linear(to-l, #7928CA,#FF0080)" bgClip="text" fontSize="6xl" fontWeight="extrabold">
        Hello, I'm Murat.
        </Text>
        <Text fontSize="md">
            I lived in San Francisco. I interested SwiftUI, NextJS and PHP. And I'm writing something.
        </Text>
      </Container>
      
      <Container mt="5">
        <IconButton aria-label="Twitter" icon={<FaTwitter />}/>{' '}
        <Button leftIcon={<FaGithub />}>Github</Button>{' '}
        <Button leftIcon={<AiFillMail />}>Send Me Mail </Button>{' '}
        <Link href={'/blog'}>
            <Button size="md" bgGradient="linear(to-l, #7928CA,#FF0080)" _hover={{bgGradient: "",}} _active={{bgGradient: "",}} color="white" leftIcon={<FaMugHot />}>Read My Articles</Button>
        </Link>
      </Container>

      
    </Layout>
  )
}
