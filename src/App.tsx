import "./App.css";
import { Outlet, useNavigate } from "react-router-dom";
import { Container, rem, Tooltip, Title, Accordion } from "@mantine/core";
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

const bio = [
  {
    value: "Bio",
    description:
      "Hi! I’m a communication design student at PoliMI.\n" +
      "Some years ago I approached design by realizing that\n" +
      "all my passions were powered by the same source: curiosity.\n" +
      "Then, studying design took me to fantastic worlds like UX/UI,\n" +
      "videogame design, computer animation and speculative design.\n" +
      "Most of the time I am either reading a book or refining my\n" +
      "works, always trying to improve who I am and what I do.\n" +
      "Right now I’m on my way to become a UX/UI designer,\n" +
      "while still keeping my passions in videogame design and electronic\n" +
      "music production.",
  },
];

const App = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/projects");
  }, [navigate]);

  const accordionItems = bio.map((item) => (
    <Accordion.Item key={item.value} value={item.value}>
      <Accordion.Control>{item.value}</Accordion.Control>
      <Accordion.Panel style={{ textAlign: "left" }}>
        {item.description}
      </Accordion.Panel>
    </Accordion.Item>
  ));

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
        <Tooltip.Floating label="Bio" radius={rem(50)}>
          <Container w={"30%"}>
            <Accordion defaultValue={"Course"} chevronPosition={"left"}>
              {accordionItems}
            </Accordion>
          </Container>
        </Tooltip.Floating>
      </Container>
      <Container fluid w={"120rem"} bg={"#ffffff"} p={0}>
        <Outlet />
      </Container>
    </>
  );
};

export default App;
