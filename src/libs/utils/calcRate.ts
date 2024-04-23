/**
 * 계산된 급여 변동률을 백분율로 반환
 *
 * @param {number} hourlyPay - 현재 급여.
 * @param {number} originalHourlyPay - 원래 급여.
 * @example
 * // 원래 급여가 20,000원이고 현재 급여가 22,000원인 경우:
 * calcRate(22000, 20000); // 반환값: 10
 *
 * // 원래 급여가 25,000원이고 현재 급여가 22,000원인 경우:
 * calcRate(22000, 25000); // 반환값: undefined
 */

function calcRate(hourlyPay: number, originalHourlyPay: number): number | undefined {
  if (originalHourlyPay >= hourlyPay) {
    return undefined;
  }
  return Math.floor(((hourlyPay - originalHourlyPay) / originalHourlyPay) * 100);
}

export default calcRate;
