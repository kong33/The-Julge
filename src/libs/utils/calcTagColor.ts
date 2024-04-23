type calcTagColorProps = 'red' | 'orange' | undefined;

function calcTagColor(hourlyPay: number, originalHourlyPay: number): calcTagColorProps {
  const payDiff = hourlyPay - originalHourlyPay;
  const payDiffPercentage = (payDiff / originalHourlyPay) * 100;

  if (payDiffPercentage >= 50) {
    return 'red';
  }
  if (payDiff > 0) {
    return 'orange';
  }
  return undefined;
}

export default calcTagColor;
