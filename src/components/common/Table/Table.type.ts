export interface NoticesColumn<T> {
  id: keyof T;
  label: string;
}

export interface EmployerNotices {
  id: string;
  name: string;
  bio: string;
  phone: string;
  status: 'pending' | 'accepted' | 'rejected';
}

export interface EmployeeNotices {
  id: string;
  store: string;
  date: string;
  hourlyPay: number;
  status: 'pending | accepted | rejected | canceled';
}

export const EMPLOYEE_COLUMNS: NoticesColumn<string>[] = [
  { id: 'store', label: '가게' },
  { id: 'date', label: '일자' },
  { id: 'hourlyPay', label: '시급' },
  { id: 'status', label: '상태' }
];

export const EMPLOYER_COLUMNS: NoticesColumn<EmployerNotices>[] = [
  { id: 'name', label: '신청자' },
  { id: 'bio', label: '소개' },
  { id: 'phone', label: '전화번호' },
  { id: 'status', label: '상태' }
];
