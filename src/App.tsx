import "./App.css";
import { Outlet, useNavigate } from "react-router-dom";
import { Container, rem, Tooltip, Title } from "@mantine/core";
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
      <Container fluid bg={"#ffffff"} w={"100%"}>
        <Tooltip.Floating label="Home" radius={rem(50)}>
          <Title
            onClick={() => navigate("/projects")}
            style={{
              cursor: "none",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "10vh",
              paddingTop: rem(0),
            }}
          >
            ADN
          </Title>
        </Tooltip.Floating>
      </Container>

      <Container fluid w={"120rem"} h={"90vh"} bg={"#ffffff"} p={0}>
        <Outlet />
      </Container>
    </>
  );
};

export default App;
