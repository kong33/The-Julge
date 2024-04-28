import { useEffect, useRef } from 'react';

interface useIntersectionObserverProps {
  callbackIn?: () => void;
  callbackOut?: () => void;
}

// callbackIn: entry.isIntersecting === true 일 때 실행
// callbackOut: entry.isIntersecting === false 일 때 실행
export default function useIntersectionObserver({ callbackIn, callbackOut }: useIntersectionObserverProps) {
  const observationTargetRef = useRef<HTMLElement | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // typeof window !== 'undefined' => 서버가 아닌 클라이언트 환경이면 true
    // !observerRef.current => IntersectionObserver 인스턴스가 아직 생성되지 않은 상태면 true
    if (typeof window !== 'undefined' && !observerRef.current) {
      observerRef.current = new IntersectionObserver(([entry]) => {
        // entry가 뷰포트 안에 있으면 callback 함수 호출
        if (entry.isIntersecting) {
          callbackIn?.();
        }
        // entry가 뷰포트 안에 없으면 callback 함수 호출
        if (!entry.isIntersecting) {
          callbackOut?.();
        }
      });
    }

    const currentTarget = observationTargetRef.current;
    const currentObserver = observerRef.current;

    if (currentTarget && currentObserver) {
      currentObserver.observe(currentTarget);
    }

    return () => {
      if (currentTarget && currentObserver) {
        currentObserver.unobserve(currentTarget);
      }
    };
  }, [callbackIn, callbackOut]);

  // observationTarget의 current를 직접 수정할 수 있는 함수 반환
  return (node: HTMLElement | null) => {
    observationTargetRef.current = node;
  };
}
