import React from "react"
import { Flex, Heading } from "@chakra-ui/core"
import Link from "next/link"
import styled from "styled-components"

export function PageHeader({ name }) {
  return (
    <Header>
      <Heading as="h1" p="0.5rem">
        {name}
      </Heading>
      <Flex justify="center">
        <Link href="/">
          <NavLink>Home</NavLink>
        </Link>
        <Link href="/about">
          <NavLink>About</NavLink>
        </Link>
      </Flex>
    </Header>
  )
}

const Header = styled.header`
  padding: 0.5rem;
  width: 100%;
  flex-direction: column;
  justify-content: center;
`
const NavLink = styled.a`
  padding: 0.1rem 1rem;
  margin: 0.2rem;
  border-bottom: #cfcfcf 2px solid;
  box-sizing: border-box;
  &:hover {
    background-color: #cfcfcf;
    cursor: pointer;
    border-radius: 3px;
  }
  &:focus {
    outline: blue;
  }
`
