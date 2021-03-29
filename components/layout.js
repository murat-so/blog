import Head from 'next/head'
import styles from './layout.module.css'
import Image from 'next/image'
import Link from 'next/link'

import { Divider, Flex, Spacer, Box, Button, Heading, Container, Text } from "@chakra-ui/react"
import { AiFillCaretDown, AiOutlineArrowLeft } from "react-icons/ai"

export const siteTitle = 'Next'

export default function Layout({children, home, post, blog}){
    return (
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta
                name="description"
                content=""
                />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>

                    {!home && (

                <>
                <Container>
                        <header>
                            <Flex>
                                <Box p="2">
                                    <a href="/">
                                        <Heading as="h1" size="md">Xyz</Heading>
                                    </a>
                                </Box>
                                <Spacer />
                                <Box mt="1">
                                    {blog && (
                                        <>
                                        <Link href="/"><Button size="sm" ><AiOutlineArrowLeft /> &nbsp;&nbsp;Home</Button></Link>
                                        </>
                                    )}
                                    {post && (
                                        <Link href="/blog"><Button size="sm"><AiOutlineArrowLeft /> &nbsp;&nbsp;All Posts</Button></Link>
                                    )}
                                </Box>
                            </Flex>
                        </header>

                </Container>
                <br/><Divider /><br/>
                </>

                    )}
                    
            
            <main>{children}</main>
            

        </div>
    )
}