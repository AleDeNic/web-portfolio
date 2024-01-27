import "./App.css";
import { Outlet, useNavigate } from "react-router-dom";
import { Container, rem, Tooltip, Image, Group } from "@mantine/core";
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
      <Group bg={"#ffffff"} justify={"space-between"} px={rem(20)} w={rem(500)}>
        <Tooltip.Floating label="HOME" radius={rem(50)}>
          <Image
            onClick={() => navigate("/projects")}
            style={{
              cursor: "none",
            }}
            src={"/src/assets/ADN_logo.svg"}
            alt={"random"}
            fit={"contain"}
            h={"auto"}
            w={"auto"}
          />
        </Tooltip.Floating>
      </Group>
      <Container fluid w={"120rem"} bg={"#ffffff"} p={0}>
        <Outlet />
      </Container>
    </>
  );
};

export default App;
