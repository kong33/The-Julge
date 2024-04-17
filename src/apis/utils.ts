// res에서 data를 추출해서 반환하는 함수
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function selectData<T>(res: any) {
  if (!res?.data) return res;
  const { data: resData, ...rest } = res;
  const data: T = resData?.data;
  return { data, ...rest };
}
