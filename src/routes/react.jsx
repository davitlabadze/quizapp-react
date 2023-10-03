import reactQuiz from "../db/reactQuiz.json";
import { BiLogoReact } from "react-icons/bi";
import MainComponent from "../components/MainComponent";
import ReactJob from "../db/ReactJob";
import Documentation from "../db/ReactDoc";

export const React = () => {
  return (
    <MainComponent
      quiz={reactQuiz}
      icon={<BiLogoReact className="h-24 mx-auto mb-6 w-44" />}
      focus="focus-visible:outline-sky-500"
      bgColor="bg-sky-600"
      hoverBgColor="md:hover:bg-sky-500"
      job={ReactJob}
      documentation={Documentation}
      textColor="text-sky-500"
      jobText="You can find job here"
      learnText="You can learn here"
    />
  );
};
export default React;
