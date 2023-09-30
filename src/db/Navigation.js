import {
  CalendarIcon,
  ChartPieIcon,
  DocumentDuplicateIcon,
  // FolderIcon,
  HomeIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import { FaVuejs } from "react-icons/fa";
const Navigation = [
  { name: "Home", href: "/", icon: HomeIcon, current: true },
  { name: "React", href: "react", icon: UsersIcon, current: false },
  { name: "Vue", href: "vue", icon: FaVuejs, current: false },
  {
    name: "Angular",
    href: "angular",
    icon: CalendarIcon,
    current: false,
  },
  {
    name: "Documents",
    href: "#",
    icon: DocumentDuplicateIcon,
    current: false,
  },
  { name: "Reports", href: "#", icon: ChartPieIcon, current: false },
];
export default Navigation;
