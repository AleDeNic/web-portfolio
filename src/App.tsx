import "./App.css";
import { Outlet, useNavigate } from "react-router-dom";
import { Container, rem, Tooltip, Image, Flex } from "@mantine/core";
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
      <Flex
        bg={"#ffffff"}
        justify={"space-between"}
        px={"10vw"}
        h={"15vh"}
        align={"center"}
      >
        <Tooltip.Floating label="HOME" radius={rem(50)}>
          <Image
            onClick={() => navigate("/projects")}
            style={{
              cursor: "none",
            }}
            src={"/src/assets/ADN_logo.svg"}
            alt={"random"}
            fit={"contain"}
            h={"inherit"}
            w={"auto"}
          />
        </Tooltip.Floating>
        <Tooltip.Floating label="CONTACT" radius={rem(50)}>
          <a
            href={"mailto:alessio1.denicolo@mail.polimi.it"}
            style={{ cursor: "none", textDecoration: "none", color: "#000000" }}
          >
            alessio1.denicolo@mail.polimi.it
          </a>
        </Tooltip.Floating>
      </Flex>
      <Container fluid w={"120rem"} bg={"#ffffff"} p={0} h={"85vh"}>
        <Outlet />
      </Container>
    </>
  );
};

export default App;
