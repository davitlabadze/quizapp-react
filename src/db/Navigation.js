import { HomeIcon } from "@heroicons/react/24/outline";
import { BiLogoReact, BiLogoAngular } from "react-icons/bi";
import { FaVuejs } from "react-icons/fa";
const Navigation = [
  { name: "Home", href: "/", icon: HomeIcon, current: true },
  { name: "React", href: "react", icon: BiLogoReact, current: false },
  { name: "Vue", href: "vue", icon: FaVuejs, current: false },
  {
    name: "Angular",
    href: "angular",
    icon: BiLogoAngular,
    current: false,
  },
];
export default Navigation;
