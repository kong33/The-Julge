import Image from 'next/image';

import styles from './Post.module.scss';
import PostTag from './PostTag';

const CARD_TAGS = {
  Red: 'red',
  Orange: 'orange',
  Hide: 'hide',
} as const;

type CardTag = (typeof CARD_TAGS)[keyof typeof CARD_TAGS];

type PostProps = {
  name: string;
  duration: string;
  workhour: number;
  address: string;
  hourlyPay: number;
  imageUrl: string;
  closed: boolean;
  changeRate: undefined | number;
  isShowTag: CardTag;
  onClickToDetailPage: () => void;
};

export default function Post({
  name,
  duration,
  workhour,
  address,
  hourlyPay,
  imageUrl,
  closed,
  changeRate,
  isShowTag,
  onClickToDetailPage,
}: PostProps) {
  return (
    <div
      role="presentation"
      className={closed ? `${styles.cardWrapper} ${styles.closed}` : styles.cardWrapper}
      onClick={onClickToDetailPage}
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
            <p className={closed ? `${styles.duration} ${styles.closed}` : styles.duration}>
              {`${duration} (${workhour}시간)`}
            </p>
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
          <PostTag isCardItem isShowChip={isShowTag} changeRate={changeRate} closed={closed} />
        </div>
      </section>
    </div>
  );
}
