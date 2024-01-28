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
    description: "Interaction Design Studio •  2023",
  },
  {
    value: "ROLE",
    description: "Graphic design",
  },
  {
    value: "WHAT DID I LEARN?",
    description: "To translate a play into posters",
  },
];*/
const SussurriSepolti = () => {
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
            SUSSURRI SEPOLTI
          </Text>
          <Text ta={"left"} pb={rem(32)}>
            Sussurri Sepolti is a theatrical play made by Polimi's Teatro delle
            biglie. While taking part in the play, I was asked to design the
            posters for the show. The play had three dates in three different
            places, so I created three variations of the same poster.
          </Text>
          <Accordion defaultValue={"Course"}>{accordionItems}</Accordion>
        </Flex>
      </Grid.Col>
      <Grid.Col span={8} pl={"5vw"}>
        <ScrollArea h={"85vh"} type={"never"}>
          <Tooltip.Floating
            label={"SCROLL"}
            radius={rem(24)}
            color={"#5d705f"}
            style={{ color: "#ffffff" }}
          >
            <Grid p={0} style={{ cursor: "none" }}>
              {projects
                .find((project) => project.name === "SussurriSepolti")
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

export default SussurriSepolti;
