import {
  Image,
  rem,
  Tooltip,
  Grid,
  ScrollArea,
  Container,
  Button,
} from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { projects } from "../../utils/projects.ts";
import { useRef } from "react";

const Projects = () => {
  const navigate = useNavigate();

  const viewport = useRef<HTMLDivElement>(null);
  const scrollToTop = () =>
    viewport.current!.scrollTo({ top: 0, behavior: "smooth" });

  return (
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
              label={project.name}
              radius={rem(24)}
              color={"#111111"}
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
  );
};

export default Projects;
