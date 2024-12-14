import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "CS2 KZ Docs",
  description: "CS 2 Kreedz documentation",
  head: [['link', { rel: 'icon', href: '/public/favicon.ico' }]],
  srcDir: "docs",

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
      text: "CS2KZ Gamemode Info",
      items: [
        { text: "Modes", link: "/guides/Modes" },
        { text: "Maps", link: "/guides/Maps" },
      ],
    },
  ];
}
