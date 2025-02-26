import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { useSpring, animated } from "@react-spring/web";
import {
  Box,
  Heading,
  Text,
  Image,
  SimpleGrid,
  Card,
  CardBody,
  Stack,
  Button,
} from "@chakra-ui/react";

const FindTutor = () => {
  const fadeIn = useSpring({ from: { opacity: 0 }, to: { opacity: 1 } });

  const tutors = [
    {
      name: "Kgomotso Nkosi",
      subjects: "Sciences and Math",
      description: "Experienced in Physics, Chemistry, and Advanced Math.",
      img: "img/logosk.jpg",
    },
    {
      name: "Jane Doe",
      subjects: "English and Literature",
      description: "Expert in grammar, writing, and classical literature.",
      img: "img/tutor2.jpg",
    },
    {
      name: "John Smith",
      subjects: "Computer Science",
      description: "Specialist in programming and algorithms.",
      img: "img/tutor3.jpg",
    },
  ];

  const [selectedTutor, setSelectedTutor] = useState(null);

  return (
    <Box p={8}>
      <Heading textAlign="center" mb={4}>
        Find Our Best Tutors
      </Heading>
      <Text textAlign="center" mb={8}>
        Select a tutor to view details about their expertise.
      </Text>

      <SimpleGrid columns={[1, 2, 3]} spacing={6}>
        {tutors.map((tutor, index) => (
          <Card key={index} onClick={() => setSelectedTutor(tutor)} cursor="pointer">
            <Image src={tutor.img} alt={tutor.name} borderRadius="md" />
            <CardBody>
              <Stack>
                <Heading size="md">{tutor.name}</Heading>
                <Text fontWeight="bold">Subjects: {tutor.subjects}</Text>
              </Stack>
            </CardBody>
          </Card>
        ))}
      </SimpleGrid>

      {selectedTutor && (
        <Box mt={10} p={6} borderWidth="1px" borderRadius="lg" boxShadow="md">
          <Heading size="lg" mb={2}>{selectedTutor.name}</Heading>
          <Text fontWeight="bold" mb={2}>Subjects: {selectedTutor.subjects}</Text>
          <Text>{selectedTutor.description}</Text>
          <Button mt={4} colorScheme="blue" onClick={() => setSelectedTutor(null)}>
            Close
          </Button>
        </Box>
      )}

      <Outlet />
    </Box>
  );
};

export default FindTutor;
