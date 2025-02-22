import { defineConfig } from "vitepress";
import type { DefaultTheme } from "vitepress";

export default defineConfig({
  title: "CS2KZ Docs",
  description: "Documentation for CS2KZ",
  titleTemplate: "CS2KZ | :title",

  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }]
  ],

  srcDir: "docs",
  cleanUrls: true,
  metaChunk: true,

  themeConfig: {
    nav: [
      {
        text: "Stats",
        link: "https://cs2kz.org",
      },
      {
        text: "Dashboard",
        link: "https://dashboard.cs2kz.org",
      },
      {
        text: "API",
        link: "/api/",
      },
    ],

    sidebar: {
      "/": [
        {
          items: [
            { text: "Modes", link: "/modes" },
            { text: "Styles", link: "/styles" },
            { text: "Mapping", link: "/mapping" },
            { text: "Servers", link: "/servers" },
            { text: "Ranking", link: "/ranking" },
          ],
        },
        {
          text: "Mapping",
          items: [
            { text: "API", link: "/mapping/api" },
            { text: "Approval Process", link: "/mapping/approval" },
            { text: "Discord", link: "https://discord.gg/R593VhE" },
          ],
        },
        {
          text: "Servers",
          items: [
            { text: "Approval Process", link: "/servers/approval" },
            { text: "LAN Setup", link: "/servers/lan" },
          ],
        },
        {
          text: "Resources",
          items: [
            { text: "Differences from GOKZ", link: "/gokz" },
            { text: "GlobalAPI Documentation", link: "/api" },
          ],
        },
      ],
      "/mapping/": [
        { text: "Terminology", link: "/mapping/" },
        { text: "API", link: "/mapping/api" },
        { text: "Approval Process", link: "/mapping/approval" },
        { text: "Discord", link: "https://discord.gg/R593VhE" },
      ],
      "/servers/": [
        { text: "Approval Process", link: "/servers/approval" },
        { text: "LAN Setup", link: "/servers/lan" },
      ],
      "/api/": [
        { text: "Introduction", link: "/api/" },
        { text: "Explorer", link: "/api/explorer" },
        { text: "Problems", link: "/api/problems" },
      ],
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
