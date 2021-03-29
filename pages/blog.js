import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import Link from 'next/link'

import { Box,Badge,Heading,Text, Container, Image} from "@chakra-ui/react"

export default function Home() {
  return (
    <Layout blog>
      <Head>
        <title>Blog | {siteTitle}</title>
      </Head>

      <Container mt="3">{/* POSTS: */}

          <Box p={0} mb={3} display={{ md: "flex" }} p={2} shadow="md" borderWidth="1px" flex="1" borderRadius="md">
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
                Software Development 
              </Text>
              <Link href="blog/first-post">
                <Text cursor="pointer" fontSize="xm">Legendary GT Computing Instructor Bill Leahy Retires</Text>
              </Link>
            </Box>
          </Box> {/* post */}

          <Box p={0} mb={3} display={{ md: "flex" }} p={2} shadow="md" borderWidth="1px" flex="1" borderRadius="md">
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
                mt="2" mb="1">
                Software Development
              </Text>
              <Link href="blog/first-post">
                <Text cursor="pointer" fontSize="xm">Legendary GT Computing Instructor Bill Leahy Retires</Text>
              </Link>
            </Box>
          </Box> {/* post */}

          <Box p={0} mb={3} display={{ md: "flex" }} p={2} shadow="md" borderWidth="1px" flex="1" borderRadius="md">
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
                mt="2" mb="1">
                Software Development
              </Text>
              <Link href="blog/first-post">
                <Text cursor="pointer" fontSize="xm">Legendary GT Computing Instructor Bill Leahy Retires</Text>
              </Link>
            </Box>
          </Box> {/* post */}
         
          
      </Container> 
    </Layout>
  )
}
