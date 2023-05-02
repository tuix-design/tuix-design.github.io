interface sideMenuSchema {
  [key: string]: string[];
}

export const sideMenu: sideMenuSchema = {
  start: ["overview", "installation"],
  general: ["button", "icon", "style", "animation"],
  "data display": ["tooltip", "tab"],
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

export const apiTab: api[] = [
  {
    props: "children",
    type: "ReactNode",
    description: "Each tab content",
    default: "None",
    status: "required",
  },
  {
    props: "header",
    type: "ReactNode",
    description: "Tabbar content",
    default: "None",
    status: "required",
  },
  {
    props: "activeStyle",
    type: "CSSProperties",
    description: "Active Tabbar style",
    default: "None",
    status: "optional",
  },
  {
    props: "style",
    type: "CSSProperties",
    description: "Tabbar style",
    default: "None",
    status: "optional",
  },
];

export const apiAnimation: api[] = [
  {
    props: "animate",
    type: "styleProperties[]",
    default: "None",
    description: "animation keyframe",
    status: "required",
  },
  {
    props: "option",
    type: "optionProperties",
    default: "defaultOptionProperties",
    description: "animation option",
    status: "optional",
  },
  {
    props: "auto",
    type: "boolean",
    default: "true",
    description: "true if animation start automatically",
    status: "optional",
  },
];

export const apiOptionAnimation: api[] = [
  {
    props: "delay",
    type: "number",
    default: "0",
    description: "animation delay in millisecondes",
    status: "optional",
  },
  {
    props: "duration",
    type: "number",
    default: "500",
    description: "animation duration in millisecondes",
    status: "optional",
  },
  {
    props: "iterations",
    type: "number",
    default: "1",
    description: "animation iterations",
    status: "optional",
  },
  {
    props: "easing",
    type: "ease | linear | ease-in | ease-out | ease-in-out | step-start | step-end",
    default: "linear",
    description: "animation easing",
    status: "optional",
  },
];

export const styleShortCode: any = {
  display: [
    {
      shortcode: "block",
      css: "display:block",
    },
    {
      shortcode: "inline",
      css: "display:inline",
    },
    {
      shortcode: "flex",
      css: "display:flex",
    },
  ],
  size: [
    {
      shortcode: "w:value",
      css: "width:value",
    },
    {
      shortcode: "h:value",
      css: "height:value",
    },
  ],
};
