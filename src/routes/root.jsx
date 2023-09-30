import quotes from "../db/quotes.json";
import { Link } from "react-router-dom";
import Features from "../db/Features";

const Root = () => {
  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
  };
  const randomQuote = getRandomQuote();
  return (
    <>
      <div className="py-2 bg-white sm:py-32">
        <div className="px-6 mx-auto max-w-7xl lg:px-8">
          <div className="max-w-2xl mx-auto lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">
              Quiz App
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Check your knowledge
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              {randomQuote.quote}
              <strong className="float-right mt-6">{randomQuote.name}</strong>
            </p>
          </div>
          <div className="max-w-2xl mx-auto mt-16 sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {Features.map((feature) => (
                <div key={feature.name} className="flex flex-col">
                  <dt className="flex items-center text-base font-semibold leading-7 text-gray-900 gap-x-3">
                    <feature.icon
                      className={"h-5 w-5 flex-none " + feature.textColor}
                      aria-hidden="true"
                    />
                    {feature.name}
                  </dt>
                  <dd className="flex flex-col flex-auto mt-4 text-base leading-7 text-gray-600">
                    <p className="flex-auto">{feature.description}</p>
                    <p className="mt-6">
                      <Link
                        to={feature.href}
                        className="text-sm font-semibold leading-6 text-indigo-600"
                      >
                        Start Quiz <span aria-hidden="true">→</span>
                      </Link>
                    </p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </>
  );
};

export default Root;
