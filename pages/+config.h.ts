import type { Config } from "vike/types";
import Layout from "../layouts/LayoutDefault";
import Head from "../layouts/HeadDefault";
import favicon from "../assets/favicon.ico";
import vikeReact from "vike-react";

// Default config (can be overridden by pages)
export default {
  Layout,
  Head,
  title: "Emoji Explorer",
  description: "Explore the emoji wilderness!",
  favicon,
  extends: vikeReact,
} satisfies Config;
