import {
  Badge,
  Box,
  Button,
  Center,
  Flex,
  Heading,
  HStack,
  Icon,
  Image,
  Link,
  Stack,
  Tag,
  TagLabel,
  TagRightIcon,
  Text,
  useBoolean,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { FaBed, FaBath, FaBorderAll } from "react-icons/fa";
import React, { Component, ReactDOM, useEffect, useState } from "react";
import router from "next/router";
import AlertMassage from "./alert";
import { IoLocationSharp } from "react-icons/io5";
export default function RentCard({
  amount,
  location,
  type,
  title,
  bed,
  bath,
  area,
  image,
  id,
  phone,
  children
}) {
  var isBooked: boolean;
  const [bookId, setId] = useState("");

  useEffect(() => {
    bookInfo();
  }, []);

  const bookInfo = async () => {
    
  };
  return (
    <Center>
      <Stack
        w={"100%"}
        height={"100%"}
        padding={4}
      >
        <Center py={6}>
          <Box
            borderWidth="1px"
            borderRadius="lg"
            w={"100%"}
            height={"100%"}
            bg={useColorModeValue("white", "gray.900")}
            boxShadow={"lg"}
            padding={4}
            as={"button"}
            onClick={() => {
              router.push({
                pathname: "/components/rentDetails",
                query: id,
              });
            }}
          >
            <Stack direction={{ base: "column", md: "row" }}>
              <Image
                objectFit="cover"
                maxH={"30%"}
                maxW={"40%"}
                borderRadius={"lg"}
                src={image}
              />
              <Stack
                flex={1}
                flexDirection="column"
                justifyContent="start"
                alignItems="start"
                p={1}
                pl={10}
              >
                <Stack direction="row" alignItems="baseline">
                  <Text
                    fontSize="md"
                    fontWeight="bold"
                    textAlign={"match-parent"}
                  >
                    BDT
                  </Text>
                  <Text fontSize="4xl" fontWeight="bold">
                    {amount}
                  </Text>
                </Stack>
                <Tag size={"lg"} variant="outline" colorScheme="blue">
                  <TagLabel>{location}</TagLabel>
                  <TagRightIcon boxSize="12px" as={IoLocationSharp} />
                </Tag>
                <Badge fontSize="sm" colorScheme="blue" variant={"solid"}>
                  {type}
                </Badge>
                <Heading
                  fontSize={20}
                  overflow={"hidden"}
                  orientation={"horizontal"}
                  noOfLines={1}
                  textAlign={"start"}
                >
                  {title}
                </Heading>
                <HStack spacing={7} pt={2} alignItems={"baseline"}>
                  <HStack>
                    <FaBed size={20} />
                    <Text>{bed}</Text>
                  </HStack>
                  <HStack>
                    <FaBath size={20} />
                    <Text>{bath}</Text>
                  </HStack>
                  <HStack>
                    <FaBorderAll size={20} />
                    <Text>{area}</Text>
                  </HStack>
                </HStack>
                <Flex
                  justifyContent={"flex-end"}
                  flexDirection={"column"}
                  flex={1}
                >
                  <HStack justifyContent={"start"}>{children}</HStack>
                </Flex>
              </Stack>
              {bookId === id ? (
                <Badge colorScheme="green" h={5}>
                  Booked
                </Badge>
              ) : (
                ""
              )}
            </Stack>
          </Box>
        </Center>
      </Stack>
    </Center>
  );
}
