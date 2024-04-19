import React, { createContext, useContext, useRef, useState } from 'react';

import useOnClickOutside from '@/libs/hooks/useOnClickOutside';

import Portal from './Portal';

type ModalProps = {
  isOpen: boolean;
  close: () => void;
  toggle: () => void;
};

const ModalContext = createContext<ModalProps | undefined>(undefined);
export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) throw new Error('root로 감싸기');
  return context;
};

function ModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const close = () => setIsOpen(false);
  const toggle = () => setIsOpen((prev) => !prev);

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <ModalContext.Provider value={{ isOpen, close, toggle }}>{children}</ModalContext.Provider>
  );
}

function ModalRoot({ children }: { children: React.ReactNode }) {
  return <ModalProvider>{children}</ModalProvider>;
}

function ModalTrigger({ children }: { children: React.ReactNode }) {
  const { toggle } = useModal();
  return (
    <button type="button" onClick={toggle}>
      {children}
    </button>
  );
}

function ModalContent({ children }: { children: React.ReactNode }) {
  const { isOpen, close } = useModal();
  const ref = useRef<HTMLDivElement>(null);

  useOnClickOutside(ref, () => close());
  return isOpen ? (
    <Portal>
      <div ref={ref}>{children}</div>
    </Portal>
  ) : (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <></>
  );
}

/**
 * Modal 컴포넌트
 * @param Root 모달 선언; root
 * @param Trigger 모달 효과가 필요한 태그 (버튼); ex) 회원가입 버튼 -> 비밀번호 일치하지 않을때 모달 생성
 * @param Content 모달;
 */
const ModalGroup = {
  Root: ModalRoot,
  Trigger: ModalTrigger,
  Content: ModalContent,
};

export default ModalGroup;
