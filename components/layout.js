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

                    {blog && (

                <>
                <Container>
                        <header>
                            <Flex>
                                <Box mt="1">
                                    {blog && (
                                        <>
                                        <Link href="/"><Button size="sm" ><AiOutlineArrowLeft /> &nbsp;&nbsp;Home</Button></Link>
                                        </>
                                    )}
                                </Box>
                                <Box p="2" ml="1" mb="3">
                                    <Heading as="h1" size="md">{siteTitle}'s Blog</Heading>
                                </Box>
                                <Spacer />
                            </Flex>
                        </header>

                </Container>
                </>

                    )}
                    
            
            <main>{children}</main>
            

        </div>
    )
}