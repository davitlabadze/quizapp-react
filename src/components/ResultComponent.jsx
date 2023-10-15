const ResultComponent = ({ textColor, text, data }) => {
  return (
    <div className="px-6 mx-auto max-w-7xl lg:px-8">
      <h3
        className={`${textColor} text-2xl mt-2 text-center font-semibold leading-6`}
      >
        {text}
      </h3>
      <div
        className={`-mx-6 grid grid-cols-2 gap-0.5 overflow-hidden sm:mx-0 sm:rounded-2xl md:grid-cols-3`}
      >
        {data.map((item) => (
          <div
            key={item.id}
            className={`p-8 sm:p-10 lg:contrast-0 lg:hover:contrast-100 lg:duration-300`}
          >
            <a href={item.href} target="_blank" rel="noreferrer">
              <img
                className="object-contain w-full max-h-12"
                src={item.src}
                alt={item.name}
                title={item.name}
                width={158}
                height={48}
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResultComponent;
