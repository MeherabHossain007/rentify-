import React from 'react'
import {
    Box,
    chakra,
    Container,
    Link,
    Stack,
    Image,
    Text,
    useColorModeValue,
    VisuallyHidden,
  } from '@chakra-ui/react';
  import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
  import { ReactNode } from 'react';
  
  const Logo = (props: any) => {
    return (
      <Image
      alt={'Logo'}
      boxSize={100}
      objectFit={'contain'}
      height={32}
      className="img-responsive"
      src={'https://firebasestorage.googleapis.com/v0/b/rentify-4f59b.appspot.com/o/rentify%20reloaded%2FAsset%202.png?alt=media&token=05e10e38-c299-4b1b-b7b4-a4b591dbad26'}
      />
    );
  };
  export default function Footer() {
    return (
      <Box
        bg={useColorModeValue('gray.50', 'gray.900')}
        color={useColorModeValue('gray.700', 'gray.200')}>
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          spacing={4}
          justify={'center'}
          align={'center'}>
          <Logo />
          <Stack direction={'row'} spacing={6}>
            <Link href={'#'}>Home</Link>
            <Link href={'#'}>About</Link>
            <Link href={'#'}>Blog</Link>
            <Link href={'#'}>Contact</Link>
          </Stack>
        </Container>
  
        <Box
          borderTopWidth={1}
          borderStyle={'solid'}
          py={4}
          borderColor={useColorModeValue('gray.200', 'gray.700')}>
          <Text textAlign={'center'}>© 2021 Rentify Limited. All rights reserved</Text>
          
        </Box>
      </Box>
    );
  }