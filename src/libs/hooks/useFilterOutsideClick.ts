import { useRef, useEffect, useState } from 'react';

export default function useFilterOutsideClick({ filterShow }: { filterShow: boolean }) {
  const [isFilterShow, setIsFilterShow] = useState(filterShow);
  const filterRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const outSideClick = (e: MouseEvent) => {
      const { target } = e;
      if (isFilterShow && filterRef.current && !filterRef.current.contains(target as Node)) {
        setIsFilterShow(false);
      }
    };
    document.addEventListener('mousedown', outSideClick);
  }, [isFilterShow]);

  return { isFilterShow, setIsFilterShow, filterRef };
}
