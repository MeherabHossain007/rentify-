import {
  Center,
  Flex,
  Heading,
  HStack,
  VStack,
  Wrap,
  WrapItem,
  Text,
  Stack,
  Container,
} from "@chakra-ui/react";
import router from "next/router";
import React, { Component, useEffect, useState } from "react";
import HomeCard from "../components/catagoryCard";
import Footer from "../components/footer";
import Hero from "../components/Hero";
import Navbar from "../components/navBar";
import Search from "../components/search";

export default function HomePage() {
  const [type, setType] = useState("");
  const [posts, setPosts] = useState([]);
  return (
    <>
      <Navbar />
      <Hero />
      <Center>
        <VStack flex={1}>
          <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
            <Heading
              fontSize={"4xl"}
              bgGradient={"linear(to-r, #22c1c3, #fdbb2d)"}
              bgClip="text"
            >
              Search Your Desire Rent
            </Heading>
            <Text color={"gray.600"} fontSize={"xl"}>
              Easy access and fast way of finding rent through Internet and
              giving user friendly services to everyone.
            </Text>
          </Stack>
          <Search />
        </VStack>
      </Center>

      <Heading
        textAlign="center"
        pt={10}
        pb={5}
        bgGradient={"linear(to-r, #22c1c3, #fdbb2d)"}
        bgClip="text"
      >
        Category
      </Heading>
      <Text color={"gray.600"} fontSize={"xl"} textAlign="center" pb={5}>
        East way of finding rent through our Category by choosing your desired
        category.
      </Text>
      <HStack flex={1} justify="center" mb={5}>
        <HomeCard Title={"Hostel"} />
        <HomeCard Title={"Apartment"} />
        <HomeCard Title={"Roommate"} />
        <HomeCard Title={"Sublet"} />
      </HStack>
      <Footer />
      <div>
        <script
          src="//code.tidio.co/xm0umtoxjpxqm8yuk9w9hlwypijcj8nz.js"
          async
        ></script>
      </div>
    </>
  );
}
