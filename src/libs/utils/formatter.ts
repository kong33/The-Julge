// 숫자에 콤마를 추가하는 함수
// eslint-disable-next-line import/prefer-default-export
export const formatNumber = (value: string) => {
  // 숫자 이외의 문자 제거, 선행하는 0 제거, 단 숫자가 0이거나 비어 있지 않은 경우를 제외
  const cleanNum = value.replace(/\D/g, '').replace(/^0+/, '') || '0';
  // 세 자리마다 콤마를 추가
  return cleanNum.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};
