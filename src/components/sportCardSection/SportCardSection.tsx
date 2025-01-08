import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSports } from "../../redux/slice/sportSlice";
import { RootState, AppDispatch } from "../../redux/store";
import Card from "../card/Card";
import Loader from "../loader/Loader";
import { IMAGES } from "../../constants/images";

const SportCardSection: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { data, isLoading, isError } = useSelector(
    (state: RootState) => state.sport
  );
  const [visibleCount, setVisibleCount] = useState(6);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    dispatch(fetchSports());
  }, [dispatch]);

  console.log("Fetched sports data: ", data);

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
    return <p>No sports articles found.</p>;
  }
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[26px] lg:w-[1300px] w-full ">
        {data?.slice(0, visibleCount).map((sport) => (
          <Card
            key={sport.id}
            cardimg={
              sport.media &&
              sport.media.length > 0 &&
              sport.media[0]["media-metadata"]
                ? sport.media[0]["media-metadata"][0]?.url || IMAGES.NEWS_IMAGE
                : IMAGES.NEWS_IMAGE
            }
            title={sport?.title}
            description={sport?.description}
            author={sport?.league}
            time={sport?.published_date}
            readTime="3 min read"
            showLikeCount={false}
          />
        ))}
      </div>

      {data.length > 6 && (
        <div className="text-center mt-6">
          <button
            onClick={handleToggleView}
            className="px-6 py-2 b rounded border-[#1A73E8] border-[1px] text-[#1A73E8] "
          >
            {showAll ? "Show Less" : "View More"}
          </button>
        </div>
      )}
    </div>
  );
};

export default SportCardSection;
