import {
  Image,
  rem,
  Tooltip,
  Grid,
  ScrollArea,
  Container,
  Group,
  Collapse,
  Text,
  Box,
} from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { projects } from "../../utils/projects.ts";
import { useRef, useState } from "react";
import { useDisclosure } from "@mantine/hooks";

const Projects = () => {
  const navigate = useNavigate();

  const viewport = useRef<HTMLDivElement>(null);
  const scrollToTop = () =>
    viewport.current!.scrollTo({ top: 0, behavior: "smooth" });

  const [opened, { open, close }] = useDisclosure(false);
  const [timeoutId, setTimeoutId] = useState<number | null>(null);

  const handleMouseEnter = () => {
    // Set a delay before opening the collapse
    const id = setTimeout(() => {
      open();
    }, 100); // 100 milliseconds

    // Store the timeout ID for later use
    setTimeoutId(id);
  };

  const handleMouseLeave = () => {
    // Clear any existing timeout
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    // Set a delay before closing the collapse
    const id = setTimeout(() => {
      close();
    }, 100); // 100 milliseconds

    // Store the timeout ID for later use
    setTimeoutId(id);
  };

  const handleTextMouseEnter = () => {
    // Prevent collapse when mouse enters the text
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
  };

  const handleTextMouseLeave = () => {
    // Clear any existing timeout
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    // Set a delay before closing the collapse
    const id = setTimeout(() => {
      close();
    }, 200); // 100 milliseconds

    // Store the timeout ID for later use
    setTimeoutId(id);
  };

  return (
    <Box h={"100%"}>
      <Container fluid px={"10vw"}>
        <Group
          justify="left"
          mb={"2vh"}
          w={"100%"}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Text>ALESSIO DE NICOLÒ</Text>
        </Group>
        <Collapse
          in={opened}
          onMouseEnter={handleTextMouseEnter}
          onMouseLeave={handleTextMouseLeave}
        >
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
      <ScrollArea h={"80.3vh"} type={"never"} viewportRef={viewport}>
        <Grid gutter={rem(0)}>
          {projects.map((project) => (
            <Grid.Col
              span={12}
              h={"35vh"}
              key={project.thumbnail}
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
                  src={project.thumbnail}
                  alt={"I'm an image"}
                  onClick={() => navigate(project.path)}
                  radius={rem(0)}
                  style={{ cursor: "none", height: "100%" }}
                />
              </Tooltip.Floating>
            </Grid.Col>
          ))}
        </Grid>
        <Container w={"100%"} h={"12vh"} px={0}>
          <Tooltip.Floating
            label={"TO THE TOP"}
            radius={rem(24)}
            color={"#000000"}
          >
            <Text
              onClick={scrollToTop}
              px={0}
              style={{
                fontSize: rem(48),
                color: "#000000",
                backgroundColor: "#ffffff",
                cursor: "none",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              ↑
            </Text>
          </Tooltip.Floating>
        </Container>
      </ScrollArea>
    </Box>
  );
};

export default Projects;
