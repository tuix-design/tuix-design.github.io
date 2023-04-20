export const doclink = [
  "overview",
  "installation",
  "Layout",
  "Row",
  "Col",
  "Grid",
];

export interface tagSchema {
  doc: string;
  tag: string;
}

export const tag: tagSchema[] = [
  {
    doc: "installation",
    tag: "stable version,latest version,build from source",
  },
  {
    doc: "button",
    tag: "primary,secondary,api",
  },
];

export const index = {
  stable: [0],
  version: [0, 0],
  latest: [0],
  build: [0],
  from: [0],
  source: [0],
  installation: [0],
  primary: [1],
  secondary: [1],
  api: [1],
  button: [1],
};
