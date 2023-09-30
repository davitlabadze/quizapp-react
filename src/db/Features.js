import { BiLogoReact, BiLogoAngular } from "react-icons/bi";
import { FaVuejs } from "react-icons/fa";
const Features = [
  {
    name: "React",
    description:
      "React can change how you think about the designs you look at and the apps you build. When you build a user interface with React, you will first break it apart into pieces called components. Then, you will describe the different visual states for each of your components. Finally, you will connect your components together so that the data flows through them.",
    href: "react",
    textColor: "text-sky-500",
    icon: BiLogoReact,
  },
  {
    name: "Vue",
    description:
      "We believe there is no 'one size fits all' story for the web. This is why Vue is designed to be flexible and incrementally adoptable. Depending on your use case, Vue can be used in different ways to strike the optimal balance between stack complexity, developer experience and end performance.",
    href: "vue",
    textColor: "text-green-500",
    icon: FaVuejs,
  },
  {
    name: "Angular",
    description:
      "you're taking advantage of a platform that can scale from single-developer projects to enterprise-level applications. Angular is designed to make updating as straightforward as possible, so take advantage of the latest developments with minimal effort. Best of all, the Angular ecosystem consists of a diverse group of over 1.7 million developers, library authors, and content creators",
    href: "angular",
    textColor: "text-red-500",
    icon: BiLogoAngular,
  },
];
export default Features;
