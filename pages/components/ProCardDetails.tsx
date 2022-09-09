import {
  Box,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  List,
  ListItem,
  Badge,
  HStack,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Tag,
  TagLabel,
  TagRightIcon,
} from "@chakra-ui/react";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { FaBath, FaBed, FaBorderAll } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { MdLocalShipping } from "react-icons/md";
import Navbar from "./navBar";
import ProfileNav from "./profileNav";

const api = axios.create({
  baseURL: `http://localhost:5001/api/post`,
});

const api2 = axios.create({
  baseURL: `http://localhost:5003/api/bookinfo`,
});

export default function ProRentDetails() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isBOpen,
    onOpen: onBOpen,
    onClose: onBClose,
  } = useDisclosure();
  const router = useRouter();
  const id = router.query;
  const querystring = require("querystring");
  const post_id = querystring.stringify(id).replace(/=$|=(?=&)/g, "");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [address, setAddress] = useState("");
  const [price, setPrice] = useState("");
  const [area, setArea] = useState("");
  const [beds, setBeds] = useState("");
  const [baths, setBaths] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");
  const [bookName, setBookName] = useState("");
  const [bookNumber, setBookNumber] = useState("");
  const [bookId, setId] = useState("");
  const [status, setStatus] = useState("");
  const [time, setTime] = useState("");
  const [image, setImage] = useState("");
  const [posts, setPosts] = useState([]);
  const [bookinfo, setBookinfo] = useState([]);

  useEffect(() => {
    getPosts();
    getBook();
  });

  const getBook = async () => {
    let data = await api2.get("/").then(({ data }) => data);
    setBookinfo(data);
    bookinfo.map((bookinfo) =>
      bookinfo.booknumber === post_id
        ? (setBookName(bookinfo.name),
          setBookNumber(bookinfo.phonenumber),
          setId(bookinfo.booknumber))
        : ""
    );
  };
  const handleBook = async (post_id: any, name: string, number: string) => {
    let res = await api2
      .post("/", {
        booknumber: post_id,
        name: name,
        phonenumber: number,
      })
      .catch((err) => console.log(err));
    console.log(res);
  };
  const getPosts = async () => {
    let data = await api.get("/").then(({ data }) => data);
    setPosts(data);
    posts.map((posts) =>
      posts.id === post_id
        ? (setName(posts.name),
          setEmail(posts.email),
          setPhone(posts.number),
          setAddress(posts.address),
          setPrice(posts.price),
          setLocation(posts.location),
          setArea(posts.area),
          setBeds(posts.bed),
          setBaths(posts.bath),
          setStatus(posts.status),
          setPhone(posts.phonenumber),
          setTime(posts.createdOn),
          setDescription(posts.description),
          setType(posts.type))
        : ""
    );
  };
  return (
    <>
      <ProfileNav id={undefined} />
      <Container maxW={"7xl"}>
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 18, md: 24 }}
        >
          <Flex>
            <Image
              rounded={"md"}
              alt={"product image"}
              src={
                "https://firebasestorage.googleapis.com/v0/b/rentify-4f59b.appspot.com/o/colonial-style-house-night-scene.jpg?alt=media&token=6bfee092-54bc-4c68-904b-5d7af87a78c0"
              }
              fit={"cover"}
              align={"center"}
              w={"100%"}
              h={{ base: "100%", sm: "400px", lg: "500px" }}
            />
          </Flex>
          <Stack spacing={{ base: 6, md: 10 }}>
            <Box as={"header"}>
              <Stack direction="row" alignItems="baseline">
                <Text
                  fontSize="20"
                  fontWeight="bold"
                  textAlign={"match-parent"}
                >
                  BDT
                </Text>
                <Text fontSize="45" fontWeight="bold">
                  {price}
                </Text>
              </Stack>
              <Tag size={"lg"} variant="outline" colorScheme="blue">
                <TagLabel>{location}</TagLabel>
                <TagRightIcon boxSize="12px" as={IoLocationSharp} />
              </Tag>
              <Text fontSize="18" fontWeight="medium">
                {address}
              </Text>
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
                {name}
              </Heading>
              <HStack spacing={7} pt={3} alignItems={"baseline"}>
                <HStack>
                  <FaBed size={20} />
                  <Text>{beds}</Text>
                </HStack>
                <HStack>
                  <FaBath size={20} />
                  <Text>{baths}</Text>
                </HStack>
                <HStack>
                  <FaBorderAll size={20} />
                  <Text>{area}</Text>
                </HStack>
              </HStack>
            </Box>
            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={"column"}
              divider={
                <StackDivider
                  borderColor={useColorModeValue("gray.200", "gray.600")}
                />
              }
            >
              <VStack
                spacing={{ base: 4, sm: 6 }}
                justifyContent={"flex-start"}
              >
                <Text
                  color={useColorModeValue("gray.500", "gray.400")}
                  fontSize={"2xl"}
                  fontWeight={"300"}
                >
                  Description
                </Text>
                <Text fontSize={"lg"}>{description}</Text>
              </VStack>
              <Box>
                <Text
                  fontSize={{ base: "16px", lg: "18px" }}
                  color={useColorModeValue("blue.500", "blue.300")}
                  fontWeight={"500"}
                  textTransform={"uppercase"}
                  mb={"4"}
                >
                  Property Information
                </Text>

                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                  <List spacing={2}>
                    <ListItem>Type</ListItem>
                    <ListItem>Completion</ListItem>{" "}
                    <ListItem>Furnishing</ListItem>
                    <ListItem>Last Updated</ListItem>
                  </List>
                  <List spacing={2}>
                    <ListItem fontWeight="bold">{type}</ListItem>
                    <ListItem fontWeight="bold">{status}</ListItem>
                    <ListItem fontWeight="bold">Furnished</ListItem>
                    <ListItem fontWeight="bold">{time}</ListItem>
                  </List>
                </SimpleGrid>
              </Box>
              <HStack
                flex={1}
                mx={1}
                as={"button"}
                onClick={() => {
                  onBOpen();
                  getBook();
                }}
              >
                <Box
                  h={"160%"}
                  w={"100%"}
                  boxShadow={"lg"}
                  rounded={"lg"}
                  pt={7}
                  flex={1}
                  _hover={{
                    boxShadow: "2xl",
                  }}
                  flexDirection="column"
                  alignContent={"center"}
                >
                  <Text textAlign="center" fontWeight="bold">
                    Booking Details
                  </Text>
                </Box>
                <Modal isOpen={isBOpen} onClose={onBClose}>
                  <ModalOverlay />
                  <ModalContent>
                    <ModalHeader>Booking Information</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                      {bookName === "" && bookNumber === "" ? (
                        <Text>Not booked yet!</Text>
                      ) : (
                        <>
                          <FormControl>
                            <FormLabel>Name</FormLabel>
                            <Text>{bookName}</Text>
                          </FormControl>
                          <FormControl mt={4}>
                            <FormLabel>Phone Number</FormLabel>
                            <Text>{bookNumber}</Text>
                          </FormControl>
                        </>
                      )}
                    </ModalBody>
                  </ModalContent>
                </Modal>
              </HStack>
            </Stack>

            <Flex justifyContent={"flex-end"} flexDirection={"column"} flex={1}>
              <VStack py={4} justifyContent={"start"}>
                <Popover>
                  <PopoverTrigger>
                    <Button
                      w={"100%"}
                      fontSize={"sm"}
                      fontWeight={400}
                      color="white"
                      variant={"solid"}
                      bg="blue.400"
                      _hover={{
                        bg: "blue.300",
                      }}
                    >
                      Phone Number
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent>
                    <PopoverArrow />
                    <PopoverCloseButton />
                    <PopoverHeader>Phone Number</PopoverHeader>
                    <PopoverBody>{phone}</PopoverBody>
                  </PopoverContent>
                </Popover>
                <Popover>
                  <PopoverTrigger>
                    <Button
                      w={"100%"}
                      fontSize={"sm"}
                      fontWeight={400}
                      color="white"
                      variant={"solid"}
                      bg="blue.400"
                      _hover={{
                        bg: "blue.300",
                      }}
                    >
                      Email
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent>
                    <PopoverArrow />
                    <PopoverCloseButton />
                    <PopoverHeader>Email Address</PopoverHeader>
                    <PopoverBody>{email}</PopoverBody>
                  </PopoverContent>
                </Popover>
                {bookId === post_id ? (
                  ""
                ) : (
                  <Button
                    w={"100%"}
                    fontSize={"sm"}
                    fontWeight={400}
                    color="white"
                    variant={"solid"}
                    bg="blue.400"
                    _hover={{
                      bg: "blue.300",
                    }}
                    onClick={onOpen}
                  >
                    Book Now
                  </Button>
                )}
                <Modal isOpen={isOpen} onClose={onClose}>
                  <ModalOverlay />
                  <ModalContent>
                    <ModalHeader>Book The Rent</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                      <FormControl>
                        <FormLabel>Name</FormLabel>
                        <Input
                          placeholder="Full Name"
                          onChange={(e) => setBookName(e.target.value)}
                        />
                      </FormControl>
                      <FormControl mt={4}>
                        <FormLabel>Phone Number</FormLabel>
                        <Input
                          placeholder="017XXXXXX"
                          onChange={(e) => setBookNumber(e.target.value)}
                        />
                      </FormControl>
                    </ModalBody>
                    <ModalFooter>
                      <Button
                        colorScheme="blue"
                        mr={3}
                        onClick={() => {
                          onClose();
                          handleBook(post_id, bookName, bookNumber);
                        }}
                      >
                        Save
                      </Button>
                      <Button onClick={onClose}>Cancel</Button>
                    </ModalFooter>
                  </ModalContent>
                </Modal>
              </VStack>
            </Flex>
          </Stack>
        </SimpleGrid>
      </Container>
    </>
  );
}
