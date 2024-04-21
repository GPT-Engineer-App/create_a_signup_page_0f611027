import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { 
  Box,
  Button,  
  FormControl,
  FormLabel,
  Input,
  VStack,
  Text
} from "@chakra-ui/react";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: Handle signup submission
    console.log("Signup submitted with email:", email);
    navigate("/welcome");
  };

  return (
    <Box p={8}>
      <form onSubmit={handleSubmit}>
        <VStack spacing={4} align="flex-start">
          <FormControl>
            <FormLabel htmlFor="email">Email Address</FormLabel>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="password">Password</FormLabel>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />  
          </FormControl>
          <Button type="submit" colorScheme="purple" width="full">
            Sign Up
          </Button>
        </VStack>
      </form>
      <Text mt={8}>
        Already have an account? <a href="/login">Log in</a>
      </Text>
    </Box>
  );
};

export default Signup;