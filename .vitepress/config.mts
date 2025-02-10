import { defineConfig } from "vitepress";
import type { DefaultTheme } from "vitepress";

import { getSidebarItems } from "./openapi";

export default defineConfig({
  title: "CS2KZ Docs",
  description: "Documentation for CS2KZ",

  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }]
  ],

  srcDir: "docs",
  cleanUrls: true,

  titleTemplate: "CS2KZ | :title",

  themeConfig: {
    nav: nav(),
    sidebar: {
      "/": sidebar(),
      "/api/": [
        {
          text: "Introduction",
          link: "/api/"
        },
        ...await getSidebarItems("/api/"),
      ]
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/KZGlobalTeam/cs2kz-docs" },
      { icon: "discord", link: "https://discord.gg/csgokz" },
    ],

    editLink: {
      text: "View this page on GitHub",
      pattern: "https://github.com/KZGlobalTeam/cs2kz-docs/edit/main/docs/:path",
    },
  },
});

function nav(): DefaultTheme.NavItem[] {
  return [
    {
      text: "API",
      link: "/api",
    },
    {
      text: "Dashboard",
      link: "https://dashboard.cs2kz.org",
    },
    {
      text: "Stats",
      link: "https://cs2kz.org",
    },
  ];
};

function sidebar(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "Systems",
      items: [
        { text: "Modes", link: "/systems/modes" },
        { text: "Maps", link: "/systems/maps" },
        { text: "Points", link: "/systems/points" },
        { text: "Styles", link: "/systems/styles" },
      ],
    },
    {
      text: "Servers",
      items: [
        { text: "LAN Server Setup", link: "/servers/lan" },
      ],
    },
    {
      text: "Creator resources",
      items: [
        { text: "Map Approval Process", link: "/mapping/approval" },
      ],
    },
  ];
};
