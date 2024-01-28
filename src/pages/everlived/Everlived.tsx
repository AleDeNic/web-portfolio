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

const projectInfo = [
  {
    value: "COURSE",
    description: "Computer animation •  2021-2022",
  },
  {
    value: "ROLE",
    description: "3D modeling/animation • music",
  },
  {
    value: "WHAT DID I LEARN?",
    description:
      "To model, create materials and animate in Blender • to embed a video artifact with an original soundtrack",
  },
];
const Everlived = () => {
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
            EVERLIVED
          </Text>
          <Text ta={"left"} pb={rem(32)}>
            Everlived is a short sci-fi film. The protagonists are six alien
            animals living in various dreamlike natural environments. The
            graphics and the music are made from scratch to recreate the
            specific visual aesthetics of late 90s and early 2000s videogames,
            which was achieved by low poly 3D models and stretched textures.
          </Text>
          <Accordion defaultValue={"Course"}>{accordionItems}</Accordion>
        </Flex>
      </Grid.Col>
      <Grid.Col span={8} pl={"5vw"}>
        <ScrollArea h={"85vh"} type={"never"}>
          <Tooltip.Floating
            label={"SCROLL"}
            radius={rem(24)}
            color={"#586be3"}
            style={{ color: "#ffffff" }}
          >
            <Grid p={0} style={{ cursor: "none" }}>
              {projects
                .find((project) => project.name === "Everlived") // Find the Everlived project
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

export default Everlived;
