import "./App.css";
import { Outlet, useNavigate } from "react-router-dom";
import { Container, Image, rem, Text, Tooltip, Title } from "@mantine/core";
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
        bg={"#ffffff"}
        w={"100%"}
        h={"10vh"}
        mb={rem(0)}
        style={{ borderRadius: rem(0) }}
      >
        <Tooltip.Floating label="Home" radius={rem(50)}>
          <Title
            onClick={() => navigate("/projects")}
            style={{ cursor: "pointer" }}
            ta={"center"}
            order={1}
            pt={rem(22)}
            style={{ cursor: "none" }}
          >
            ADN
          </Title>
        </Tooltip.Floating>
      </Container>

      <Container
        fluid
        w={"1920px"}
        bg={"#ffffff"}
        padding={"0px"}
        //p={rem(150)}
        //style={{ borderRadius: rem(5) }}
      >
        <Outlet />
      </Container>
    </>
  );
};

export default App;
