import gamingGrowth from "@/assets/image-gaming-growth.webp";
import retroPcs from "@/assets/image-retro-pcs.webp";
import topLaptops from "@/assets/image-top-laptops.webp";
import type { StaticImageData } from "next/image";

export type NavLink = { label: string; href: string };
export type Article = { title: string; excerpt: string };
export type RankedArticle = Article & { rank: string; image: StaticImageData };

export const navLinks: NavLink[] = [
  { label: "Home", href: "#" },
  { label: "New", href: "#" },
  { label: "Popular", href: "#" },
  { label: "Trending", href: "#" },
  { label: "Categories", href: "#" },
];

export const newArticles: Article[] = [
  {
    title: "Hydrogen VS Electric Cars",
    excerpt: "Will hydrogen-fueled cars ever catch up to EVs?",
  },
  {
    title: "The Downsides of AI Artistry",
    excerpt:
      "What are the possible adverse effects of on-demand AI image generation?",
  },
  {
    title: "Is VC Funding Drying Up?",
    excerpt:
      "Private funding by VC firms is down 50% YOY. We take a look at what that means.",
  },
];

export const topArticles: RankedArticle[] = [
  {
    rank: "01",
    title: "Reviving Retro PCs",
    excerpt: "What happens when old PCs are given modern upgrades?",
    image: retroPcs,
  },
  {
    rank: "02",
    title: "Top 10 Laptops of 2022",
    excerpt: "Our best picks for various needs and budgets.",
    image: topLaptops,
  },
  {
    rank: "03",
    title: "The Growth of Gaming",
    excerpt: "How the pandemic has sparked fresh opportunities.",
    image: gamingGrowth,
  },
];
