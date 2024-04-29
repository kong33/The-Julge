import React from 'react';

export interface NoticesColumn {
  id: string;
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
  status: React.ReactNode;
}

export const EMPLOYEE_COLUMNS: NoticesColumn[] = [
  { id: 'store', label: '가게' },
  { id: 'date', label: '일자' },
  { id: 'hourlyPay', label: '시급' },
  { id: 'status', label: '상태' }
];

export const EMPLOYER_COLUMNS: NoticesColumn[] = [
  { id: 'name', label: '신청자' },
  { id: 'bio', label: '소개' },
  { id: 'phone', label: '전화번호' },
  { id: 'status', label: '상태' }
];
