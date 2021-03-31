import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import Link from 'next/link'

import { Box,Button, ButtonGroup, IconButtonBox,Badge,Heading,Text, Container, Image} from "@chakra-ui/react"

import { getSortedPostsData } from '../lib/posts'

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
      </Head>

      <Container mt="3">{/* POSTS: */}
      {allPostsData.map(({ id, date, title }) => (
          <Box key={id} p={0} mb={3} display={{ md: "flex" }} p={2} shadow="md" borderWidth="1px" flex="1" borderRadius="md">
            <Box flexShrink={0}>
              <Image
                borderRadius="md"
                width={{ md: 110 }}
                src="https://avatars.githubusercontent.com/u/81262445?v=4"
                alt="Woman paying for a purchase"
              />
            </Box>
            <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
              <Text
                fontWeight="bold"
                textTransform="uppercase"
                fontSize="xs"
                letterSpacing="wide"
                color="teal.600"
                mt="2">
                {id}
              </Text>
              <Link href={`/posts/${id}`}>
                <Text cursor="pointer" fontSize="xm">{title}</Text>
              </Link>
              <small>
                {date}
              </small>
            </Box>
          </Box> 
      ))}
          <center><Button mt="3" isLoading loadingText="Loading">
            Load More
          </Button></center>

      </Container> 
    </Layout>
  )
}
