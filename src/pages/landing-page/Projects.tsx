import {
  Image,
  rem,
  Tooltip,
  SimpleGrid,
  Grid,
  ScrollArea,
} from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { projects } from "../../utils/projects.ts";

const Projects = () => {
  const navigate = useNavigate();

  return (
    <ScrollArea h={"90vh"}>
      <Grid gutter={rem(0)}>
        {projects.map((project) => (
          <Grid.Col
            span={12}
            key={project.image}
            style={{
              height: rem(400),
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
                alt={"random"}
                onClick={() => navigate(project.path)}
                radius={rem(0)}
                style={{ cursor: "none" }}
              />
            </Tooltip.Floating>
          </Grid.Col>
        ))}
      </Grid>
    </ScrollArea>
  );
};

export default Projects;
