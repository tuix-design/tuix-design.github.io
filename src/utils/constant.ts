interface sideMenuSchema {
  [key: string]: string[];
}

export const sideMenu: sideMenuSchema = {
  start: ["overview", "installation"],
  general: ["button", "icon", "style"],
  "data display": ["tooltip"],
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

interface api {
  props: string;
  type: string;
  description: string;
  default: string;
  status: string;
}

export const apiIcon: api[] = [
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

export const apiButton: api[] = [
  {
    props: "variant",
    type: "primary | secondary | success | warning | danger",
    description: "Button's variant",
    default: "primary",
    status: "optional",
  },
  {
    props: "size",
    type: "sm | md | lg",
    description: "Button's height",
    default: "md",
    status: "optional",
  },
  {
    props: "bordered",
    type: "boolean",
    description: "Button's border status",
    default: "false",
    status: "optional",
  },
  {
    props: "desabled",
    type: "boolean",
    description: "Button's diable status",
    default: "false",
    status: "optional",
  },
  {
    props: "rounded",
    type: "boolean",
    description: "rounded button",
    default: "false",
    status: "optional",
  },
  {
    props: "icon",
    type: "ReactNode",
    description: "Button's icon",
    default: "null",
    status: "optional",
  },

  {
    props: "onClick",
    type: "()=>void",
    description: "Button's onClick event",
    default: "none",
    status: "optional",
  },
];

export const apiTooltip: api[] = [
  {
    props: "children",
    type: "ReactNode",
    description: "the main element for tooltip",
    default: "None",
    status: "required",
  },
  {
    props: "content",
    type: "ReactNode",
    description: "Tooltip's content",
    default: "None",
    status: "required",
  },
  {
    props: "position",
    type: "top | left | right | bottom",
    description: "Tooltip's position",
    default: "top",
    status: "optional",
  },
  {
    props: "style",
    type: "CSSProperties",
    description: "Tooltip's title",
    default: "bg:#000 color:#fff",
    status: "optional",
  },
];
