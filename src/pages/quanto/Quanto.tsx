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

/*const projectInfo = [
  {
    value: "COURSE",
    description: "Laboratorio di progetto della comunicazione visiva •  2021",
  },
  {
    value: "ROLE",
    description: "2D animation • brand identity • music",
  },
  {
    value: "WHAT DID I LEARN?",
    description: "to design a brand identity  • to create a motion design reel",
  },
];*/
const Quanto = () => {
  /*  const accordionItems = projectInfo.map((item) => (
    <Accordion.Item key={item.value} value={item.value}>
      <Accordion.Control>{item.value}</Accordion.Control>
      <Accordion.Panel style={{ textAlign: "left" }}>
        {item.description}
      </Accordion.Panel>
    </Accordion.Item>
  ));*/

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
            QUANTO
          </Text>
          <Text ta={"left"} pb={rem(32)}>
            QUANTO is a futuristic fictional brand that gives to its customers
            the power to achieve the impossible: to capture and exploit the
            energy of lightnings. The brand identity embraces both the visual
            artifacts and the physical installation of the product, which is
            entirely controlled by a smartphone app.
          </Text>
          <Accordion defaultValue={"Course"}>{accordionItems}</Accordion>
        </Flex>
      </Grid.Col>
      <Grid.Col span={8} pl={"5vw"}>
        <ScrollArea h={"85vh"} type={"never"}>
          <Tooltip.Floating
            label={"SCROLL"}
            radius={rem(24)}
            color={"#0171fa"}
            style={{ color: "#ffffff" }}
          >
            <Grid p={0} style={{ cursor: "none" }}>
              {projects
                .find((project) => project.name === "Quanto")
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

export default Quanto;
