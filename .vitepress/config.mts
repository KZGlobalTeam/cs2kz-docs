import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "CS2 KZ Docs",
  description: "CS2 Kreedz documentation",
  head: [['link', { rel: 'icon', href: '/public/favicon.ico' }]],
  srcDir: "docs",

cleanUrls: true
  themeConfig: {
    nav: nav(),
    sidebar: sidebar(),

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

function nav() {
  return [
    { text: "Portal", link: "" },
  ];
}

function sidebar() {
  return [
    {
      text: "Systems",
      items: [
        { text: "Modes", link: "/systems/modes" },
        { text: "Maps", link: "/systems/maps" },
        { text: "Points", link: "/systems/points" },
        { text: "Styles", link: "/guides/Styles" },
      ],
    },
    {
      text: "Creator resources",
      items: [
        { text: "Map Approval Process", link: "/mapping/approval" },
      ],
    },
  ];
}
