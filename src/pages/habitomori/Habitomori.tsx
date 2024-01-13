import { Flex, rem, ScrollArea, SimpleGrid, Text, Title } from "@mantine/core";

/**
 * The Habitomori component displays a page with a title, a text and a grid of colored divs.
 * TODO: Change the text and the divs.
 * @component
 * @example
 * return (
 *   <Habitomori />
 * )
 */
const Habitomori = () => {
  return (
    <Flex justify={"space-between"}>
      <Flex direction={"column"}>
        <Title>Habitomori</Title>
        <Text ta={"left"}>Sex education 2</Text>
      </Flex>

      <ScrollArea h={rem(400)}>
        <SimpleGrid cols={2} spacing={10}>
          <div
            style={{
              height: rem(100),
              width: rem(200),
              backgroundColor: "red",
            }}
          />
          <div
            style={{
              height: rem(100),
              width: rem(200),
              backgroundColor: "black",
            }}
          />
          <div
            style={{
              height: rem(100),
              width: rem(200),
              backgroundColor: "yellowgreen",
            }}
          />
          <div
            style={{
              height: rem(100),
              width: rem(200),
              backgroundColor: "yellow",
            }}
          />
          <div
            style={{
              height: rem(100),
              width: rem(200),
              backgroundColor: "orange",
            }}
          />
          <div
            style={{
              height: rem(100),
              width: rem(200),
              backgroundColor: "orangered",
            }}
          />{" "}
          <div
            style={{
              height: rem(100),
              width: rem(200),
              backgroundColor: "yellow",
            }}
          />
          <div
            style={{
              height: rem(100),
              width: rem(200),
              backgroundColor: "orange",
            }}
          />
          <div
            style={{
              height: rem(100),
              width: rem(200),
              backgroundColor: "orangered",
            }}
          />
        </SimpleGrid>
      </ScrollArea>
    </Flex>
  );
};

export default Habitomori;
