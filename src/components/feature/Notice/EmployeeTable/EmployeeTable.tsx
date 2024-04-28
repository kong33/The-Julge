import Table from '@/components/common/Table/Table';
import { EmployeeNotices, EMPLOYEE_COLUMNS } from '@/components/common/Table/Table.type';

interface EmployeeTableProps {
  applicationList: EmployeeNotices[];
  currentPage: number;
  totalPages: number;
  // eslint-disable-next-line no-unused-vars
  onPageChange: (page: number) => void;
}

function EmployerTable({ applicationList, currentPage, totalPages, onPageChange }: EmployeeTableProps) {
  return (
    <Table
      data={applicationList}
      columns={EMPLOYEE_COLUMNS}
      currentPage={currentPage}
      totalPages={totalPages}
      onPageChange={onPageChange}
    />
  );
}

export default EmployerTable;
