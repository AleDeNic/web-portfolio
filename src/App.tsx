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
      <Container fluid bg={"#ffffff"} w={"100%"}>
        <Tooltip.Floating label="Home" radius={rem(50)}>
          <Title
            onClick={() => navigate("/projects")}
            style={{
              cursor: "none",
              textAlign: "right",
              display: "flex",
              alignItems: "right",
              justifyContent: "center",
              height: rem(93),
              paddingTop: rem(0),
            }}
            //ta={"center"}
            //order={1}
            //h={rem(100)}
            //pt={rem(0)}
            //style={{ cursor: "none" }}
          >
            ADN
          </Title>
        </Tooltip.Floating>
      </Container>

      <Container fluid w={"120rem"} bg={"#ffffff"} p={0}>
        <Outlet />
      </Container>
    </>
  );
};

export default App;
