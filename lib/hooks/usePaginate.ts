import { useMemo, useState } from 'react';

export const usePaginate = (length: number, perPage: number, initPage: number) => {
  const [pageIndex, setPageIndex] = useState<number>(initPage);
  
  const pageNum = useMemo(() => {
    if (perPage <= 0) {
      console.error('perPage should be higher than 0');
      return;
    }

    return Math.ceil(length / perPage);
  }, [length, perPage]);

  const isShowMore = useMemo(() => {
    let showMore = true;
    if (pageNum === pageIndex) showMore = false;
    return showMore;
  }, [pageNum, pageIndex]);

  const goToNext = () => {
    setPageIndex((pageIndex) => pageIndex + 1);
  };

  const filter = (index: number) => {
    if (index >= 0 && index < pageIndex * perPage) return true;
    else return false;
  };

  return { filter, goToNext, isShowMore };
};
