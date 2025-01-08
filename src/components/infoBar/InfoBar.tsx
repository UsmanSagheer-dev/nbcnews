function InfoBar({
  author,
  time,
  readTime,
}: {
  author: string;
  time: string;
  readTime: string;
}) {
  return (
    <div className="flex items-center text-gray-500 text-sm space-x-5 mt-3">
      <span className="whitespace-nowrap overflow-hidden text-ellipsis">{time}</span>
      <div className="flex space-x-2 overflow-hidden">
        <span className="whitespace-wrap overflow-hidden text-ellipsis">{author}</span>
        <span className="text-gray-300 ">|</span>
        <span className="whitespace-nowrap overflow-hidden text-ellipsis">{readTime}</span>
      </div>
    </div>
  );
}

export default InfoBar;
