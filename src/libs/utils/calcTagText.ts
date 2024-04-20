/**
 * 주어진 태그 상태와 변경률에 따라 적절한 텍스트 메시지를 반환
 *
 * @param {number | undefined} rate - 급여 변동률. 변동이 없는 경우 undefined.
 * @returns {string | undefined} - 태그 상태와 변경률에 따라 다른 메시지를 반환합니다.
 *                                'red' 또는 'orange' 상태에서는 변동률을 포함한 메시지를,
 *                                변동률이 없거나 태그 상태가 'hide'일 경우 undefined를 반환합니다.
 *
 * @example
 * calcTagText('red', 20); // "기존 시급보다 20%"
 * calcTagText('orange', 5); // "기존 시급보다 5%"
 * calcTagText('red', undefined); // "변동사항이 없어요"
 */

export type calcTagTextProps = 'red' | 'orange' | undefined;

function calcTagText(Tag: calcTagTextProps, rate: undefined | number): string | undefined {
  if (Tag === 'red' || Tag === 'orange') {
    return `기존 시급보다 ${rate?.toLocaleString()}%`;
  }
  return undefined;
}

export default calcTagText;
