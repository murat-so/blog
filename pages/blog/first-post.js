import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../../components/layout'

export default function FirstPost(){
    return (
        <Layout post>
            <Head>
                <title>First Post | { siteTitle }</title>
            </Head>
            
        </Layout>
    )
}