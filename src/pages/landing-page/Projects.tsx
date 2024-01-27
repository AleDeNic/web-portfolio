import {
  Image,
  rem,
  Tooltip,
  Grid,
  ScrollArea,
  Container,
  Button,
  Group,
  Collapse,
  Text,
  Box,
} from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { projects } from "../../utils/projects.ts";
import { useRef } from "react";
import { useDisclosure } from "@mantine/hooks";

const Projects = () => {
  const navigate = useNavigate();

  const viewport = useRef<HTMLDivElement>(null);
  const scrollToTop = () =>
    viewport.current!.scrollTo({ top: 0, behavior: "smooth" });

  const [opened, { toggle }] = useDisclosure(false);

  return (
    <Box>
      <Container fluid>
        <Group justify="left" mb={"2vh"} w={"100%"}>
          <Button
            onClick={toggle}
            variant={"transparent"}
            color={"#000000"}
            size={"xl"}
          >
            Alessio De Nicolò
          </Button>
        </Group>
        <Collapse in={opened}>
          <Text style={{ textAlign: "left" }} w={"30%"} pb={"5vh"}>
            Hi! I’m a communication design student at PoliMI. Some years ago I
            approached design by realizing that all my passions were powered by
            the same source: curiosity. Then, studying design took me to
            fantastic worlds like UX/UI, videogame design, computer animation
            and speculative design. Most of the time I am either reading a book
            or refining my works, always trying to improve who I am and what I
            do. Right now I’m on my way to become a UX/UI designer, still
            keeping my passions in videogame design and electronic music
            production.
          </Text>
        </Collapse>
      </Container>
      <ScrollArea h={"84vh"} type={"never"} viewportRef={viewport}>
        <Grid gutter={rem(0)}>
          {projects.map((project) => (
            <Grid.Col
              span={12}
              h={"35vh"}
              key={project.image}
              style={{
                backgroundColor: "#ffffff",
              }}
            >
              <Tooltip.Floating
                label={project.nameCaps}
                radius={rem(24)}
                color={project.color}
                style={{ color: project.textColor }}
              >
                <Image
                  src={project.image}
                  alt={"I'm an image"}
                  onClick={() => navigate(project.path)}
                  radius={rem(0)}
                  style={{ cursor: "none", height: "100%" }}
                />
              </Tooltip.Floating>
            </Grid.Col>
          ))}
        </Grid>
        <Container p={rem(20)}>
          <Button
            onClick={scrollToTop}
            style={{ color: "#000000", backgroundColor: "#ffffff" }}
            size={"xl"}
          >
            ↑
          </Button>
        </Container>
      </ScrollArea>
    </Box>
  );
};

export default Projects;
