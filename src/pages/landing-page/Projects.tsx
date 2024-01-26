import { Image, rem, Tooltip, SimpleGrid } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { projects } from "../../utils/projects.ts";

const Projects = () => {
  const navigate = useNavigate();

  return (
    <SimpleGrid cols={1}>
      {projects.map((project) => (
        <div
          key={project.image}
          style={{
            height: "40vh",
            backgroundColor: "red",
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
        </div>
      ))}
    </SimpleGrid>
  );
};

export default Projects;
