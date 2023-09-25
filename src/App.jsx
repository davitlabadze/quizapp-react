// import { ArrowPathIcon, LockClosedIcon } from '@heroicons/react/20/solid'
import { BiLogoReact,BiLogoAngular } from "react-icons/bi";
import { FaVuejs } from "react-icons/fa";
import quotes from "./db/quotes.json";



const App = () => {
  const features = [
  {
    name: 'React Quiz',
    description:
      'React can change how you think about the designs you look at and the apps you build. When you build a user interface with React, you will first break it apart into pieces called components. Then, you will describe the different visual states for each of your components. Finally, you will connect your components together so that the data flows through them.',
    href: '#',
    textColor: 'text-sky-500',
    icon: BiLogoReact,
  },
  {
    name: 'Vue Quiz',
    description:
      'We believe there is no "one size fits all" story for the web. This is why Vue is designed to be flexible and incrementally adoptable. Depending on your use case, Vue can be used in different ways to strike the optimal balance between stack complexity, developer experience and end performance.',
    href: '#',
    textColor: 'text-green-500',
    icon: FaVuejs,
  },
  {
    name: 'Angular Quiz',
    description:
      `you're taking advantage of a platform that can scale from single-developer projects to enterprise-level applications. Angular is designed to make updating as straightforward as possible, so take advantage of the latest developments with minimal effort. Best of all, the Angular ecosystem consists of a diverse group of over 1.7 million developers, library authors, and content creators`,
    href: '#',
    textColor: 'text-red-500',
    icon: BiLogoAngular,
  },
];
// const jsonData = [
//   { id: 1, name: 'Item 1' },
//   { id: 2, name: 'Item 2' },
//   { id: 3, name: 'Item 3' },
//   // Add more items as needed
// ];
  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
  };
  const randomQuote = getRandomQuote();
  // console.log(randomQuote);
return (
   <>
    <div className="bg-white py-2 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Quiz App</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Check your knowledge
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            {randomQuote.quote}
            <strong className="float-right mt-6">{randomQuote.name}</strong>
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <feature.icon className={"h-5 w-5 flex-none "+feature.textColor} aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                  <p className="mt-6">
                    <a href={feature.href} className="text-sm font-semibold leading-6 text-indigo-600">
                    Start Quiz <span aria-hidden="true">→</span>
                    </a>
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
   </>
  )
}

export default App