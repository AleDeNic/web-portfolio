import {
  Flex,
  rem,
  ScrollArea,
  Grid,
  Text,
  Tooltip,
  Image,
  Accordion,
} from "@mantine/core";

import { projects } from "../../utils/projects.ts";

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
    value: "COURSE",
    description: "Interaction Design Studio •  2023",
  },
  {
    value: "ROLE",
    description: "User research • UX/UI design • prototyping",
  },
  {
    value: "WHAT DID I LEARN?",
    description:
      "to do research on specific users and their needs  • to develop solutions while considering techical limitations • to design wireframes and Figma interactive mockups",
  },
];
const Noclip = () => {
  const accordionItems = projectInfo.map((item) => (
    <Accordion.Item key={item.value} value={item.value}>
      <Accordion.Control>{item.value}</Accordion.Control>
      <Accordion.Panel style={{ textAlign: "left" }}>
        {item.description}
      </Accordion.Panel>
    </Accordion.Item>
  ));

  return (
    <Grid px={"10vw"} gutter={0}>
      <Grid.Col span={4}>
        <Flex direction={"column"} pb={rem(50)}>
          <Text
            ta={"left"}
            pt={rem(80)}
            pb={rem(48)}
            style={{
              fontSize: rem(24),
            }}
          >
            NOCLIP
          </Text>
          <Text ta={"left"} pb={rem(32)}>
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
        </Flex>
      </Grid.Col>
      <Grid.Col span={8} pl={"5vw"}>
        <ScrollArea h={"85vh"} type={"never"}>
          <Tooltip.Floating label={"SCROLL"} radius={rem(24)} color={"#9880ff"}>
            <Grid p={0} style={{ cursor: "none" }}>
              {projects
                .find((project) => project.name === "Noclip") // Find the Everlived project
                ?.images?.map((image) => (
                  <Grid.Col
                    key={image.id}
                    p={0}
                    style={{ width: "100%", backgroundColor: "#ffffff" }}
                  >
                    <Image w="100%" src={image.src} alt={image.alt} />
                  </Grid.Col>
                ))}
            </Grid>
          </Tooltip.Floating>
        </ScrollArea>
      </Grid.Col>
    </Grid>
  );
};

export default Noclip;
