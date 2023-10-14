import { BiLogoAngular } from "react-icons/bi";
import angularQuiz from "../db/angular/angularQuiz.json";
import MainComponent from "../components/MainComponent";
import AngularJob from "../db/angular/AngularJob";
import AngularDoc from "../db/angular/AngularDoc";
const Angular = () => {
  return (
    <MainComponent
      quiz={angularQuiz}
      icon={<BiLogoAngular className="h-24 mx-auto mb-6 w-44" />}
      focus="focus-visible:outline-red-500"
      bgColor="bg-red-600"
      hoverBgColor="lg:hover:bg-red-500"
      job={AngularJob}
      documentation={AngularDoc}
      textColor="text-red-500"
      jobText="You can find job here"
      learnText="You can learn here"
    />
  );
};
export default Angular;
