import { defineConfig } from "vitepress";

export default defineConfig({
  title: "AI Skill Building with Cowork",
  description:
    "Hands-on flights for building real AI skills with Microsoft 365 Copilot Cowork.",
  base: "/SKL233-AI-Skill-Building-How-to-Use-Cowork/",
  cleanUrls: true,
  head: [["link", { rel: "icon", href: "/SKL233-AI-Skill-Building-How-to-Use-Cowork/favicon.ico" }]],
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      {
        text: "Flights",
        items: [
          { text: "Flight 01 · Orientation Through Discovery", link: "/orientation/" },
          { text: "Flight 02 · Your Weekly Manager Update", link: "/weekly-update/" },
          { text: "Flight 03 · Make It Your Own", link: "/make-it-your-own/" },
        ],
      },
      { text: "Learn Cowork with Cowork", link: "/learn-cowork-with-cowork/" },
    ],
    search: {
      provider: "local",
    },
    sidebar: [
      {
        text: "Flights",
        items: [
          { text: "Flight 01 · Orientation Through Discovery", link: "/orientation/" },
          { text: "Flight 02 · Your Weekly Manager Update", link: "/weekly-update/" },
          { text: "Flight 03 · Make It Your Own", link: "/make-it-your-own/" },
        ],
      },
      {
        text: "Take it with you",
        items: [
          { text: "Learn Cowork with Cowork", link: "/learn-cowork-with-cowork/" },
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
