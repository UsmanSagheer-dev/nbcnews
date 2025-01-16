import React from "react";
import Card from "../card/Card";
import Loader from "../loader/Loader";
import { IMAGES } from "../../constants/images";
import useArticles from "../../hooks/useArticles";

const CardSection: React.FC = () => {
  const {
    data,
    isLoading,
    isError,
    visibleCount,
    showAll,
    limitDescription,
    handleToggleView,
  } = useArticles();

  if (isLoading) return <Loader />;
  if (isError) return <p>Error: {isError}</p>;
  if (!data || !Array.isArray(data)) return <p>No articles found.</p>;

  return (
    <div className="max-w-[1366px] px-4 sm:px-9 py-4 flex flex-col items-center justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[26px] lg:w-[1300px] w-full">
        {data.slice(0, visibleCount).map((article) => (
          <Card
            key={article.id}
            cardimg={article.media[0]?.["media-metadata"][0]?.url || IMAGES.NEWS_IMAGE}
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
            className="px-6 py-2 border-[#C31815] border-[1px] text-[#C31815] rounded"
          >
            {showAll ? "Show Less" : "View More"}
          </button>
        </div>
      )}
    </div>
  );
};

export default CardSection;
