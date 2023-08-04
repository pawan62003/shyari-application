"use client";

import { useEffect, useState } from "react";
import { fetchData } from "./components/getData";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";
import { Spinner } from "@chakra-ui/react";

export default function Home() {
  const [data, setData] = useState("");
  const [loding,setLoding] = useState(false);
  const [keyword,setKeyword] = useState("")

  const getData = () => {
    setLoding(true)
    const dataa = fetchData(keyword||'nature');
    setData(dataa);
    setLoding(false)
  }

  useEffect(() => {
    getData()
  }, []);

  const handleClick = () => {
     getData()
    setKeyword("")
  }
  // console.log(data);
  console.log(loding)

  return (
    <ChakraProvider>
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Flex
        minH={"50vh"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"}>Generate the Your Shayari</Heading>
            <Text fontSize={"lg"} color={"gray.600"}>
              enjoy our cool features
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
              <FormControl id="email">
                <FormLabel>Enter Your Keyword</FormLabel>
                <Input value={keyword} onChange={(e)=>setKeyword(e.target.value)} type="text" />
              </FormControl>
              <Stack spacing={10}>
                <Button
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                  onClick={handleClick}
                >
                 {loding?<Spinner/>:"Get Shayari"}
                </Button>
              </Stack>
              <Text>
                {data}
              </Text>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </main>
    </ChakraProvider>
  );
}
