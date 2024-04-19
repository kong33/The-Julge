import React, { createContext, useContext, useRef, useState } from 'react';

import useOnClickOutside from '@/libs/utils/useOnClickOutside';

import Potal from './Potal';

type ModalProps = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
  toggle: () => void;
};

const ModalContext = createContext<ModalProps | undefined>(undefined);
const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) throw new Error('root로 감싸기');
  return context;
};

function ModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);
  const toggle = () => setIsOpen((prev) => !prev);

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <ModalContext.Provider value={{ isOpen, open, close, toggle }}>
      <div>{children}</div>
    </ModalContext.Provider>
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
    <Potal>
      <div ref={ref}>{children}</div>
    </Potal>
  ) : (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <></>
  );
}

const ModalGroup = {
  Root: ModalRoot,
  Trigger: ModalTrigger,
  Content: ModalContent,
};

export default ModalGroup;
