import { Box, Container, Flex, Heading, Image, Link, Text, VStack } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Index = () => {
  document.body.style.backgroundColor = "#f3f2ef";
  return (
    <Container maxW="container.xl" p={4} bg="#f3f2ef">
      <Flex direction={{ base: "column", md: "row" }} justify="space-between">
        <Box flex="3" mr={{ md: 4 }}>
          <Heading as="h2" size="lg" mb={4}>Latest News</Heading>
          <VStack spacing={4} align="stretch">
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src="https://via.placeholder.com/800x400" alt="News Image" />
              <Box p={4}>
                <Heading as="h3" size="md">News Headline 1</Heading>
                <Text mt={2}>Brief description of the news article...</Text>
              </Box>
            </Box>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src="https://via.placeholder.com/800x400" alt="News Image" />
              <Box p={4}>
                <Heading as="h3" size="md">News Headline 2</Heading>
                <Text mt={2}>Brief description of the news article...</Text>
              </Box>
            </Box>
          </VStack>
        </Box>
        <Box flex="1" mt={{ base: 4, md: 0 }}>
          <Heading as="h2" size="lg" mb={4}>Trending Topics</Heading>
          <VStack spacing={4} align="stretch">
            <Box borderWidth="1px" borderRadius="lg" p={4}>
              <Heading as="h3" size="md">Trending Topic 1</Heading>
              <Text mt={2}>Brief description of the trending topic...</Text>
            </Box>
            <Box borderWidth="1px" borderRadius="lg" p={4}>
              <Heading as="h3" size="md">Trending Topic 2</Heading>
              <Text mt={2}>Brief description of the trending topic...</Text>
            </Box>
          </VStack>
        </Box>
      </Flex>
    </Container>
  );
};

export default Index;