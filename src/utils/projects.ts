/**
 * The Project interface represents the structure of a project object.
 * @interface
 * @property {string} image - The URL of the project's image.
 * @property {string} path - The path of the project.
 * @property {string} [title] - The title of the project. This property is optional.
 * @property {string} [description] - The description of the project. This property is optional.
 */
export interface Project {
  image: string;
  path: string;
  name: string;
  nameCaps?: string;
  color?: string;
  textColor?: string;
  tooltipHome?: string;
  description?: string;
  images?: ImageData[]; // Array of images for each project
}

export interface ImageData {
  id?: number;
  src?: string;
  alt?: string;
}
/**
 * The projects array contains a list of project objects.
 * @type {Project[]}
 */
export const projects: Project[] = [
  {
    image: "/src/assets/covers/habitomori_cover.jpg",
    path: "/habitomori",
    name: "Habitomori",
    nameCaps: "HABITOMORI",
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
  },
  {
    image: "/src/assets/covers/open-library_cover.jpg",
    path: "/open-library",
    name: "OpenLibrary",
    nameCaps: "OPEN LIBRARY",
    color: "#4752ff",
    textColor: "#ffffff",
    tooltipHome: "Home",
    images: [{ id: 1, src: "/src/assets/noclip/noclip_01.jpg" }],
  },
  {
    image: "/src/assets/covers/noclip_cover.jpg",
    path: "/noclip",
    name: "Noclip",
    nameCaps: "NOCLIP",
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
  },
  {
    image: "/src/assets/covers/sussurri-sepolti_cover.jpg",
    path: "/sussurri-sepolti",
    name: "SussurriSepolti",
    nameCaps: "SUSSURRI SEPOLTI",
    color: "#5d705f",
    textColor: "#ffffff",
    tooltipHome: "Home",
    images: [
      { id: 1, src: "/src/assets/sussurri-sepolti/sussurri-sepolti_01.jpg" },
      { id: 2, src: "/src/assets/sussurri-sepolti/sussurri-sepolti_02.jpg" },
      { id: 3, src: "/src/assets/sussurri-sepolti/sussurri-sepolti_03.jpg" },
      { id: 4, src: "/src/assets/sussurri-sepolti/sussurri-sepolti_04.jpg" },
    ],
  },
  {
    image: "/src/assets/covers/everlived_cover.jpg",
    path: "/everlived",
    name: "Everlived",
    nameCaps: "EVERLIVED",
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
  },
  {
    image: "/src/assets/covers/la-superscomoda_cover.jpg",
    path: "/la-superscomoda",
    name: "LaSuperscomoda",
    nameCaps: "LA SUPERSCOMODA",
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
  },
  {
    image: "/src/assets/covers/quanto_cover.jpg",
    path: "/quanto",
    name: "Quanto",
    nameCaps: "QUANTO",
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
  },
];
