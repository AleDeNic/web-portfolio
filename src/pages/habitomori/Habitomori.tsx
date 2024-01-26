import {
  Flex,
  rem,
  ScrollArea,
  SimpleGrid,
  Grid,
  Text,
  Title,
} from "@mantine/core";

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
    <Grid>
      <Grid.Col span={4}>
        <Flex direction={"column"} pl={rem(20)}>
          <Title align={"left"} pb={rem(50)}>
            Habitomori
          </Title>
          <Text ta={"left"}>
            HABITOMORI is the only application made for hikikomoris. It helps
            them to design and nurture positive habits, giving value to their
            time during isolation. Hikikomori is a underrated problem,
            especially in Italy. For this reason, after a detailed user
            research, we developed a method of habit design, based on
            cognitive-behavioral therapy and behavioral design. The goal was to
            help hikikomoris to feel successful during their isolation without
            relying too much on their motivation or on the smartphone, but more
            on their daily routine. The final artifact is a working prototype of
            a smartphone app that uses growing bonsais as progress metaphors.
          </Text>
        </Flex>
      </Grid.Col>
      <Grid.Col span={8}>
        <ScrollArea h={"90vh"}>
          <SimpleGrid cols={1} spacing={0} bg={"blue"}>
            <div
              style={{
                height: "90vh",
                width: "70vw",
                backgroundColor: "red",
              }}
            />
            <div
              style={{
                height: "90vh",
                width: "70vw",
                backgroundColor: "black",
              }}
            />
            <div
              style={{
                height: "90vh",
                width: "70vw",
                backgroundColor: "yellowgreen",
              }}
            />
          </SimpleGrid>
        </ScrollArea>
      </Grid.Col>
    </Grid>
  );
};

export default Habitomori;
