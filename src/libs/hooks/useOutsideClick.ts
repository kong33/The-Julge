import { useRef, useEffect, useState } from 'react';

export default function useOutsideClick() {
  const [isOutsideClicked, setIsOutsideClicked] = useState(false);

  const filterRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const outSideClick = (e: MouseEvent) => {
      const { target } = e;
      if (filterRef.current && !filterRef.current.contains(target as Node)) {
        setIsOutsideClicked(true);
      } else {
        setIsOutsideClicked(false);
      }
    };
    document.addEventListener('mousedown', outSideClick);
    return () => {
      document.removeEventListener('mousedown', outSideClick);
    };
  }, []);

  return { isOutsideClicked, setIsOutsideClicked, filterRef };
}
