const CARD_TAGS = {
  Red: 'red',
  Orange: 'orange',
  Hide: 'hide',
} as const;

export type CardTag = (typeof CARD_TAGS)[keyof typeof CARD_TAGS];

function TagText(chip: CardTag, rate: undefined | number): string | undefined {
  if (chip === 'red' || chip === 'orange') {
    return `기존 시급보다 ${rate?.toLocaleString()}% 증가`;
  }
}

export default TagText;
