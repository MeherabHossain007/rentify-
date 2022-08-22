import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
  FormErrorMessage,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

const api = axios.create({
  baseURL: `http://localhost:5000/api/user`,
});
export default function Login() {
  const toast = useToast();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUser] = useState([]);
  const[islogin, setLogin] = useState("")
  const[isError, setError] = useState(false);
  const handleLogin = async (email: string, password: string) => {
    let data = await api.get("/").then(({ data }) => data);
    setUser(data);
    users.map((users) => {
      if (email == users.email && password == users.password) {
        setLogin("true")
        router.push({
          pathname: "/screens/profile",
          query: users.email,
        });   
      }
      else{
        setLogin("false")
        setError(true)
      }
    });
  };

  return (
    <Flex
      minH={"50vh"}
      minW={"50vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Sign in to your account</Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            to enjoy all of our cool <Link color={"green.400"}>features</Link>{" "}
            ✌️
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="email" isInvalid={isError}>
              <FormLabel>Email address</FormLabel>
              <Input type="email" onChange={(e) => setEmail(e.target.value)} />
              {!isError ? (
                <FormErrorMessage>
                  Password or email is invalid
                </FormErrorMessage>
              ) : (
                ""
              )}
            </FormControl>
            <FormControl id="password" isInvalid={isError}>
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
              {!isError ? (
                <FormErrorMessage>
                  Password or email is invalid
                </FormErrorMessage>
              ) : (
                ""
              )}
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Link color={"green.400"}>Forgot password?</Link>
              </Stack>
              <Button
                bg={"green.400"}
                color={"white"}
                _hover={{
                  bg: "green.500",
                }}
                onClick={(e) => {
                  e.preventDefault();
                  handleLogin(email, password);
                  console.log(islogin)
                  if (islogin == "false") {
                    toast({
                      title: "password or username is invalid",
                      status: "error",
                      duration: 1000,
                      isClosable: true,
                    });
                  }
                }}
              >
                Sign in
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
