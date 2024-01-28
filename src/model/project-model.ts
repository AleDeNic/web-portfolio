/**
 * The Project interface represents the structure of a project object.
 * @interface
 * @property {string} thumbnail - The URL of the project's image.
 * @property {string} path - The path of the project.
 * @property {string} [title] - The title of the project. This property is optional.
 * @property {string} [description] - The description of the project. This property is optional.
 */
export interface Project {
  thumbnail: string;
  path: string;
  name: string;
  title?: string;
  description?: string;
  color?: string;
  textColor?: string;
  tooltipHome?: string;
  images?: ImageData[];
  info?: ProjectInfo;
}

export interface ProjectInfo {
  course?: string;
  role?: string;
  learned?: string;
}

export interface ImageData {
  id?: number;
  src?: string;
  alt?: string;
}
