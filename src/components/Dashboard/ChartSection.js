import React from "react"
import { Text, Flex, Divider } from "@chakra-ui/core"
import { PageSection } from "../common"
import CompareChart from "../CompareChart"

export default function ChartSection({
  chartTitle,
  main,
  mainTitle,
  yTitle,
  baseLine,
  baseLineTitle,
  dates,
  background,
}) {
  return (
    <PageSection flexDir="column" background={background}>
      <Flex
        alignItems="space-between"
        flexDir="column"
        w={["100%", "100%", "25%", "25%"]}
      >
        <Text as="h2" p={2} fontSize="3xl" color="blue.900">
          {chartTitle}
        </Text>
        <Divider w="75%" alignSelf="center" />
        <Text paddingLeft="1rem">
          Most Recent: {main[2] !== 0 ? main[2].toLocaleString() : "No Data"}
        </Text>
        <Text paddingLeft="1rem">
          Total {yTitle}: {main.reduce((a, b) => a + b).toLocaleString()}
        </Text>
      </Flex>
      <CompareChart
        main={main}
        baseLine={baseLine}
        mainTitle={mainTitle}
        baseLineTitle={baseLineTitle}
        dates={dates}
        xTitle={"Date"}
        yTitle={yTitle}
      />
    </PageSection>
  )
}