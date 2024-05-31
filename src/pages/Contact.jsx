import { Box, Text, Link } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Contact = () => (
  <Box p={4}>
    <Text fontSize="2xl" mb={4}>Contact Us</Text>
    <Text>How to get in touch with the Financial Times.</Text>
    <Link as={NavLink} to="/" mt={4} display="block" color="blue.500">Back to Home</Link>
  </Box>
);

export default Contact;