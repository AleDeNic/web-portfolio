import { Project } from "../model/project-model.ts";

/**
 * The projects array contains a list of project objects.
 * @type {Project[]}
 */
export const projects: Project[] = [
  {
    thumbnail: "/src/assets/covers/habitomori_cover.jpg",
    path: "/habitomori",
    name: "Habitomori",
    color: "#aea7eb",
    textColor: "#000000",
    tooltipHome: "Home",
    images: [
      { id: 1, src: "/src/assets/habitomori/habitomori_01.jpg" },
      { id: 2, src: "/src/assets/habitomori/habitomori_02.jpg" },
      { id: 3, src: "/src/assets/habitomori/habitomori_03.jpg" },
      { id: 4, src: "/src/assets/habitomori/habitomori_04.jpg" },
      { id: 5, src: "/src/assets/habitomori/habitomori_05.jpg" },
    ],
    info: {
      course: "Interaction Design Studio • 2023",
      role: "User research • UX/UI design • prototyping",
      learned:
        "to do research on specific users and their needs • to develop solutions while considering techical limitations • to design wireframes and Figma interactive mockups",
    },
  },
  {
    thumbnail: "/src/assets/covers/open-library_cover.jpg",
    path: "/open-library",
    name: "OpenLibrary",
    title: "Open Library",
    description:
      "    Open Library is an open source website that has the goal to store\n" +
      "            the metadata of all the books ever published. The idea is good, but\n" +
      "            the website is not usable at all. So we decided to redesign it,\n" +
      "            focusing on the user experience and the accessibility. Redesigning\n" +
      "            the main features, like the book browsing and the metadata upload\n" +
      "            process, we remade from scratch the entire visual identity and\n" +
      "            design system.",
    color: "#4752ff",
    textColor: "#ffffff",
    tooltipHome: "Home",
    images: [
      { id: 1, src: "/src/assets/open-library/open-library_01.jpg" },
      { id: 2, src: "/src/assets/open-library/open-library_02.jpg" },
      { id: 3, src: "/src/assets/open-library/open-library_03.jpg" },
      { id: 4, src: "/src/assets/open-library/open-library_04.jpg" },
      { id: 5, src: "/src/assets/open-library/open-library_05.jpg" },
      { id: 6, src: "/src/assets/open-library/open-library_06.jpg" },
    ],
    info: {
      course:
        "Ergonomics applied to the design of usable web pages and apps • 2023-2024",
      role: "UX/UI design • interactive prototyping",
      learned:
        "To analyze the usability and accessibility of a desktop website • To design desktop wireframes and interactive prototypes • to test the redesign with users",
    },
  },
  {
    thumbnail: "/src/assets/covers/noclip_cover.jpg",
    path: "/noclip",
    name: "Noclip",
    color: "#99f0fe",
    textColor: "#000000",
    tooltipHome: "Home",
    images: [
      { id: 1, src: "/src/assets/noclip/noclip_01.jpg" },
      { id: 2, src: "/src/assets/noclip/noclip_02.jpg" },
      { id: 3, src: "/src/assets/noclip/noclip_03.jpg" },
      { id: 4, src: "/src/assets/noclip/noclip_04.jpg" },
      { id: 5, src: "/src/assets/noclip/noclip_05.jpg" },
      { id: 6, src: "/src/assets/noclip/noclip_06.jpg" },
      { id: 7, src: "/src/assets/noclip/noclip_07.jpg" },
      { id: 8, src: "/src/assets/noclip/noclip_08.jpg" },
    ],
    info: {
      course: "Videogame design and programming •  2022-2023",
      role: "Game/level design • 3D art • UX/UI • music • graphic design",
      learned:
        "To cooperate effectively with programmers\n" +
        " • to use development tools like GitHub\n" +
        " • to design a videogame from start to finish",
    },
  },
  {
    thumbnail: "/src/assets/covers/sussurri-sepolti_cover.jpg",
    path: "/sussurri-sepolti",
    name: "SussurriSepolti",
    color: "#5d705f",
    textColor: "#ffffff",
    tooltipHome: "Home",
    images: [
      { id: 1, src: "/src/assets/sussurri-sepolti/sussurri-sepolti_01.jpg" },
      { id: 2, src: "/src/assets/sussurri-sepolti/sussurri-sepolti_02.jpg" },
      { id: 3, src: "/src/assets/sussurri-sepolti/sussurri-sepolti_03.jpg" },
      { id: 4, src: "/src/assets/sussurri-sepolti/sussurri-sepolti_04.jpg" },
    ],
    info: { role: "Graphic design", learned: "To design posters for an event" },
  },
  {
    thumbnail: "/src/assets/covers/everlived_cover.jpg",
    path: "/everlived",
    name: "Everlived",
    color: "#586be3",
    textColor: "#ffffff",
    tooltipHome: "Home",
    images: [
      { id: 1, src: "/src/assets/everlived/everlived_01.jpg" },
      { id: 2, src: "/src/assets/everlived/everlived_02.jpg" },
      { id: 3, src: "/src/assets/everlived/everlived_03.jpg" },
      { id: 4, src: "/src/assets/everlived/everlived_04.jpg" },
      { id: 5, src: "/src/assets/everlived/everlived_05.jpg" },
      { id: 6, src: "/src/assets/everlived/everlived_06.jpg" },
      { id: 7, src: "/src/assets/everlived/everlived_07.jpg" },
      { id: 8, src: "/src/assets/everlived/everlived_08.jpg" },
    ],
    info: {
      course: "Computer animation •  2021-2022",
      role: "3D modeling/animation • music",
      learned:
        "To model, create materials and animate in Blender • to embed a video artifact with an original soundtrack",
    },
  },
  {
    thumbnail: "/src/assets/covers/la-superscomoda_cover.jpg",
    path: "/la-superscomoda",
    name: "LaSuperscomoda",
    color: "#f51414",
    textColor: "#ffffff",
    tooltipHome: "Home",
    images: [
      { id: 1, src: "/src/assets/la-superscomoda/la-superscomoda_01.jpg" },
      { id: 2, src: "/src/assets/la-superscomoda/la-superscomoda_02.jpg" },
      { id: 3, src: "/src/assets/la-superscomoda/la-superscomoda_03.jpg" },
      { id: 4, src: "/src/assets/la-superscomoda/la-superscomoda_04.jpg" },
      { id: 5, src: "/src/assets/la-superscomoda/la-superscomoda_05.jpg" },
      { id: 6, src: "/src/assets/la-superscomoda/la-superscomoda_06.jpg" },
      { id: 7, src: "/src/assets/la-superscomoda/la-superscomoda_07.jpg" },
    ],
    info: {
      course: "Laboratorio di sintesi finale •  2021-2022",
      role: "Brand identity • coding • 3D renders",
      learned:
        "To focus more on the problem, not just on the solution  • to criticize design practices using a speculative approach • to build and programme an arduino device",
    },
  },
  {
    thumbnail: "/src/assets/covers/quanto_cover.jpg",
    path: "/quanto",
    name: "Quanto",
    color: "#0171fa",
    textColor: "#ffffff",
    tooltipHome: "Home",
    images: [
      { id: 1, src: "/src/assets/quanto/quanto_01.jpg" },
      { id: 2, src: "/src/assets/quanto/quanto_02.jpg" },
      { id: 3, src: "/src/assets/quanto/quanto_03.jpg" },
      { id: 4, src: "/src/assets/quanto/quanto_04.jpg" },
      { id: 5, src: "/src/assets/quanto/quanto_05.jpg" },
      { id: 6, src: "/src/assets/quanto/quanto_06.jpg" },
    ],
    info: {
      course: "Laboratorio di progetto della comunicazione visiva •  2021",
      role: "2D animation • brand identity • music",
      learned: "to design a brand identity  • to create a motion design reel",
    },
  },
];
