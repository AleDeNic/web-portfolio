import {
  Accordion,
  Flex,
  Grid,
  Image,
  rem,
  ScrollArea,
  Text,
  Tooltip,
} from "@mantine/core";

import { projects } from "../../utils/projects.ts";
import _ from "lodash";

export const OpenLibrary = () => {
  const project = _.find(projects, { name: "OpenLibrary" });

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
            {project?.title?.toUpperCase()}
          </Text>
          <Text ta={"left"} pb={rem(32)}>
            {project?.description}
          </Text>
          <Accordion defaultValue={"course"}>
            <Accordion.Item value={"course"}>
              <Accordion.Control>COURSE</Accordion.Control>
              <Accordion.Panel style={{ textAlign: "left" }}>
                {project?.info?.course}
              </Accordion.Panel>
            </Accordion.Item>
            <Accordion.Item value={"role"}>
              <Accordion.Control>ROLE</Accordion.Control>
              <Accordion.Panel style={{ textAlign: "left" }}>
                {project?.info?.role}
              </Accordion.Panel>
            </Accordion.Item>
            <Accordion.Item value={"learned"}>
              <Accordion.Control>WHAT DID I LEARN?</Accordion.Control>
              <Accordion.Panel style={{ textAlign: "left" }}>
                {project?.info?.learned}
              </Accordion.Panel>
            </Accordion.Item>
          </Accordion>
        </Flex>
      </Grid.Col>
      <Grid.Col span={8} pl={"5vw"}>
        <ScrollArea h={"85vh"} type={"never"}>
          <Tooltip.Floating
            label={"SCROLL"}
            radius={rem(24)}
            color={"#4752ff"}
            c={"#ffffff"}
          >
            <Grid p={0} style={{ cursor: "none" }}>
              {project?.images?.map((image) => (
                <Grid.Col key={image.id} w={"100%"} bg={"#ffffff"}>
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
