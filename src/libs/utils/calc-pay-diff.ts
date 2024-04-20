const CARD_TAGS = {
  Red: 'red',
  Orange: 'orange',
  Hide: 'hide',
} as const;

export type CardTag = (typeof CARD_TAGS)[keyof typeof CARD_TAGS];

function utilCalcPayDiff(currentPay: number, originalPay: number): CardTag {
  const payDiff = currentPay - originalPay;
  if (payDiff >= originalPay) {
    return 'red';
  }
  if (payDiff > 0) {
    return 'orange';
  }
  return 'hide';
}

export default { utilCalcPayDiff };
