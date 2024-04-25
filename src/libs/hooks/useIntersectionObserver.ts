import { useEffect, useRef, useState } from 'react';

export default function useIntersectionObserver(callback: () => void) {
  const [observationTarget, setObservationTarget] = useState(null);

  const observer = useRef(
    new IntersectionObserver(
      ([entry]) => {
        // entry가 뷰포트 안에 들어오면(isIntersecting = true) callback 함수 호출
        if (entry.isIntersecting) {
          callback();
        }
      },
      { threshold: 1 } // entry가 뷰포트 안에 1개 들어오면 작동
    )
  );

  useEffect(() => {
    // observationTarget이 있을 때 추적
    // observationTarget이 바뀔 때마다 갱신
    const currentTarget = observationTarget;
    const currentObserver = observer.current;

    if (currentTarget) {
      currentObserver.observe(currentTarget);
    }

    return () => {
      if (currentTarget) {
        currentObserver.unobserve(currentTarget);
      }
    };
  }, [observationTarget]);

  return setObservationTarget;
}
