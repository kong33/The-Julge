import Image from 'next/image';
import { useRouter } from 'next/router';

import styles from '@/components/common/Post.module.scss';
import PostTag from '@/components/common/PostTag';
import calcRate from '@/libs/utils/calcRate';
import calcTagColor from '@/libs/utils/calcTagColor';
import calcTimeWithWorkHours from '@/libs/utils/calcTimeWithWorkHours';

type PostProps = {
  name: string;
  duration: string;
  workhour: number;
  address: string;
  originalHourlyPay: number;
  hourlyPay: number;
  imageUrl: string;
  closed: boolean;
  shopId: string;
  noticeId: string;
};

export default function Post({
  name,
  duration,
  workhour,
  address,
  originalHourlyPay,
  hourlyPay,
  imageUrl,
  closed,
  shopId,
  noticeId
}: PostProps) {
  const formatDuration = calcTimeWithWorkHours(duration, workhour);
  const formatTagColor = calcTagColor(hourlyPay, originalHourlyPay);
  const formatRate = calcRate(hourlyPay, originalHourlyPay);

  const router = useRouter();

  const handleClickToDetailPage = () => {
    router.push(`/detail/${shopId}/${noticeId}`);
  };

  return (
    <div
      role="presentation"
      className={closed ? `${styles.cardWrapper} ${styles.closed}` : styles.cardWrapper}
      onClick={handleClickToDetailPage}
    >
      <div className={styles.cardHeader}>
        <Image className={styles.img} src={imageUrl} alt={name} width={280} height={160} />
        {closed && (
          <div className={styles.closedLayer}>
            <span className={styles.closedText}>지난 공고</span>
          </div>
        )}
      </div>
      <section className={styles.cardSection}>
        <div className={styles.sectionContent}>
          <div className={closed ? `${styles.title} ${styles.closed}` : styles.title}>{name}</div>
          <div className={styles.sectionDuration}>
            <Image
              className={styles.img}
              src={closed ? '/svgs/clock-disabled.svg' : '/svgs/clock.svg'}
              alt="clock"
              width={17}
              height={17}
            />
            <p className={closed ? `${styles.duration} ${styles.closed}` : styles.duration}>{formatDuration}</p>
          </div>
          <div className={styles.sectionAddress}>
            <Image
              className={styles.img}
              src={closed ? '/svgs/location-disabled.svg' : '/svgs/location.svg'}
              alt="location"
              width={17}
              height={17}
            />
            <p className={closed ? `${styles.address} ${styles.closed}` : styles.address}>{address}</p>
          </div>
        </div>
        <div className={styles.sectionHourlyPay}>
          <p className={closed ? `${styles.hourlyPay} ${styles.closed}` : styles.hourlyPay}>
            {`${hourlyPay.toLocaleString()}원`}
          </p>
          <PostTag isCardItem isShowTag={formatTagColor} changeRate={formatRate} closed={closed} />
        </div>
      </section>
    </div>
  );
}
