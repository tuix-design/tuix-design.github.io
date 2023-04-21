export const doclink = [
  "overview",
  "installation",
  "button",
  "icon",
  "Layout",
  "Row",
  "Col",
  "Grid",
];

export interface tagSchema {
  label: string;
  link: string;
}

export const tag: tagSchema[] = [
  { label: "installation", link: "installation" },
  { label: "install stable version", link: "installation/#stable-version" },
  {
    label: "install specific version",
    link: "installation/#specific-version",
  },
  { label: "build from source", link: "installation/#build-from-source" },
  { label: "button", link: "button" },
  { label: "button primary", link: "button/#primary" },
  { label: "button secondary", link: "button/#secondary" },
  { label: "button disabled", link: "button/#disabled" },
];

export const index = {
  install: [0],
  stable: [1],
  version: [1, 2],
  specific: [2],
  build: [3],
  from: [3],
  source: [3],
  button: [4],
  primary: [5],
  secondary: [6],
  disabled: [7],
};

export const Icons = [
  "Home",
  "Lock",
  "Check",
  "Search",
  "Chevron",
  "Menu",
  "Ellipsis",
  "Eye",
  "EyeSlash",
  "File",
  "Copy",
  "Close",
  "Down",
];
