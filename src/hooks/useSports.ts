import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSports } from "../redux/slice/sportSlice";
import { RootState, AppDispatch } from "../redux/store";

const useSports = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { data, isLoading, isError } = useSelector(
    (state: RootState) => state.sport
  );

  const [visibleCount, setVisibleCount] = useState(6);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    dispatch(fetchSports());
  }, [dispatch]);

  const handleToggleView = () => {
    setVisibleCount(showAll ? 6 : data?.length || 0);
    setShowAll(!showAll);
  };

  return {
    data,
    isLoading,
    isError,
    visibleCount,
    showAll,
    handleToggleView,
  };
};

export default useSports;
