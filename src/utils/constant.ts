interface sideMenuSchema {
  [key: string]: string[];
}

export const sideMenu: sideMenuSchema = {
  start: ["overview", "installation"],
  general: ["button", "icon", "style"],
};

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

export const apiIcon = [
  {
    props: "name",
    type: "IconsName",
    description: "Name of the icon to render",
    default: "Null",
    status: "required",
  },
  {
    props: "color",
    type: "string",
    description: "Icon's color",
    default: "#00000",
    status: "optional",
  },
  {
    props: "size",
    type: "number",
    description: "Icon's size in pixels",
    default: "24",
    status: "optional",
  },
  {
    props: "rotate",
    type: "number",
    description: "Icon's rotation in degree",
    default: "0",
    status: "optional",
  },
];
