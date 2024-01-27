import {
  Flex,
  rem,
  ScrollArea,
  SimpleGrid,
  Grid,
  Text,
  Title,
  Tooltip,
  Chip,
  Accordion,
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

const projectInfo = [
  {
    value: "Course",
    description:
      "Crisp and refreshing fruit. Apples are known for their versatility and nutritional benefits. They come in a variety of flavors and are great for snacking, baking, or adding to salads.",
  },
  {
    value: "Which was my role?",
    description:
      "Naturally sweet and potassium-rich fruit. Bananas are a popular choice for their energy-boosting properties and can be enjoyed as a quick snack, added to smoothies, or used in baking.",
  },
  {
    value: "What have I learned?",
    description:
      "Nutrient-packed green vegetable. Broccoli is packed with vitamins, minerals, and fiber. It has a distinct flavor and can be enjoyed steamed, roasted, or added to stir-fries.",
  },
];
const Habitomori = () => {
  const accordionItems = projectInfo.map((item) => (
    <Accordion.Item key={item.value} value={item.value}>
      <Accordion.Control icon={item.emoji}>{item.value}</Accordion.Control>
      <Accordion.Panel style={{ textAlign: "left" }}>
        {item.description}
      </Accordion.Panel>
    </Accordion.Item>
  ));
  return (
    <Grid p={0} gutter={0}>
      <Grid.Col span={4} pr={rem(100)}>
        <Flex direction={"column"} pl={rem(20)}>
          <Title ta={"left"} pb={rem(50)}>
            Habitomori
          </Title>

          <Text ta={"left"} pb={rem(50)}>
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
          <Accordion defaultValue={"Course"}>{accordionItems}</Accordion>
          {/*<table>
            <tr align={"left"}>
              <td style={{ verticalAlign: "top" }}>Course</td>
              <Chip size={"md"}>interaction design studio C3</Chip>
              <Chip size={"md"}>group project</Chip>
              <Chip size={"md"}>2022-23</Chip>
            </tr>
            <tr align={"left"}>
              <td style={{ verticalAlign: "top" }}>My role</td>
              <td>→ research → UX/UI design → prototyping</td>
            </tr>
            <tr align={"left"}>
              <td style={{ verticalAlign: "top" }}>What I learned</td>
              <td>
                <p>→ to do research on specific users and their needs</p>
                <p>
                  → to develop solutions while considering techical limitations
                </p>
                <p>→ to design wireframes and design figma mockups</p>
              </td>
            </tr>
            <tr align={"left"}>
              <td style={{ verticalAlign: "top" }}>Links</td>
              <td>→ https://shorturl.at/jru47</td>
            </tr>
          </table>*/}
        </Flex>
      </Grid.Col>
      <Grid.Col span={8}>
        <ScrollArea h={"90vh"}>
          <Tooltip.Floating
            label={"Scroll down"}
            radius={rem(24)}
            color={"#111111"}
          >
            <SimpleGrid
              cols={1}
              spacing={0}
              bg={"blue"}
              style={{ cursor: "none" }}
            >
              <div
                style={{
                  height: "90vh",
                  width: "100%",
                  backgroundColor: "red",
                }}
              />
              <div
                style={{
                  height: "90vh",
                  width: "100%",
                  backgroundColor: "blue",
                }}
              />
              <div
                style={{
                  height: "90vh",
                  width: "100%",
                  backgroundColor: "green",
                }}
              />
            </SimpleGrid>
          </Tooltip.Floating>
        </ScrollArea>
      </Grid.Col>
    </Grid>
  );
};

export default Habitomori;
