import { Grid, Image, rem } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { projects } from "../../utils/projects.ts";

const Projects = () => {
  const navigate = useNavigate();

  return (
    <Grid gutter={15}>
      {projects.map((project) => (
        <Grid.Col key={project.image} span={4}>
          <Image
            src={project.image}
            alt={"random"}
            onClick={() => navigate(project.path)}
            radius={rem(10)}
            style={{ cursor: "pointer" }}
          />
        </Grid.Col>
      ))}
    </Grid>
  );
};

export default Projects;
