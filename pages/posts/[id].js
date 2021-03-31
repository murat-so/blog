import Layout, { siteTitle } from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head'
import Date from '../../components/date'



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
        </Head>

        {postData.title}
        <br />
        <Date dateString={postData.date} />
        <br />
        {postData.id}
        <br />
        
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </Layout>
    )
  }
  

export async function getStaticProps({ params }) {
    const postData = getPostData(params.id)
    return {
      props: {
        postData
      }
    }
  }