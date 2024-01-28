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
import _ from "lodash";

const projectInfo = [
  {
    value: "COURSE",
    description: "Videogame design and programming •  2022-2023",
  },
  {
    value: "ROLE",
    description: "Game/level design • 3D art • UX/UI • music • graphic design",
  },
  {
    value: "WHAT DID I LEARN?",
    description:
      "To cooperate effectively with programmers\n" +
      " • to use development tools like GitHub\n" +
      " • to design a videogame from start to finish",
  },
];
const project = _.find(projects, { name: "Noclip" });

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
            NOCLIP is an experimental 3D videogame that challenges the usual way
            of designing and solving puzzles, being a fist-person platformer in
            which the player has to complete the puzzles by “noclipping” through
            the map to see invisible and intangible objects. UX has beed
            designed to guarantee an enjoyable experience also to non-players,
            while UI, music and graphics have been designed to give a retro vibe
            to the game aesthetics.
            <p>
              <a href={"polimi-game-collective.itch.io/noclip"}>Play</a>
            </p>
            <p>
              <a href={"https://www.youtube.com/watch?v=eCQ0NDQ5Ges"}>
                Video trailer
              </a>
            </p>
            <p>
              <a href={"https://www.youtube.com/watch?v=FaavR88cXMY"}>
                Soundtrack
              </a>
            </p>
          </Text>
          <Accordion defaultValue={"Course"}>{accordionItems}</Accordion>
        </Flex>
      </Grid.Col>
      <Grid.Col span={8} pl={"5vw"}>
        <ScrollArea h={"85vh"} type={"never"}>
          <Tooltip.Floating
            label={"SCROLL"}
            radius={rem(24)}
            color={"#99f0fe"}
            style={{ color: "#000000" }}
          >
            <Grid p={0} style={{ cursor: "none" }}>
              {projects
                .find((project) => project.name === "Noclip")
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
