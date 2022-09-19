import {
  Center,
  Flex,
  Heading,
  HStack,
  VStack,
  Text,
  Stack,
  Container,
  Image,
} from "@chakra-ui/react";
import router from "next/router";
import React, { Component, useEffect, useState } from "react";
import HomeCard from "../components/catagoryCard";
import Footer from "../components/footer";
import Hero from "../components/Hero";
import Navbar from "../components/navBar";
import CallToActionWithVideo from "../components/pHero";
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
          <CallToActionWithVideo/>
          <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
            <Heading
              fontSize={"4xl"}
              bgGradient={"linear(to-r, #090979,#00d4ff)"}
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
        bgGradient={"linear(to-r, #090979,#00d4ff)"}
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
      <Heading
        textAlign="center"
        pt={10}
        pb={5}
        bgGradient={"linear(to-r, #090979,#00d4ff)"}
        bgClip="text"
      >
        JoinUs Now
      </Heading>
      <Text color={"gray.600"} fontSize={"xl"} textAlign="center">
        East way of finding rent through our Category by choosing your desired
        category nnd filtering and easy to manage profile.
      </Text>
      <Flex flex={1} justify="center" >
        <Image
          alt={"Login Image"}
          height="600"
          objectFit={"cover"}
          src={
            "https://firebasestorage.googleapis.com/v0/b/rentify-4f59b.appspot.com/o/rentify%20reloaded%2F5340018.jpg?alt=media&token=4c01aa3e-3a4a-4e49-a2fe-122dfb73c7bc"
          }
        />
      </Flex>
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
