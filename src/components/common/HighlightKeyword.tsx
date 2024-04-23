import React from 'react';

type HighlightKeywordProps = {
  text: string;
  keyword?: string;
  className?: string;
};

function HighlightKeyword({ text, keyword, className }: HighlightKeywordProps) {
  if (!keyword) return <span>{text}</span>;

  const regex = new RegExp(`(${keyword})`, 'gi');
  const parts = text.split(regex);

  return (
    <>
      {parts.map((part, index) => {
        const key = `${part}-${index}`;
        return part.toLowerCase() === keyword.toLowerCase() ? (
          <span key={key} className={className}>
            {part}
          </span>
        ) : (
          <span key={key}>{part}</span>
        );
      })}
    </>
  );
}

export default HighlightKeyword;
