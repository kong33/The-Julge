// import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { useGetApplicationListByNoticeId } from '@/apis/application/useApplicationService';
import { EmployerNotices } from '@/components/common/Table/Table.type';
import EmployerTable from '@/components/feature/Notice/EmployerTable/EmployerTable';
import StatusButton from '@/components/feature/Notice/StatusButton/StatusButton';
import StatusChip from '@/components/feature/Notice/StatusChip/StatusChip';

function EmployerNotice() {
  // const router = useRouter();
  const [pageNum, setPageNum] = useState<number>(1);
  const onPageChange = (page: number) => {
    setPageNum(page);
  };

  // const { shopId, noticeId } = router.query;

  const { data } = useGetApplicationListByNoticeId(
    '1ca5bd34-2cc0-4ae3-b94e-c461d2e3e6f9',
    '9ce03c73-3218-4c2a-a130-223b0c9a1498',
    {
      offset: pageNum - 1,
      limit: 5
    }
  );

  console.log(data);
  const [applicantList, setApplicantList] = useState<EmployerNotices[]>();

  useEffect(() => {
    if (!data) {
      return;
    }

    if (data && data.items) {
      setApplicantList(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        data.items.map((i: any) => {
          const { item } = i;
          const { id: applicationId, user, status } = item;
          const { name, bio, phone } = user.item; // 지원자 id 여기에서 가져올 수 있음(id)
          return {
            id: applicationId,
            name,
            bio,
            phone,
            status:
              status === 'pending' ? (
                <StatusButton />
              ) : (
                // userId={item.user?.item.id as string
                <StatusChip status={status} />
              )
          };
        })
      );
    }
  }, [data]);

  return (
    <div>
      <div>
        <h2>신청자 목록</h2>
      </div>
      <div>
        {applicantList && (
          <EmployerTable
            applicationList={applicantList}
            currentPage={pageNum}
            totalPages={Math.ceil((data?.count ?? 0) / 5)}
            onPageChange={onPageChange}
          />
        )}
      </div>
    </div>
  );
}

export default EmployerNotice;
