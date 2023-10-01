import reactQuiz from "../db/reactQuiz.json";
import { BiLogoReact } from "react-icons/bi";
import MainComponent from "../components/MainComponent";

const React = () => {
  return (
    <MainComponent
      quiz={reactQuiz}
      icon={<BiLogoReact className="h-24 mx-auto mb-6 w-44" />}
      focus="focus-visible:outline-sky-500"
      bgColor="bg-sky-600"
      hoverBgColor="lg:hover:bg-sky-500"
    />
  );
};
export default React;
