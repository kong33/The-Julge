import React from 'react';

export type childrenProps = {
  children: React.ReactNode;
};

export type selectProps = {
  children: React.ReactNode;
  buttonClick: () => void;
};

export type ModalGroupProps = {
  isOpen: boolean;
  close: () => void;
  open: () => void;
  toggle: () => void;
};

export type SelectModalProps = {
  children: React.ReactNode;
  buttonClick: () => void;
};
