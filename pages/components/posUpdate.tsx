import {
  Button,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  Text,
  Textarea,
  useDisclosure,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { CheckIcon } from "@chakra-ui/icons";
import axios from "axios";

const api = axios.create({
  baseURL: `http://localhost:5001/api/post`,
});

export default function PosUpdate({ email, id }) {
  const [name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [address, setAddress] = useState("");
  const [price, setPrice] = useState("");
  const [area, setArea] = useState("");
  const [beds, setBeds] = useState("");
  const [baths, setBaths] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");
  const [status, setStatus] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [state, setState] = useState<"initial" | "submitting" | "success">(
    "initial"
  );
  const [state1, setState1] = useState<"initial" | "submitting" | "success">(
    "initial"
  );

  const [state2, setState2] = useState<"initial" | "submitting" | "success">(
    "initial"
  );

  const [state3, setState3] = useState<"initial" | "submitting" | "success">(
    "initial"
  );

  const [state4, setState4] = useState<"initial" | "submitting" | "success">(
    "initial"
  );

  const [state5, setState5] = useState<"initial" | "submitting" | "success">(
    "initial"
  );

  const [state6, setState6] = useState<"initial" | "submitting" | "success">(
    "initial"
  );

  const [state7, setState7] = useState<"initial" | "submitting" | "success">(
    "initial"
  );

  const [state8, setState8] = useState<"initial" | "submitting" | "success">(
    "initial"
  );

  const [state9, setState9] = useState<"initial" | "submitting" | "success">(
    "initial"
  );
  const [state10, setState10] = useState<"initial" | "submitting" | "success">(
    "initial"
  );

  const TitleUpdate = async (post_id: any, name: string) => {
    let res = await api
      .patch(`/${post_id}`, {
        name: name,
      })
      .catch((err) => console.log(err));
    console.log(res);
    setState("submitting");
    if (res) {
      setState("success");
    }
  };
  const NumberUpdate = async (post_id: any, phone: string) => {
    let res = await api
      .patch(`/${post_id}`, {
        phonenumber: phone,
      })
      .catch((err) => console.log(err));
    console.log(res);
    setState1("submitting");
    if (res) {
      setState1("success");
    }
  };
  const AddressUpdate = async (post_id: any, address: string) => {
    let res = await api
      .patch(`/${post_id}`, {
        address: address,
      })
      .catch((err) => console.log(err));
    console.log(res);
    setState2("submitting");
    if (res) {
      setState2("success");
    }
  };
  const LocationUpdate = async (post_id: any, location: string) => {
    let res = await api
      .patch(`/${post_id}`, {
        location: location,
      })
      .catch((err) => console.log(err));
    console.log(res);
    setState3("submitting");
    if (res) {
      setState3("success");
    }
  };
  const TypeUpdate = async (post_id: any, type: string) => {
    let res = await api
      .patch(`/${post_id}`, {
        type: type,
      })
      .catch((err) => console.log(err));
    console.log(res);
    setState4("submitting");
    if (res) {
      setState4("success");
    }
  };
  const BedUpdate = async (post_id: any, bed: string) => {
    let res = await api
      .patch(`/${post_id}`, {
        bed: bed,
      })
      .catch((err) => console.log(err));
    console.log(res);
    setState5("submitting");
    if (res) {
      setState5("success");
    }
  };
  const BathUpdate = async (post_id: any, bath: string) => {
    let res = await api
      .patch(`/${post_id}`, {
        bath: bath,
      })
      .catch((err) => console.log(err));
    console.log(res);
    setState6("submitting");
    if (res) {
      setState6("success");
    }
  };
  const StatusUpdate = async (post_id: any, status: string) => {
    let res = await api
      .patch(`/${post_id}`, {
        status: status,
      })
      .catch((err) => console.log(err));
    console.log(res);
    setState7("submitting");
    if (res) {
      setState7("success");
    }
  };
  const PriceUpdate = async (post_id: any, price: string) => {
    let res = await api
      .patch(`/${post_id}`, {
        price: price,
      })
      .catch((err) => console.log(err));
    console.log(res);
    setState8("submitting");
    if (res) {
      setState8("success");
    }
  };
  const AreaUpdate = async (post_id: any, area: string) => {
    let res = await api
      .patch(`/${post_id}`, {
        area: area,
      })
      .catch((err) => console.log(err));
    console.log(res);
    setState9("submitting");
    if (res) {
      setState9("success");
    }
  };
  const DescriptionUpdate = async (post_id: any, description: string) => {
    let res = await api
      .patch(`/${post_id}`, {
        description: description,
      })
      .catch((err) => console.log(err));
    console.log(res);
    setState10("submitting");
    if (res) {
      setState10("success");
    }
  };
  return (
    <>
      <Button
        w={"100%"}
        fontSize={"sm"}
        fontWeight={400}
        color="white"
        variant={"solid"}
        bg="gray.200"
        textColor={"black"}
        style={{
          fontWeight: "bold",
        }}
        _hover={{
          bg: "green.400",
          textColor: "white",
        }}
        onClick={onOpen}
      >
        Update
      </Button>
      <Modal
        closeOnOverlayClick={false}
        isOpen={isOpen}
        onClose={onClose}
        size={"6xl"}
      >
        <ModalOverlay backdropFilter="blur(10px)" />
        <ModalContent>
          <ModalHeader>Update Post</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Alert status="warning">
              <AlertIcon />
              Post e-mail address can not be changed.
            </Alert>
            <FormControl isRequired as="button" borderColor={"white"}>
              <FormLabel>Choose Photo</FormLabel>
              <Input
                type={"file"}
                id={"flies"}
                name={"flies"}
                accept="image/png, image/jpeg"
                multiple
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel htmlFor="name">Title</FormLabel>
              <HStack>
                <Input
                  id="name"
                  placeholder=""
                  onChange={(e) => setName(e.target.value)}
                />
                <Button
                  colorScheme={state === "success" ? "green" : "blue"}
                  isLoading={state === "submitting"}
                  type={state === "success" ? "button" : "submit"}
                  onClick={(e) => TitleUpdate(id, name)}
                >
                  {state === "success" ? <CheckIcon /> : "Submit"}
                </Button>
              </HStack>
            </FormControl>
            <HStack>
              <FormControl isRequired>
                <FormLabel htmlFor="number">Contact Number</FormLabel>
                <HStack>
                  <Input
                    id="number"
                    placeholder="017XXXXXXX"
                    onChange={(e) => setPhone(e.target.value)}
                  />
                  <Button
                    colorScheme={state1 === "success" ? "green" : "blue"}
                    isLoading={state1 === "submitting"}
                    type={state1 === "success" ? "button" : "submit"}
                    onClick={(e) => NumberUpdate(id, phone)}
                  >
                    {state1 === "success" ? <CheckIcon /> : "Submit"}
                  </Button>
                </HStack>
              </FormControl>
              <FormControl isDisabled>
                <FormLabel htmlFor="email">Email</FormLabel>
                <Input
                  id="email"
                  placeholder="m*****@gmail.com"
                  value={email}
                />
              </FormControl>
            </HStack>
            <FormControl isRequired>
              <FormLabel htmlFor="address">Address</FormLabel>
              <HStack>
                <Input
                  id="address"
                  placeholder="14/C Street"
                  onChange={(e) => setAddress(e.target.value)}
                />
                <Button
                  colorScheme={state2 === "success" ? "green" : "blue"}
                  isLoading={state2 === "submitting"}
                  type={state2 === "success" ? "button" : "submit"}
                  onClick={(e) => AddressUpdate(id, address)}
                >
                  {state2 === "success" ? <CheckIcon /> : "Submit"}
                </Button>
              </HStack>
            </FormControl>
            <HStack>
              <FormControl isRequired>
                <FormLabel htmlFor="location">Location</FormLabel>
                <HStack>
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
                  <Button
                    colorScheme={state3 === "success" ? "green" : "blue"}
                    isLoading={state3 === "submitting"}
                    type={state3 === "success" ? "button" : "submit"}
                    onClick={(e) => LocationUpdate(id, location)}
                  >
                    {state3 === "success" ? <CheckIcon /> : "Submit"}
                  </Button>
                </HStack>
              </FormControl>
              <FormControl isRequired>
                <FormLabel htmlFor="type">Type</FormLabel>
                <HStack>
                  <Select
                    id="type"
                    placeholder="Select type"
                    onChange={(e) => setType(e.target.value)}
                  >
                    <option>Hostel</option>
                    <option>Apartment</option>
                    <option>Roommate</option>
                    <option>Sublet</option>
                  </Select>
                  <Button
                    colorScheme={state4 === "success" ? "green" : "blue"}
                    isLoading={state4 === "submitting"}
                    type={state4 === "success" ? "button" : "submit"}
                    onClick={(e) => TypeUpdate(id, type)}
                  >
                    {state4 === "success" ? <CheckIcon /> : "Submit"}
                  </Button>
                </HStack>
              </FormControl>
            </HStack>
            <HStack>
              <FormControl isRequired>
                <FormLabel htmlFor="beds">Beds</FormLabel>
                <HStack>
                  <Input
                    id="beds"
                    placeholder="3"
                    onChange={(e) => setBeds(e.target.value)}
                  />
                  <Button
                    colorScheme={state5 === "success" ? "green" : "blue"}
                    isLoading={state5 === "submitting"}
                    type={state5 === "success" ? "button" : "submit"}
                    onClick={(e) => BedUpdate(id, beds)}
                  >
                    {state5 === "success" ? <CheckIcon /> : "Submit"}
                  </Button>
                </HStack>
              </FormControl>
              <FormControl isRequired>
                <FormLabel htmlFor="baths">Baths</FormLabel>
                <HStack>
                  <Input
                    id="baths"
                    placeholder="2"
                    onChange={(e) => setBaths(e.target.value)}
                  />
                  <Button
                    colorScheme={state6 === "success" ? "green" : "blue"}
                    isLoading={state6 === "submitting"}
                    type={state6 === "success" ? "button" : "submit"}
                    onClick={(e) => BathUpdate(id, baths)}
                  >
                    {state6 === "success" ? <CheckIcon /> : "Submit"}
                  </Button>
                </HStack>
              </FormControl>
              <FormControl isRequired>
                <FormLabel htmlFor="completion">Completion</FormLabel>
                <HStack>
                  <Select
                    id="completion"
                    placeholder="Select status"
                    onChange={(e) => setStatus(e.target.value)}
                  >
                    <option>Ready</option>
                    <option>Not Ready</option>
                  </Select>
                  <Button
                    colorScheme={state7 === "success" ? "green" : "blue"}
                    isLoading={state7 === "submitting"}
                    type={state7 === "success" ? "button" : "submit"}
                    onClick={(e) => StatusUpdate(id, status)}
                  >
                    {state7 === "success" ? <CheckIcon /> : "Submit"}
                  </Button>
                </HStack>
              </FormControl>
            </HStack>
            <HStack>
              <FormControl isRequired>
                <FormLabel htmlFor="area">Area(Sqft)</FormLabel>
                <HStack>
                  <Input
                    id="area"
                    placeholder="1234"
                    onChange={(e) => setArea(e.target.value)}
                  />
                  <Button
                    colorScheme={state9 === "success" ? "green" : "blue"}
                    isLoading={state9 === "submitting"}
                    type={state9 === "success" ? "button" : "submit"}
                    onClick={(e) => AreaUpdate(id, area)}
                  >
                    {state9 === "success" ? <CheckIcon /> : "Submit"}
                  </Button>
                </HStack>
              </FormControl>
              <FormControl isRequired>
                <FormLabel htmlFor="price">Price</FormLabel>
                <HStack>
                  <Input
                    id="price"
                    placeholder="1000"
                    onChange={(e) => setPrice(e.target.value)}
                  />
                  <Button
                    colorScheme={state8 === "success" ? "green" : "blue"}
                    isLoading={state8 === "submitting"}
                    type={state8 === "success" ? "button" : "submit"}
                    onClick={(e) => PriceUpdate(id, price)}
                  >
                    {state8 === "success" ? <CheckIcon /> : "Submit"}
                  </Button>
                </HStack>
              </FormControl>
            </HStack>
            <Text mb="8px">Descrption</Text>
            <HStack>
              <Textarea
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Here is a sample placeholder"
                size="sm"
              />
              <Button
                h={"81px"}
                colorScheme={state10 === "success" ? "green" : "blue"}
                isLoading={state10 === "submitting"}
                type={state10 === "success" ? "button" : "submit"}
                onClick={(e) => DescriptionUpdate(id, description)}
              >
                {state10 === "success" ? <CheckIcon /> : "Submit"}
              </Button>
            </HStack>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="green" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost" onClick={(e) => {
              window.location.reload();
            }}>
              Update
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
