import vueQuiz from "../db/vueQuiz.json";
import { FaVuejs } from "react-icons/fa";
import MainComponent from "../components/MainComponent";
const Vue = () => {
  return (
    <MainComponent
      quiz={vueQuiz}
      icon={<FaVuejs className="h-24 mx-auto mb-6 w-44" />}
      focus="focus-visible:outline-green-500"
      bgColor="bg-green-600"
      hoverBgColor="lg:hover:bg-green-500"
    />
  );
};
export default Vue;
