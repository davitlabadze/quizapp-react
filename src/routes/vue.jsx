import vueQuiz from "../db/vueQuiz.json";
import { FaVuejs } from "react-icons/fa";
import MainComponent from "../components/MainComponent";

const Vue = () => {
  return (
    <MainComponent
      quiz={vueQuiz}
      icon={<FaVuejs className="h-auto mx-auto w-44" />}
      color="green"
    />
  );
};
export default Vue;
