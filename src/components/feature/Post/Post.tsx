import Image from 'next/image';
import { useRouter } from 'next/router';

import styles from '@/components/feature/Post/Post.module.scss';
import PostTag from '@/components/feature/Post/PostTag/PostTag';
import { PostProps } from '@/components/feature/Post/PostType';
import calcFormatDuratoin from '@/libs/utils/calcFormatDuratoin';

export default function Post({
  id,
  name,
  startedAt,
  workhour,
  address,
  hourlyPay,
  originalHourlyPay,
  imageUrl,
  closed,
  shopId
}: PostProps) {
  const router = useRouter();
  const duration = calcFormatDuratoin(startedAt, workhour);

  const handleClickToDetailPage = () => {
    router.push(`/notice/${shopId}/${id}`);
  };

  const now = new Date().getTime();
  const startsAtDate = new Date(startedAt).getTime();

  const isClosed = closed || now < startsAtDate;

  return (
    <div
      role="presentation"
      className={closed ? `${styles.cardWrapper} ${styles.closed}` : styles.cardWrapper}
      onClick={handleClickToDetailPage}
    >
      <div className={styles.cardHeader}>
        <Image
          className={styles.img}
          src={imageUrl}
          alt={name}
          width={1120}
          height={640}
          style={{ objectFit: 'cover' }}
        />
        {isClosed && (
          <div className={styles.closedLayer}>
            <span className={styles.closedText}>지난 공고</span>
          </div>
        )}
      </div>
      <section className={styles.cardSection}>
        <div className={styles.sectionContent}>
          <div className={isClosed ? `${styles.title} ${styles.closed}` : styles.title}>{name}</div>
          <div className={styles.sectionDuration}>
            <Image
              className={styles.img}
              src={isClosed ? '/svgs/clock-disabled.svg' : '/svgs/clock.svg'}
              alt="clock"
              width={17}
              height={17}
            />
            <p className={isClosed ? `${styles.duration} ${styles.closed}` : styles.duration}>{duration}</p>
          </div>
          <div className={styles.sectionAddress}>
            <Image
              className={styles.img}
              src={isClosed ? '/svgs/location-disabled.svg' : '/svgs/location.svg'}
              alt="location"
              width={17}
              height={17}
            />
            <p className={isClosed ? `${styles.address} ${styles.closed}` : styles.address}>{address}</p>
          </div>
        </div>
        <div className={styles.sectionHourlyPay}>
          <p className={isClosed ? `${styles.hourlyPay} ${styles.closed}` : styles.hourlyPay}>
            {`${hourlyPay.toLocaleString()}원`}
          </p>
          <PostTag closed={isClosed} hourlyPay={hourlyPay} originalHourlyPay={originalHourlyPay} />
        </div>
      </section>
    </div>
  );
}
