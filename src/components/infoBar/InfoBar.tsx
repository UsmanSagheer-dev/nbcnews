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
      <span>{time}</span>
      <div className="flex space-x-2">
        <span>By {author}</span>
        <span className="text-gray-300">|</span>
        <span>{readTime}</span>
      </div>
    </div>
  );
}

export default InfoBar;
