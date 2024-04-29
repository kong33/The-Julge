import Table from '@/components/common/Table/Table';
import { EmployerNotices, EMPLOYER_COLUMNS } from '@/components/common/Table/Table.type';

interface EmployerTableProps {
  applicationList: EmployerNotices[];
  currentPage: number;
  totalPages: number;
  // eslint-disable-next-line no-unused-vars
  onPageChange: (page: number) => void;
}

function EmployerTable({ applicationList, currentPage, totalPages, onPageChange }: EmployerTableProps) {
  return (
    <Table
      data={applicationList}
      columns={EMPLOYER_COLUMNS}
      currentPage={currentPage}
      totalPages={totalPages}
      onPageChange={onPageChange}
    />
  );
}

export default EmployerTable;
