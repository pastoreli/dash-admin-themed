import { Button, Flex, Text, Container, Badge } from "@radix-ui/themes";

export default function App() {
  return (
    <Container align="left" size="1">
      <Flex direction="column" gap="2">
        <Text>Hello from Radix Themes :)</Text>
        <Badge color="grass" >New</Badge>
        <Button color="sky" variant="solid"> Click here!</Button>
      </Flex>
    </Container>
  );
}
