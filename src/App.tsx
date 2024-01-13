import "./App.css";
import { Outlet, useNavigate } from "react-router-dom";
import { Container, rem, Title } from "@mantine/core";
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
        bg={"gray"}
        w={"100%"}
        mb={rem(5)}
        style={{ borderRadius: rem(5) }}
      >
        <Title
          p={rem(5)}
          ta={"left"}
          onClick={() => navigate("/projects")}
          style={{ cursor: "pointer" }}
        >
          ADN
        </Title>
      </Container>

      <Container bg={"#eeeeee"} p={rem(15)} style={{ borderRadius: rem(5) }}>
        <Outlet />
      </Container>
    </>
  );
};

export default App;
