import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchArticles } from "../../redux/slice/articleSlice";
import { RootState, AppDispatch } from "../../redux/store";
import Card from "../card/Card";
import Loader from "../loader/Loader";
import { IMAGES } from "../../constants/images";
const CardSection: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { data, isLoading, isError } = useSelector(
    (state: RootState) => state.article
  );
  const [visibleCount, setVisibleCount] = useState(6);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    dispatch(fetchArticles());
  }, [dispatch]);

  console.log("Fetched data: ", data);

  if (isLoading) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  if (isError) {
    return <p>Error: {isError}</p>;
  }

  if (!data || !Array.isArray(data)) {
    return <p>No articles found.</p>;
  }

  // Function to limit description to 30 words
  const limitDescription = (text: string, wordLimit: number = 30) => {
    const words = text.split(" ");
    return words.length > wordLimit
      ? words.slice(0, wordLimit).join(" ") + "..."
      : text;
  };

  const handleToggleView = () => {
    if (showAll) {
      setVisibleCount(6);
    } else {
      setVisibleCount(data.length);
    }
    setShowAll(!showAll);
  };

  return (
    <div className="max-w-[1366px] px-4 sm:px-9 py-4 flex flex-col items-center justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-[26px] lg:w-[1300px] w-full ">
        {data?.slice(0, visibleCount).map((article) => (
          <Card
            key={article.id}
            cardimg={
              article.media[0]?.["media-metadata"][0]?.url || IMAGES.NEWS_IMAGE
            }
            title={article.title}
            description={limitDescription(article.abstract)}
            author={article.byline}
            time={article.published_date}
            readTime="5 min read"
            showLikeCount={true}
          />
        ))}
      </div>

      {data.length > 6 && (
        <div className="text-center mt-6">
          <button
            onClick={handleToggleView}
            className="px-6 py-2 b rounded border-[#C31815] border-[1px] text-[#C31815] "
          >
            {showAll ? "Show Less" : "View More"}
          </button>
        </div>
      )}
    </div>
  );
};

export default CardSection;
