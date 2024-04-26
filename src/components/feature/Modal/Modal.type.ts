import React from 'react';

export type defaultProps = {
  children: React.ReactNode;
  onClick?: () => void;
};

export type triggerProps = {
  children: React.ReactNode;
  onClick?: () => void;
  disableToggle?: boolean;
};

export type selectProps = {
  children: React.ReactNode;
  buttonClick: () => void;
};

export type ModalGroupProps = {
  isOpen: boolean;
  close: () => void;
  toggle: () => void;
};

export type SelectModalProps = {
  children: React.ReactNode;
  buttonClick: () => void;
};
