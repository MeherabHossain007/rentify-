import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  Image,
  Link,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import axios from "axios";
import React, { Component } from "react";

const api = axios.create({
  baseURL: `http://localhost:5000/api/user`,
});

class SignUp extends Component {
  state = {
    name: "",
    email: "",
    password: "",
  };

  handleSignUp = async (_Email: string, _Password: string, _Name: string) => {
    let res = await api
      .post("/", {
        name: _Name,
        password: _Password,
        email: _Email,
      })
      .catch((err) => console.log(err));
    console.log(res);
  };
  render() {
    const toast = useToast();
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    return (
      <Flex minH={"50-*+vh"} minW={"80vh"} align={"center"} justify={"center"}>
        <HStack>
          <Image
            alt={"Login Image"}
            boxSize={"550px"}
            objectFit={"contain"}
            src={
              "https://firebasestorage.googleapis.com/v0/b/rentify-4f59b.appspot.com/o/rentify%20reloaded%2F20943394.jpg?alt=media&token=348a271d-cf64-42fd-9952-d52a7cc05236"
            }
          />
        </HStack>
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"} textAlign={"center"}>
              Sign up
            </Heading>
            <Text fontSize={"lg"} color={"gray.600"}>
              to enjoy all of our cool features ✌️
            </Text>
          </Stack>
          <Box rounded={"lg"} boxShadow={"lg"} p={8} minW={"sm"}>
            <Stack spacing={4}>
              <FormControl id="name" isRequired>
                <FormLabel>Name</FormLabel>
                <Input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </FormControl>
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <InputRightElement h={"full"}>
                    <Button
                      variant={"ghost"}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }
                    >
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                  loadingText="Submitting"
                  size="lg"
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                  onClick={(e) => {
                    e.preventDefault();
                    this.handleSignUp(email, password, name);
                    toast({
                      title: "SignUp Successfully",
                      status: "success",
                      duration: 1000,
                      isClosable: true,
                    });
                  }}
                >
                  Sign up
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={"center"}>
                  Already a user?{" "}
                  <Link color={"green.400"} href="/screens/login">
                    Login
                  </Link>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }
}

export default SignUp;
