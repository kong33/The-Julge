export default function roundUpToNextHour(date: Date | string) {
  // 날짜 객체를 복사하여 원본을 변경하지 않도록 합니다.
  const newDate = new Date(date);

  // 분 단위를 가져옵니다.
  const currentMinute = newDate.getMinutes();

  // 분 단위가 0이 아니라면 다음 시간으로 올림 처리합니다.
  if (currentMinute > 0) {
    // 현재 시간에 1시간을 더하고 분, 초, 밀리초를 초기화합니다.
    newDate.setHours(newDate.getHours() + 1); // 한 시간 증가
    newDate.setMinutes(0); // 분을 0으로 설정
    newDate.setSeconds(0); // 초를 0으로 설정
    newDate.setMilliseconds(0); // 밀리초를 0으로 설정
  } else {
    // 분이 0이면 초와 밀리초를 0으로 설정하여 정각을 유지합니다.
    newDate.setSeconds(0);
    newDate.setMilliseconds(0);
  }

  return newDate; // 올림된 날짜 반환
}
