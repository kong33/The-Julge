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
    '4490151c-5217-4157-b072-9c37b05bed47',
    '99996477-82db-4bda-aae1-4044f11d9a8b',
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
                <StatusButton
                  // shopId={item.shop?.item?.id as string}
                  // noticeId={item.notice?.item?.id as string}
                  userId={item.user?.item.id as string}
                />
              ) : (
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
