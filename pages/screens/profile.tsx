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
  FormControl,
  FormLabel,
  Select,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useState } from "react";
import AdPost from "../components/adPost";
import ProfileNav from "../components/profileNav";
import { useEffect } from "react";
import ProRentCard from "../components/proCard";
import axios from "axios";

const api = axios.create({
  baseURL: `http://localhost:5001/api/post`,
});
function Profile() {
  const router = useRouter();
  const mail = router.query;
  const querystring = require("querystring");
  const ail = querystring.stringify(mail).replace(/=/, "");
  const email = ail.replace(/%40/, "@");
  const [posts, setPosts] = useState([]);
  const [name, setName] = useState("");
  const [type, setType] = useState("None");

  useEffect(() => {
    getPosts();
  },[])

  const getPosts = async () => {
    let data = await api.get("/").then(({ data }) => data);
    setPosts(data);
    console.log(email);
  };


  return (
    <>
      <ProfileNav id={email} />
      <Container
        bgImage="url('https://firebasestorage.googleapis.com/v0/b/rentify-4f59b.appspot.com/o/rentify%20reloaded%2F810-2%20%5BConverted%5D.png?alt=media&token=fecd0b33-c04d-4304-b9c7-f1643408f57c')"
        bgSize={"370px"}
        maxW={"full"}
        h={"40vh"}
        display={"flex"}
        flexDirection="row"
        alignItems="center"
        flexGrow={1}
      >
        <Box
          bgColor={useColorModeValue("white", "#171923")}
          borderRadius={10}
          boxShadow={"lg"}
          justifyContent={"center"}
          alignItems="center"
          flexGrow={1}
          p={8}
          mx={12}
        >
          <Flex alignItems={"center" } mb={3}>
            <Box
              bgColor={useColorModeValue("white", "#171923")}
              borderRadius={10}
              boxShadow={"xl"}
              justifyContent={"center"}
              display={"flex"}
              flexDirection="row"
              alignItems="center"
              flexGrow={1}
              h={100}
              w={"20"}
              p={4}
            >
              <HStack p={10} justifyContent={"space-between"} flex={1}>
                <Heading
                  textAlign="center"
                  textColor={useColorModeValue("black", "white")}
                >
                  My Post
                </Heading>
                <AdPost email={email} />
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
          <HStack
            display={"flex"}
            flexDirection="row"
            justifyContent={"center"}
            bgColor={useColorModeValue("white", "#171923")}
            borderRadius={10}
            boxShadow={"lg"}
            p={3}
          >
            <FormControl>
              <FormLabel>Category</FormLabel>
              <Select
                id="location"
                placeholder="Select location"
                onChange={(e) => setType(e.target.value)}
              >
                <option>None</option>
                <option>Hostel</option>
                <option>Apartment</option>
                <option>Roommate</option>
                <option>Sublet</option>
              </Select>
            </FormControl>
          </HStack>
        </Box>
      </Container>
      <Box p={12}>
        <Flex flex={1} px={40}>
          <Wrap>
            {posts.map((posts) =>
              posts.type == type ? (
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
                        `https://fahabcdzxgcwuzrpykgn.supabase.co/storage/v1/object/public/avatars/${posts.image}`
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
                  " "
                )
              ) : (
                ""
              )
            )}
            {type === "None"
              ? posts.map((posts) =>
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
                          `https://fahabcdzxgcwuzrpykgn.supabase.co/storage/v1/object/public/avatars/${posts.image}`
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
                    " "
                  )
                )
              : ""}
          </Wrap>
        </Flex>
      </Box>
    </>
  );
}

export default Profile;
