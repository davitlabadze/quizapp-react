import vueQuiz from "../db/vueQuiz.json";
import { FaVuejs } from "react-icons/fa";
import MainComponent from "../components/MainComponent";
const Vue = () => {
  return (
    <MainComponent
      quiz={vueQuiz}
      icon={<FaVuejs className="h-24 mx-auto mb-6 w-44" />}
      color="green"
      bgColor="lg:hover:bg-green-500"
    />
  );
};
export default Vue;
