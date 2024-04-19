import React from 'react';

type ErrorModalProps = {
  errorMessage: string;
};

function ErrorModal({ errorMessage }: ErrorModalProps) {
  return <div>{errorMessage}</div>;
}

export default ErrorModal;
