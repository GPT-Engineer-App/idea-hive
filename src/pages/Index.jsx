import React, { useState } from "react";
import { Box, VStack, Input, Button, Text, Heading, Container, UnorderedList, ListItem, useToast, IconButton } from "@chakra-ui/react";
import { FaPlus, FaTrash } from "react-icons/fa";

const Index = () => {
  const [ideas, setIdeas] = useState([]);
  const [newIdea, setNewIdea] = useState("");
  const toast = useToast();

  const handleNewIdeaChange = (event) => {
    setNewIdea(event.target.value);
  };

  const addIdea = () => {
    if (newIdea.trim() !== "") {
      setIdeas([...ideas, newIdea]);
      setNewIdea("");
      toast({
        title: "Idea added.",
        description: "Your idea has been added to the list.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } else {
      toast({
        title: "Empty idea",
        description: "Please enter an idea before submitting.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const removeIdea = (index) => {
    const newIdeas = [...ideas];
    newIdeas.splice(index, 1);
    setIdeas(newIdeas);
  };

  return (
    <Container maxW="container.md" py={10}>
      <VStack spacing={4} as="form" onSubmit={(e) => e.preventDefault()}>
        <Heading>Idea Collector</Heading>
        <Text>Share your ideas with the world!</Text>
        <Input placeholder="What's your idea?" value={newIdea} onChange={handleNewIdeaChange} />
        <VStack spacing={4}>
          <Button leftIcon={<FaPlus />} colorScheme="teal" onClick={addIdea}>
            Add Idea
          </Button>
          <Button colorScheme="purple">Generate Final Idea</Button>
        </VStack>
      </VStack>

      <Box mt={10}>
        <Heading size="md" mb={4}>
          Ideas List
        </Heading>
        {ideas.length > 0 ? (
          <UnorderedList>
            {ideas.map((idea, index) => (
              <ListItem key={index} d="flex" alignItems="center" mb={2}>
                {idea}
                <IconButton icon={<FaTrash />} colorScheme="red" variant="ghost" aria-label="Delete Idea" onClick={() => removeIdea(index)} ml={2} />
              </ListItem>
            ))}
          </UnorderedList>
        ) : (
          <Text>No ideas yet. Be the first to submit!</Text>
        )}
      </Box>
    </Container>
  );
};

export default Index;
