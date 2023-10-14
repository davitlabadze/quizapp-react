import { TbBrandSvelte } from "react-icons/tb";
import MainComponent from "../components/MainComponent";
import SvelteQuiz from "../db/svelte/svelteQuiz.json";
import AngularJob from "../db/svelte/SvelteJob";
import AngularDoc from "../db/svelte/SvelteDoc";
const Svelte = () => {
  return (
    <MainComponent
      quiz={SvelteQuiz}
      icon={<TbBrandSvelte className="h-24 mx-auto mb-6 w-44" />}
      focus="focus-visible:outline-orange-500"
      bgColor="bg-orange-600"
      hoverBgColor="lg:hover:bg-orange-500"
      job={AngularJob}
      documentation={AngularDoc}
      textColor="text-orange-500"
      jobText="You can find job here"
      learnText="You can learn here"
    />
  );
};
export default Svelte;
