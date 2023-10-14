import CssQuiz from "../db/css/CssQuiz.json";
import { TbBrandCss3 } from "react-icons/tb";
import MainComponent from "../components/MainComponent";
import CssJob from "../db/css/CssJob";
import CssDoc from "../db/css/CssDoc";

export const React = () => {
  return (
    <MainComponent
      quiz={CssQuiz}
      icon={<TbBrandCss3 className="h-24 mx-auto mb-6 w-44" />}
      focus="focus-visible:outline-sky-500"
      bgColor="bg-sky-600"
      hoverBgColor="md:hover:bg-sky-500"
      job={CssJob}
      documentation={CssDoc}
      textColor="text-sky-500"
      jobText="You are awesome! Now you don't have to stop, keep learning them"
      learnText="You can learn here"
    />
  );
};
export default React;
