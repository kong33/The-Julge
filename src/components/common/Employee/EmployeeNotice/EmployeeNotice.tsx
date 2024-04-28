// // import { useRouter } from 'next/router';
// import { useEffect, useState } from 'react';

// import { useGetApplicationListByNoticeId } from '@/apis/application/useApplicationService';
// import { EmployeeNotices } from '@/components/common/Table/Table.type';
// import EmployeeTable from '@/components/feature/Notice/EmployeeTable/EmployeeTable';
// import StatusButton from '@/components/feature/Notice/StatusButton/StatusButton';
// import UiTableStatusChip from '@/components/feature/Notice/StatusChip/StatusChip';

// function EmployerNotice() {
//   // const router = useRouter();
//   const [pageNum, setPageNum] = useState<number>(1);
//   const onPageChange = (page: number) => {
//     setPageNum(page);
//   };

//   // const { shopId, noticeId } = router.query;

//   const { data } = useGetApplicationListByNoticeId(
//     '63fcc375-5d0a-4ba4-ac5b-101b03973c74',
//     '4c7bdc76-2912-41e8-82d3-dc973e254d9b',
//     {
//       offset: pageNum - 1,
//       limit: 5
//     }
//   );

//   const [applicantList, setApplicantList] = useState<EmployeeNotices[]>();

//   useEffect(() => {
//     if (!data) {
//       return;
//     }

//     if (data && data.items) {
//       setApplicantList(
//         data.items.map((i) => {
//           const { item } = i;
//           return {
//             id: item?.user?.item.id as string,
//             name: item?.user?.item.name as string,
//             bio: item?.user?.item.bio as string,
//             phone: item?.user?.item.phone as string,
//             status:
//               item.status === 'pending' ? (
//                 <StatusButton />
//               ) : (
//                 // userId={item.user?.item.id as string
//                 <UiTableStatusChip status={item.status} />
//               )
//           };
//         })
//       );
//     }
//   }, [data]);

//   return (
//     <div>
//       <div>
//         <h2>신청 내역</h2>
//       </div>
//       <div>
//         {applicantList && (
//           <EmployeeTable
//             applicationList={applicantList}
//             currentPage={pageNum}
//             totalPages={Math.ceil((data?.count ?? 0) / 5)}
//             onPageChange={onPageChange}
//           />
//         )}
//       </div>
//     </div>
//   );
// }

// export default EmployerNotice;
