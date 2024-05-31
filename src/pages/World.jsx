import { Box, Text, Link } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const World = () => (
  <Box p={4} bg="#f3f2ef">
    <Text fontSize="2xl" mb={4}>World News</Text>
    <Text>Latest updates from around the world.</Text>
    <Link as={NavLink} to="/" mt={4} display="block" color="blue.500">Back to Home</Link>
  </Box>
);

export default World;