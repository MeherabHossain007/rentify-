import React from "react";
import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";

export default function Hero() {
  return (
    <Stack
      minH={"40vh"}
      direction={{ base: "column", md: "row" }}
      justifyContent={"center"}
      pl={200}
      mb={50}
    >
      <Flex flex={1} align={"center"} justify={"space-between"}>
        <Stack spacing={6} w={"full"} maxW={"xl"}>
          <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
            <Text
              as={"span"}
              position={"relative"}
              _after={{
                content: "''",
                width: "full",
                height: useBreakpointValue({ base: "20%", md: "30%" }),
                position: "absolute",
                bottom: 1,
                left: 0,
                bg: "blue.400",
                zIndex: -1,
              }}
            >
              Rentify
            </Text>
            <br />{" "}
            <Text color={"blue.400"} as={"span"}>
              Rent Service for all catogory.
            </Text>{" "}
          </Heading>
          <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
            The project board is an exclusive resource for home rent service.
            It's perfect for all types of people and makes your home rent easy.
          </Text>
          <Stack direction={"row"} spacing={4}>
            <Button
              rounded={"full"}
              bg={"blue.400"}
              color={"white"}
              _hover={{
                bg: "blue.500",
              }}
            >
              Get Started
            </Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex>
        <Image
          alt={"Login Image"}
          boxSize={"550px"}
          objectFit={"contain"}
          src={
            "https://firebasestorage.googleapis.com/v0/b/rentify-4f59b.appspot.com/o/rentify%20reloaded%2F20945141.jpg?alt=media&token=578f790a-baad-4748-8585-be304e726552"
          }
        />
      </Flex>
    </Stack>
  );
}
