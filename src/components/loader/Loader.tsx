

const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <div className="text-white text-xl font-semibold ml-2">
        Loading
        <span className="inline-block animate-blink">.</span>
        <span className="inline-block animate-blink delay-300">.</span>
        <span className="inline-block animate-blink delay-600">.</span>
      </div>
      <div className="w-52 h-8 flex items-center box-border p-2 bg-gray-800 shadow-inner rounded-full">
        <div className="relative flex justify-center flex-col w-0 h-5 bg-gradient-to-t from-orange-600 to-yellow-400 rounded-full animate-loading">
          <div className="absolute flex items-center gap-4">
            <div className="w-2.5 h-11 opacity-30 transform rotate-45 bg-gradient-to-t from-white to-transparent"></div>
            <div className="w-2.5 h-11 opacity-30 transform rotate-45 bg-gradient-to-t from-white to-transparent"></div>
            <div className="w-2.5 h-11 opacity-30 transform rotate-45 bg-gradient-to-t from-white to-transparent"></div>
            <div className="w-2.5 h-11 opacity-30 transform rotate-45 bg-gradient-to-t from-white to-transparent"></div>
            <div className="w-2.5 h-11 opacity-30 transform rotate-45 bg-gradient-to-t from-white to-transparent"></div>
            <div className="w-2.5 h-11 opacity-30 transform rotate-45 bg-gradient-to-t from-white to-transparent"></div>
            <div className="w-2.5 h-11 opacity-30 transform rotate-45 bg-gradient-to-t from-white to-transparent"></div>
            <div className="w-2.5 h-11 opacity-30 transform rotate-45 bg-gradient-to-t from-white to-transparent"></div>
            <div className="w-2.5 h-11 opacity-30 transform rotate-45 bg-gradient-to-t from-white to-transparent"></div>
            <div className="w-2.5 h-11 opacity-30 transform rotate-45 bg-gradient-to-t from-white to-transparent"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
