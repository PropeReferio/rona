import React from 'react'
import { Flex, Text, Link } from '@chakra-ui/core'
import { PageLayout, PageSection, TitleText } from 'components/common'

export default function about() {
  return (
    <PageLayout tabTitle="COVID-19 UK About" headerTitle="About Our Mission">
      <PageSection background="#fff5f5">
        <Flex
          style={{
            margin: '0.7rem auto',
            flexDirection: 'column',
            justifyContent: 'center',
            width: '75%',
            color: 'dimgray',
          }}
        >
          <TitleText size="xl">
            We are aiming to provide a place, where people who have questions
            about the statistics, can ask questions using the data made publicly
            available.
          </TitleText>
          <Text p="0.2rem">
            We would like to use this website as a place of learning. A place to
            ask questions and see them answered using the data that we have
            available. I will do my utmost to remove any bias I may have, and
            just show and explain the data.
          </Text>
          <Text p="0.2rem">
            Please do get in contact if you have any questions you may have
            regarding available data, or if there is something you would like to
            know.
          </Text>
        </Flex>
      </PageSection>
      <PageSection>
        <Flex
          style={{
            margin: '0.7rem auto',
            flexDirection: 'column',
            justifyContent: 'center',
            width: '75%',
            color: 'dimgray',
          }}
        >
          <TitleText size="xl">Where do you get your data from?</TitleText>
          <Text p="0.2rem">
            We currently are getting all our data straight from the government
            API.
          </Text>
          <Link
            href="https://coronavirus.data.gov.uk/"
            target="_blank"
            alignSelf="flex-start"
            p="0.2rem"
          >
            Government COVID Dashboard
          </Link>
        </Flex>
      </PageSection>
    </PageLayout>
  )
}
