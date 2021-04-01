import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import Link from 'next/link'

import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuIcon,
  MenuCommand,
  MenuDivider,
} from "@chakra-ui/react"

import { Box,Button, ButtonGroup, IconButtonBox,Badge,Heading,Text, Container, Image} from "@chakra-ui/react"

import { getSortedPostsData } from '../lib/posts'

import { AiFillCaretDown,AiOutlineArrowLeft } from "react-icons/ai";
import { Flex, Spacer } from "@chakra-ui/react"


export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}


export default function Home({allPostsData}) {
  return (
    <Layout blog>
      <Head>
        <title>Blog | {siteTitle}</title>
        <style>{`p{line-height:1.2}`}</style>
      </Head>
      
      

      <Container mt="3">{/* POSTS: */} 
      
      

      {allPostsData.map(({ id, date, title, category, cover_photo }) => (
        
      <div key={id}>

      {id.charAt(0) != '[' && (
        <>

        <Box p={0} mb={3} display={{ md: "flex" }} p={2} shadow="md" borderWidth="1px" flex="1" borderRadius="md">

        {cover_photo != "" && (
          <Box flexShrink={0} mr={{md:2}}>
            <Link href={`/posts/${id}`}>
              <Image
                cursor="pointer" 
                borderRadius="md"
                width={{ md: 110 }}
                src={cover_photo}
                alt={title}
              />
            </Link>
          </Box>
        )}

        <Box mt={{ base: 4, md: 0 }} ml={{ md: 2 }}>
          <Text
            fontWeight="bold"
            textTransform="uppercase"
            fontSize="xs"
            letterSpacing="wide"
            color="teal.600"
            mt="2" mb="2">
            {category}
          </Text>
          <Link href={`/posts/${id}`}>
            <Text cursor="pointer" fontSize="xm" fontWeight="bold">{title}</Text>
          </Link>
          <small>
            {date}
          </small>
        </Box>
        </Box> 

      </>
      )}

      </div>
        
      ))}
          <center><Button mt="3" isLoading loadingText="Loading">
            Load More
          </Button></center>

      </Container> 
    </Layout>
  )
}
