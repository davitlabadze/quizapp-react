import reactQuiz from "../db/reactQuiz.json";
import { BiLogoReact } from "react-icons/bi";
import MainComponent from "../components/MainComponent";

const React = () => {
  return (
    <MainComponent
      quiz={reactQuiz}
      icon={<BiLogoReact className="h-auto mx-auto mb-6 w-44" />}
      color="sky"
    />
  );
};
export default React;
