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
  title?: string;
  description?: string;
}

/**
 * The projects array contains a list of project objects.
 * @type {Project[]}
 */
export const projects: Project[] = [
  {
    image:
      "https://fastly.picsum.photos/id/32/384/320.jpg?hmac=E6zsyGr6_cXnw2yMq7Hb9e6Kecxovb4TozvWUsQtyqg",
    path: "/habitomori",
  },
  {
    image:
      "https://fastly.picsum.photos/id/397/384/320.jpg?hmac=obx1PO8Y15Bq0XueV9P5_CnQ8H8Ug68bF1-nAO7g9PA",
    path: "/noclip",
  },
  {
    image:
      "https://fastly.picsum.photos/id/802/384/320.jpg?hmac=gihrgPau0XDlZ9bU8onuwH8gUpvhlmb1OAGTQOlZaxA",
    path: "/sussurri-sepolti",
  },
  {
    image:
      "https://fastly.picsum.photos/id/236/384/320.jpg?hmac=kcD9ok0NwGbXMAOWy92wtrbKAwaLOC7-zyTQw_YFJsA",
    path: "/everlived",
  },
  {
    image:
      "https://fastly.picsum.photos/id/1074/384/320.jpg?hmac=9BbSZDlJXuMIJPA9nYrY9TwJAbIU8F89i6-Wug61BXo",
    path: "/la-superscomoda",
  },
  {
    image:
      "https://fastly.picsum.photos/id/19/384/320.jpg?hmac=_vVCqxz1lFZtax1bROKnBn6DF3wUiW5gm_j95D8rWw0",
    path: "/quanto",
  },
];
