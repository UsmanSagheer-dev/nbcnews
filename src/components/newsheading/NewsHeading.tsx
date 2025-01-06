import { Typewriter } from 'react-simple-typewriter';

const NewsHeader = () => {
  return (
    <h1 className="text-[25px] sm:text-[40px] md:text-[48px] font-ibm-plex overflow-hidden">
      <span>Search </span>
      <Typewriter
        words={['News', 'Articles']}
        loop={true}
        cursor
        cursorStyle="|"
        typeSpeed={150}
        deleteSpeed={50}
        delaySpeed={1000}
      />
    </h1>
  );
};

export default NewsHeader;
