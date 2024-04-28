// // import Image from 'next/image';
// import Image from 'next/image';

// import { useGetNotice } from '@/apis/notice/useNoticeService';
// import Button from '@/components/common/Button';
// import styles from '@/components/feature/CommonShopDescription/ShopDescriptionArticle.module.scss';
// import calcFormatDuratoin from '@/libs/utils/calcFormatDuratoin';
// // import shopImag from '@/public/images/defualt-shop.png';
// import { ReactComponent as LocationSvg } from '@/public/svgs/clock.svg';

// // ShopArticle
// export function ShopDescriptionArticle() {
//   const { data } = useGetNotice('4490151c-5217-4157-b072-9c37b05bed47', '99996477-82db-4bda-aae1-4044f11d9a8b');

//   const {
//     hourlyPay,
//     startsAt,
//     workhour,
//     description,
//     closed,
//     shop: { item: shopItem }
//   } = data;

//   const { name, address1, address2, description: shopDescription, imageUrl, originalHourlyPay } = shopItem;
//   const workDuration = calcFormatDuratoin(startsAt, workhour);

//   const handleEditNotice = () => {
//     console.log('공고편집');
//   };

//   return (
//     <>
//       <article className={styles.articleNotice}>
//         <div className={styles.noticeImg}>
//           <Image src={imageUrl} alt="shop" width={2156} height={1232} style={{ objectFit: 'cover' }} priority />
//         </div>
//         <div className={styles.noticeContainer}>
//           <div className={styles.noticeDetailContainer}>
//             <div className={styles.noticeTitleContainer}>
//               <p className={styles.noticeCategory}>시급</p>
//               <div className={styles.noticeNameContainer}>
//                 <p className={styles.noticeName}>{name}</p>
//                 <PostTagNotice closed={closed} hourlyPay={hourlyPay} originalHourlyPay={originalHourlyPay} />
//               </div>
//             </div>
//             <div className={styles.noticeInfoContainer}>
//               <ClockSvg className={styles.noticeInfoIcon} />
//               <span className={styles.noticeInfoText}>{workDuration}</span>
//             </div>
//             <div className={styles.noticeInfoContainer}>
//               <LocationSvg className={styles.noticeInfoIcon} />
//               <span className={styles.noticeInfoText}>{`${address1} ${address2}`}</span>
//             </div>
//             <p className={styles.noticeDescription}>{shopDescription}</p>
//           </div>
//           <div className={styles.noticeButtonContainer}>
//             <Button className={styles.noticeButton} size="medium" active onClick={handleEditNotice}>
//               공고편집하기
//             </Button>
//           </div>
//         </div>
//       </article>
//       <div className={styles.noticeCommentContainer}>
//         <p className={styles.noticeCommentTitle}>공고 설명</p>
//         <p className={styles.noticeComment}>{description}</p>
//       </div>
//     </>
//   );
// }

// export default ShopDescriptionArticle;
