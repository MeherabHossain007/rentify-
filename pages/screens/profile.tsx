import {
  Button,
  Heading,
  HStack,
  Wrap,
  WrapItem,
  Text,
  Box,
  Flex,
  useColorModeValue,
  Image,
  VStack,
  Stack,
  Container,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useState } from "react";
import AdPost from "../components/adPost";
import ProfileNav from "../components/profileNav";
import { useEffect } from "react";
import ProRentCard from "../components/proCard";
import axios from "axios";
import { SearchCard } from "../components/search";

const api = axios.create({
  baseURL: `http://localhost:5001/api/post`,
});
function Profile() {
  const router = useRouter();
  const mail = router.query;
  const querystring = require("querystring");
  const ail = querystring.stringify(mail).replace(/=/, "");
  const email = ail.replace(/%40/, "@")
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts();
  },[]);
  const getPosts = async () => {
    let data = await api.get("/").then(({ data }) => data);
    setPosts(data);
    console.log(email);
  };

  return (
    <>
      <ProfileNav id={email}/>
      <Container
        bgImage="url('https://firebasestorage.googleapis.com/v0/b/rentify-4f59b.appspot.com/o/rentify%20reloaded%2F810-2%20%5BConverted%5D.png?alt=media&token=fecd0b33-c04d-4304-b9c7-f1643408f57c')"
        bgSize={"465px"}
        maxW={"full"}
        maxH={"45vh"}
      >
        <Flex alignItems={"center"}>
          <Box
            bgColor={useColorModeValue("white", "#1a202c")}
            borderRadius={10}
            boxShadow={"lg"}
            justifyContent={"center"}
            display={"flex"}
            flexDirection="row"
            alignItems="center"
            flexGrow={1}
            h={100}
            p={4}
            m={12}
          >
            <HStack p={10} justifyContent={"space-between"} flex={1}>
              <Heading textAlign="center" textColor={useColorModeValue("black", "white")}>My Post</Heading>
              <AdPost email ={email} />
            </HStack>
            <Button
              onClick={() => {
                window.location.reload();
              }}
              bgColor="green.200"
              textColor="green"
              boxShadow="0 0px 17px #9ae6b4"
              _hover={{
                bg: "green.100",
              }}
            >
              Load Post
            </Button>
          </Box>
        </Flex>
      </Container>
      <Box p={12}>
        <Flex flex={1} px={40}>
          <Wrap>
            {posts.map((posts) =>
              posts.email == email ? (
                <WrapItem>
                  <ProRentCard
                    amount={posts.price}
                    location={posts.location}
                    type={posts.type}
                    title={posts.name}
                    bed={posts.bed}
                    bath={posts.bath}
                    area={posts.area}
                    phone={posts.phonenumber}
                    email={posts.email}
                    image={
                      "https://firebasestorage.googleapis.com/v0/b/rentify-4f59b.appspot.com/o/colonial-style-house-night-scene.jpg?alt=media&token=6bfee092-54bc-4c68-904b-5d7af87a78c0"
                    }
                    id={posts.id}
                  >
                    <Button
                      w={100}
                      fontSize={"sm"}
                      fontWeight={400}
                      color="white"
                      variant={"solid"}
                      colorScheme={"blue"}
                    >
                      Book Now
                    </Button>
                  </ProRentCard>
                </WrapItem>
              ) : (
                ""
              )
            )}
          </Wrap>
        </Flex>
      </Box>
    </>
  );
}

export default Profile;
