import { SearchIcon } from "@chakra-ui/icons";
import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
  Box,
  HStack,
  FormControl,
  FormLabel,
  Input,
  IconButton,
  Center,
  Wrap,
  WrapItem,
  Heading,
  useColorModeValue,
  useRadio,
  useRadioGroup,
  Badge,
  Select,
  Container,
  SimpleGrid,
} from "@chakra-ui/react";
import axios from "axios";
import { FC, SetStateAction, useEffect, useState } from "react";
import HomeCard from "../components/catagoryCard";
import Navbar from "../components/navBar";
import RentCard from "../components/rentCard";

const Card = ({ children }: any) => {
  return (
    <Box
      bgColor={"white"}
      borderRadius={10}
      boxShadow={"lg"}
      justifyContent={"center"}
      alignItems={"center"}
      h={100}
      w={"100%"}
      p={4}
    >
      {children}
    </Box>
  );
};

const SearchCard = ({ children }: any) => {
  return (
    <Box
      bgColor={"white"}
      borderRadius={10}
      boxShadow={"lg"}
      justifyContent={"center"}
      alignItems={"center"}
      h={100}
      w={"md"}
      p={4}
      my={4}
    >
      {children}
    </Box>
  );
};

const api = axios.create({
  baseURL: `http://localhost:5001/api/post`,
});

export default function SearchScreen() {
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState(0);
  const [posts, setPosts] = useState([]);
  const [type, setType] = useState("");

  const handleSearch = async () => {
    let data = await api.get("/").then(({ data }) => data);
    setPosts(data);
  };

  const RadioCard = (props) => {
    const { getInputProps, getCheckboxProps } = useRadio(props);
    const input = getInputProps();
    const checkbox = getCheckboxProps();

    return (
      <Box as="label">
        <input {...input} />
        <Box
          {...checkbox}
          cursor="pointer"
          borderRadius="md"
          _checked={{
            bg: "blue.600",
            color: "white",
            borderColor: "blue.600",
          }}
          _focus={{
            boxShadow: "outline",
          }}
          px={5}
          py={3}
          w={"263px"}
          bg={useColorModeValue("white", "gray.800")}
          boxShadow={"lg"}
          _hover={{
            boxShadow: "2xl",
          }}
          rounded={"lg"}
          pos={"relative"}
          display={"flex"}
          flexDirection="column"
          alignItems="center"
        >
          {props.children}
        </Box>
      </Box>
    );
  };

  const options = ["Hostel", "Apartment", "Roommate", "Sublet"];

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "framework",
    defaultValue: " ",
    onChange: setType,
  });

  const group = getRootProps();

  const Post = ({ posts }) => {
    console.log(posts);
    return (
      <Flex flex={1} flexDirection={"row"}>
        {posts.map((posts) =>
          posts.approval_status === "True" ? (
            posts.location === location ? (
              posts.type === type ? (
                Number(posts.price) <= Number(price) ? (
                  <SimpleGrid columns={2}>
                    <RentCard
                      amount={posts.price}
                      location={posts.location}
                      type={posts.type}
                      title={posts.name}
                      bed={posts.bed}
                      bath={posts.bath}
                      area={posts.area}
                      phone={posts.number}
                      image={`https://fahabcdzxgcwuzrpykgn.supabase.co/storage/v1/object/public/avatars/${posts.image}`}
                      id={posts.id}
                      children={undefined}
                    />
                  </SimpleGrid>
                ) : (
                  " "
                )
              ) : (
                " "
              )
            ) : (
              " "
            )
          ) : (
            " "
          )
        )}
      </Flex>
    );
  };
  return (
    <>
      <Navbar />
      <Container
        bgImage="url('https://firebasestorage.googleapis.com/v0/b/rentify-4f59b.appspot.com/o/rentify%20reloaded%2F2201_w039_n003_98b_p1_98.jpg?alt=media&token=f3176961-d18f-4c97-ad45-2e48db68645d')"
        bgSize={"867px"}
        maxW={"full"}
        h={"45vh"}
        justifyContent={"center"}
        display={"flex"}
        flexDirection="row"
        alignItems="center"
        flexGrow={1}
      >
        <Center>
          <Flex
            w={"100%"}
            borderRadius={30}
            backgroundSize={"cover"}
            backgroundPosition={"center center"}
          >
            <VStack
              w={"full"}
              justify={"center"}
              px={useBreakpointValue({ base: 4, md: 8 })}
              borderRadius={30}
              justifyContent={"center"}
            >
              <Box
                bgColor={"white"}
                boxSize={"400px"}
                boxShadow={"2xl"}
                w={"100%"}
                h={"100%"}
                borderRadius={10}
                display={"flex"}
                flexDirection="column"
                justifyContent={"flex-start"}
                p={5}
              >
                <Heading fontSize={"2xl"}>Search Rent in Dhaka</Heading>
                <Text>
                  Enter your location to see the latest prices and deals for
                  Dhaka hotels
                </Text>
                <HStack
                  display={"flex"}
                  flexDirection="row"
                  justifyContent={"center"}
                >
                  <SearchCard>
                    <Stack
                      direction={"column"}
                      spacing={2}
                      alignSelf={"stretch"}
                    >
                      <Flex
                        alignContent={"center"}
                        direction={"row"}
                        flex={1}
                        gap={2}
                      >
                        <FormControl>
                          <FormLabel htmlFor="location">Location</FormLabel>
                          <Select
                            id="location"
                            placeholder="Select location"
                            onChange={(e) => setLocation(e.target.value)}
                          >
                            <option>Badda</option>
                            <option>Gulshan</option>
                            <option>Banani</option>
                            <option>Rampura</option>
                            <option>Baridhara</option>
                          </Select>
                        </FormControl>
                      </Flex>
                    </Stack>
                  </SearchCard>
                  <Card>
                    <FormControl>
                      <HStack justifyContent={"space-between"}>
                        <FormLabel htmlFor="amount">Price</FormLabel>
                        <Badge colorScheme="blue" variant={"solid"}>
                          MAX
                        </Badge>
                      </HStack>
                      <Input
                        id="price"
                        onChange={(e) => setPrice(parseInt(e.target.value))}
                      />
                    </FormControl>
                  </Card>
                </HStack>
                <VStack>
                  <HStack {...group}>
                    {options.map((value) => {
                      const radio = getRadioProps({ value });
                      return (
                        <RadioCard key={value} {...radio}>
                          {value}
                        </RadioCard>
                      );
                    })}
                  </HStack>
                  <IconButton
                    w={"full"}
                    m={"3"}
                    colorScheme="blue"
                    aria-label="Search database"
                    icon={<SearchIcon />}
                    onClick={(e) => {
                      e.preventDefault();
                      handleSearch();
                    }}
                  />
                </VStack>
              </Box>
            </VStack>
          </Flex>
        </Center>
      </Container>

      <VStack justify="center" pl={170} pr={170}>
        <Post posts={posts} />
      </VStack>
    </>
  );
}
