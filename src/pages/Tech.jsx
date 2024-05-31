import { Box, Text, Link } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Tech = () => (
  <Box p={4}>
    <Text fontSize="2xl" mb={4}>Tech News</Text>
    <Text>Latest updates from the tech industry.</Text>
    <Link as={NavLink} to="/" mt={4} display="block" color="blue.500">Back to Home</Link>
  </Box>
);

export default Tech;