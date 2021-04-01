import Layout, { siteTitle } from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head'
import Date from '../../components/date'
import { Divider, Badge, Link, Flex, Box, Heading, Spacer, Button } from "@chakra-ui/react"

import { FaHome,FaAngleRight } from "react-icons/fa";
import { AiFillCaretDown, AiOutlineArrowLeft } from "react-icons/ai"


import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@chakra-ui/react"



export async function getStaticPaths() {
    const paths = getAllPostIds() 
    return {
      paths,
      fallback: false
    }
  }

export default function Post({ postData }) {
    return (
      <Layout>
        <Head>
            <title>{postData.title} | { siteTitle }</title>

            <style>{`
              h1,h2,h3,h4,h5,h6{
                margin: 0!important;
                font-size:revert!important;
                font-weight: revert!important;
                line-height: 1.1!important;
              }
              p{
                margin: revert!important;
              }
`}
            </style>
        </Head>

        <header>
            <Flex>
                <Box mt="1" mb="5">
                    <Link href="/blog"><Button size="sm"><AiOutlineArrowLeft /> &nbsp;&nbsp;All Posts</Button></Link>
                </Box>
            </Flex>
        </header>

        <div>
          <h1>{postData.title}</h1>
          <Link href={`/posts/${postData.id}`}><Badge colorScheme="purple" background="none" mr="1"><Date dateString={postData.date} /></Badge></Link>
          <Link href={`/posts/${postData.id}`}><Badge colorScheme="purple" background="none">{postData.category}</Badge></Link>
        </div>
        <br />

        <div id="md-content">
          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </div>

        </Layout>
    )
  }
  

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id)
    return {
      props: {
        postData
      }
    }
  }