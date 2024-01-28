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
    image:
      "https://fastly.picsum.photos/id/13/2500/1667.jpg?hmac=SoX9UoHhN8HyklRA4A3vcCWJMVtiBXUg0W4ljWTor7s",
    path: "/habitomori",
    name: "Habitomori",
    nameCaps: "HABITOMORI",
    color: "#9880ff",
    textColor: "#000000",
    tooltipHome: "Home",
    images: [
      { id: 1, src: "/src/assets/habitomori/habitomori_01.png" },
      { id: 2, src: "/src/assets/habitomori/habitomori_02.png" },
      { id: 3, src: "/src/assets/habitomori/habitomori_03.png" },
    ],
  },
  {
    image:
      "https://fastly.picsum.photos/id/397/384/320.jpg?hmac=obx1PO8Y15Bq0XueV9P5_CnQ8H8Ug68bF1-nAO7g9PA",
    path: "/noclip",
    name: "Noclip",
    nameCaps: "NOCLIP",
    color: "#ffdf3b",
    textColor: "#000000",
    tooltipHome: "Home",
    images: [
      { id: 1, src: "/src/assets/noclip/noclip_0.png" },
      { id: 2, src: "/src/assets/noclip/noclip_1.jpg" },
      { id: 3, src: "/src/assets/noclip/noclip_2.jpg" },
      { id: 2, src: "/src/assets/noclip/noclip_3.jpg" },
      { id: 3, src: "/src/assets/noclip/noclip_4.jpg" },
      { id: 2, src: "/src/assets/noclip/noclip_5.jpg" },
      { id: 3, src: "/src/assets/noclip/noclip_6.jpg" },
      { id: 1, src: "/src/assets/noclip/noclip_7.png" },
      { id: 1, src: "/src/assets/noclip/noclip_8.png" },
      { id: 1, src: "/src/assets/noclip/noclip_logo.png" },
    ],
  },
  {
    image:
      "https://fastly.picsum.photos/id/802/384/320.jpg?hmac=gihrgPau0XDlZ9bU8onuwH8gUpvhlmb1OAGTQOlZaxA",
    path: "/sussurri-sepolti",
    name: "SussurriSepolti",
    nameCaps: "SUSSURRI SEPOLTI",
    color: "#44655b",
    textColor: "#ffffff",
    tooltipHome: "Home",
  },
  {
    image:
      "https://fastly.picsum.photos/id/236/384/320.jpg?hmac=kcD9ok0NwGbXMAOWy92wtrbKAwaLOC7-zyTQw_YFJsA",
    path: "/everlived",
    name: "Everlived",
    nameCaps: "EVERLIVED",
    color: "#5a64ff",
    textColor: "#ffffff",
    tooltipHome: "Home",
    images: [
      { id: 1, src: "/src/assets/everlived/01.jpg" },
      { id: 2, src: "/src/assets/everlived/02.jpg" },
      { id: 3, src: "/src/assets/everlived/03.jpg" },
    ],
  },
  {
    image:
      "https://fastly.picsum.photos/id/1074/384/320.jpg?hmac=9BbSZDlJXuMIJPA9nYrY9TwJAbIU8F89i6-Wug61BXo",
    path: "/la-superscomoda",
    name: "LaSuperscomoda",
    nameCaps: "LA SUPERSCOMODA",
    color: "#d30000",
    textColor: "#ffffff",
    tooltipHome: "Home",
  },
  {
    image:
      "https://fastly.picsum.photos/id/19/384/320.jpg?hmac=_vVCqxz1lFZtax1bROKnBn6DF3wUiW5gm_j95D8rWw0",
    path: "/quanto",
    name: "Quanto",
    nameCaps: "QUANTO",
    color: "#0023ff",
    textColor: "#ffffff",
    tooltipHome: "Home",
  },
];
