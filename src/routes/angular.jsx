import { BiLogoAngular } from "react-icons/bi";
import angularQuiz from "../db/angularQuiz.json";
import MainComponent from "../components/MainComponent";
const Angular = () => {
  return (
    <MainComponent
      quiz={angularQuiz}
      icon={<BiLogoAngular className="h-24 mx-auto mb-6 w-44" />}
      color="red"
      bgColor="lg:hover:bg-red-500"
    />
  );
};
export default Angular;
