import vueQuiz from "../db/vue/vueQuiz.json";
import { FaVuejs } from "react-icons/fa";
import MainComponent from "../components/MainComponent";
import VueJob from "../db/vue/VueJob";
import VueDoc from "../db/vue/VueDoc";
const Vue = () => {
  return (
    <MainComponent
      quiz={vueQuiz}
      icon={<FaVuejs className="h-24 mx-auto mb-6 w-44" />}
      focus="focus-visible:outline-green-500"
      bgColor="bg-green-600"
      hoverBgColor="lg:hover:bg-green-500"
      job={VueJob}
      documentation={VueDoc}
      textColor="text-sky-500"
      jobText="You can find job here"
      learnText="You can learn here"
    />
  );
};
export default Vue;
