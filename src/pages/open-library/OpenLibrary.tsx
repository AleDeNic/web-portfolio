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
    description: "Laboratorio di sintesi finale •  2021-2022",
  },
  {
    value: "ROLE",
    description: "Brand identity • coding • 3D renders",
  },
  {
    value: "WHAT DID I LEARN?",
    description:
      "To focus more on the problem, not just on the solution  • to criticize design practices using a speculative approach • to build and programme an arduino device",
  },
];
const OpenLibrary = () => {
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
            OPEN LIBRARY
          </Text>
          <Text ta={"left"} pb={rem(32)}>
            textddd
          </Text>
          <Accordion defaultValue={"Course"}>{accordionItems}</Accordion>
        </Flex>
      </Grid.Col>
      <Grid.Col span={8} pl={"5vw"}>
        <ScrollArea h={"85vh"} type={"never"}>
          <Tooltip.Floating
            label={"SCROLL"}
            radius={rem(24)}
            color={"#4752ff"}
            style={{ color: "#ffffff" }}
          >
            <Grid p={0} style={{ cursor: "none" }}>
              {projects
                .find((project) => project.name === "OpenLibrary")
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

export default OpenLibrary;
