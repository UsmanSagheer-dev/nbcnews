import { useEffect, useState } from "react";
import { useAppDispatch } from "../redux/store"; 
import { useAppSelector } from "../redux/store"; 
import { fetchArticles } from "../redux/slice/articleSlice";
import { RootState } from "../redux/store";

const useArticles = () => {
  const dispatch = useAppDispatch(); 
  const { data, isLoading, isError } = useAppSelector(
    (state: RootState) => state.article
  );
  const [visibleCount, setVisibleCount] = useState(6);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    dispatch(fetchArticles());
  }, [dispatch]);

  const limitDescription = (text: string, wordLimit: number = 30) => {
    const words = text.split(" ");
    return words.length > wordLimit
      ? words.slice(0, wordLimit).join(" ") + "..."
      : text;
  };

  const handleToggleView = () => {
    setVisibleCount(showAll ? 6 : data?.length ?? 0);
    setShowAll(!showAll);
  };

  return {
    data,
    isLoading,
    isError,
    visibleCount,
    showAll,
    limitDescription,
    handleToggleView,
  };
};

export default useArticles;
