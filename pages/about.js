import Head from "next/head"
import React from "react"

import { Flex, Text, Divider, Link } from "@chakra-ui/core"
import styles from "../styles/Home.module.css"
import {
  PageHeader,
  PageWrap,
  PageSection,
  PageFooter,
} from "../src/components/common"
import { page_header_name } from "../src/resources/strings"

export default function about() {
  return (
    <div className={styles.container}>
      <Head>
        <title>COVID-19 UK Figures</title>
        <link rel="icon" href="/assets/rona2.png" />
      </Head>
      <PageHeader name="About Our Mission" />
      <PageWrap>
        <PageSection>
          <Flex
            style={{
              margin: "0.7rem auto",
              flexDirection: "column",
              justifyContent: "center",
              width: "75%",
              minWidth: "290px",
              color: "dimgray",
            }}
          >
            <Text fontSize="1rem" fontStyle="italic">
              We are aiming to provide a place, where people who have questions
              about the statistics, can ask questions using the data made
              publicly available.
            </Text>
            <Divider width={"50%"} alignSelf="center" />
            <Text fontSize="0.8rem" padding="0.2rem">
              I would like to use this website as a place of learning. A place
              to ask questions and see them answered using the data that we have
              available. I will do my utmost to remove any bias I may have, and
              just show and explain the data.
            </Text>
            <Text fontSize="0.8rem" padding="0.2rem">
              Please do get in contact if you have any questions you may have
              regarding available data, or if there is something you would like
              to know.
            </Text>
            <Text fontSize="1rem" fontStyle="italic">
              Where do you get your data from?
            </Text>
            <Divider width={"50%"} alignSelf="center" />
            <Text fontSize="0.8rem" padding="0.2rem">
              We currently are getting all our data straight from the government
              API.
            </Text>
            <Link href="https://coronavirus.data.gov.uk/" target="_blank">
              Government COVID Dashboard
            </Link>
          </Flex>
        </PageSection>
      </PageWrap>
      <PageFooter />
    </div>
  )
}
