import "./App.css";
import { Outlet, useNavigate } from "react-router-dom";
import { Container, rem, Text, Tooltip } from "@mantine/core";
import { useEffect } from "react";

/**
 * The App component is the root component of the application.
 * It sets up the navigation and renders the Outlet component, which is where the routed components will be displayed.
 * On initial render, it navigates to the "/projects" route.
 * @component
 * @example
 * return (
 *   <App />
 * )
 */
const App = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/projects");
  }, [navigate]);

  return (
    <>
      <Container
        fluid
        bg={"gray"}
        w={"100%"}
        h={rem(80)}
        mb={rem(0)}
        style={{ borderRadius: rem(0) }}
      >
        <Tooltip.Floating label="The Witness 3" radius={rem(50)}>
          <Text
            onClick={() => navigate("/projects")}
            style={{ cursor: "pointer" }}
            ta={"left"}
          >
            ADN
          </Text>
        </Tooltip.Floating>
      </Container>

      <Container
        fluid
        w={"1920px"}
        bg={"#f34d56"}
        // p={rem(150)}
        // style={{ borderRadius: rem(5) }}
      >
        <Outlet />
      </Container>

      <Container>
        <Text>aaaaaaaaa</Text>
      </Container>
    </>
  );
};

export default App;
