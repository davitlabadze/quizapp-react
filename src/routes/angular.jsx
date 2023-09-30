import angularQuiz from "../db/angularQuiz.json";
import { BiLogoAngular } from "react-icons/bi";
import MainComponent from "../components/MainComponent";

const Angular = () => {
  return (
    <MainComponent
      quiz={angularQuiz}
      icon={<BiLogoAngular className="h-auto mx-auto w-44" />}
      color="red"
    />
  );
};
export default Angular;
