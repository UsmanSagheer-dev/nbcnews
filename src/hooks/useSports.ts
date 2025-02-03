import { useEffect, useState } from "react";
import { useAppDispatch } from "../redux/store";  // Import custom dispatch hook
import { useAppSelector } from "../redux/store";  // Import custom selector hook
import { fetchSports } from "../redux/slice/sportSlice";

const useSports = () => {
  const dispatch = useAppDispatch();  // Use custom dispatch hook
  const { data, isLoading, isError } = useAppSelector(
    (state) => state.sport  // Use custom selector hook
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
