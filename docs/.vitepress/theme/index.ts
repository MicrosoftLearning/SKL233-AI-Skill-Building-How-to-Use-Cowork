import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";
import "./custom.css";
import PathChooser from "./components/PathChooser.vue";

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component("PathChooser", PathChooser);
  },
} satisfies Theme;
