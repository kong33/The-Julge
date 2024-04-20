function utilCalcChangeRate(currentPay: number, originalPay: number): number | null {
  if (originalPay >= currentPay) {
    return null;
  }
  return Math.floor(((currentPay - originalPay) / originalPay) * 100);
}

export default { utilCalcChangeRate };
