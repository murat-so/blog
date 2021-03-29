import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import Link from 'next/link'

import { Box,Badge,Heading,Text } from "@chakra-ui/react"

export default function Home() {
  return (
    <Layout blog>
      <Head>
        <title>Blog | {siteTitle}</title>
      </Head>

      <section>
        <Link href="blog/first-post">
          <Box cursor="pointer" mb="3" p={3} shadow="md" borderWidth="1px" flex="1" borderRadius="md">
              <Heading fontSize="md">First Post <Badge borderRadius="full" ml="1" px="2" colorScheme="red">New</Badge></Heading>
          </Box>
        </Link>{/* #post */}
        <Link href="blog/first-post">
          <Box cursor="pointer" mb="3" p={3} shadow="md" borderWidth="1px" flex="1" borderRadius="md">
              <Heading fontSize="md">First Post <Badge borderRadius="full" ml="1" px="2">2 days ago</Badge></Heading>
          </Box>
        </Link>{/* #post */}
        <Link href="blog/first-post">
          <Box cursor="pointer" mb="3" p={3} shadow="md" borderWidth="1px" flex="1" borderRadius="md">
              <Heading fontSize="md">First Post <Badge borderRadius="full" ml="1" px="2">2 months ago</Badge></Heading>
          </Box>
        </Link>{/* #post */}
      </section>
    </Layout>
  )
}
