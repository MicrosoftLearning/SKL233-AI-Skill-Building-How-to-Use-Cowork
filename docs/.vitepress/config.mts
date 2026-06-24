import { defineConfig } from "vitepress";

export default defineConfig({
  title: "AI Skill Building with Cowork",
  description:
    "Hands-on labs for building real AI skills with Microsoft 365 Copilot Cowork.",
  base: "/SKL233-AI-Skill-Building-How-to-Use-Cowork/",
  cleanUrls: true,
  head: [["link", { rel: "icon", href: "/SKL233-AI-Skill-Building-How-to-Use-Cowork/favicon.ico" }]],
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      {
        text: "Labs",
        items: [
          { text: "Lab 01 · Orientation Through Discovery", link: "/orientation/" },
          { text: "Lab 02 · Your Weekly Manager Update", link: "/lab-02/" },
          { text: "Lab 03 · Coming soon", link: "/lab-03/" },
        ],
      },
    ],
    search: {
      provider: "local",
    },
    sidebar: [
      {
        text: "Labs",
        items: [
          { text: "Lab 01 · Orientation Through Discovery", link: "/orientation/" },
          { text: "Lab 02 · Your Weekly Manager Update", link: "/lab-02/" },
          { text: "Lab 03 · Coming soon", link: "/lab-03/" },
        ],
      },
    ],
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/MicrosoftLearning/SKL233-AI-Skill-Building-How-to-Use-Cowork/",
      },
    ],
  },
});
