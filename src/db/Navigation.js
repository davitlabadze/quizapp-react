import { HomeIcon } from "@heroicons/react/24/outline";
import { BiLogoReact, BiLogoAngular } from "react-icons/bi";
import { RiJavascriptLine } from "react-icons/ri";
import { AiOutlineHtml5 } from "react-icons/ai";
import { TbBrandCss3, TbBrandSvelte } from "react-icons/tb";

import { FaVuejs } from "react-icons/fa";
const Navigation = [
  { name: "Home", href: "/", icon: HomeIcon, current: true },
  {
    name: "Html",
    href: "html",
    icon: AiOutlineHtml5,
    current: false,
    color: "bg-orange-500",
  },
  {
    name: "Css",
    href: "css",
    icon: TbBrandCss3,
    current: false,
    color: "bg-sky-500",
  },
  {
    name: "Javascript",
    href: "javascript",
    icon: RiJavascriptLine,
    current: false,
    color: "bg-yellow-500",
  },
  {
    name: "React",
    href: "react",
    icon: BiLogoReact,
    current: false,
    color: "bg-sky-500",
  },
  {
    name: "Vue",
    href: "vue",
    icon: FaVuejs,
    current: false,
    color: "bg-green-500",
  },
  {
    name: "Angular",
    href: "angular",
    icon: BiLogoAngular,
    current: false,
    color: "bg-red-500",
  },
  {
    name: "Svelte",
    href: "svelte",
    icon: TbBrandSvelte,
    current: false,
    color: "bg-orange-600",
  },
];
export default Navigation;
