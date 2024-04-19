import Image from 'next/image';

import styles from './Post.module.scss';
import PostCardTag from './PostCardTag';

const CARD_CHIPS = {
  Red: 'red',
  Orange: 'orange',
  Hide: 'hide',
} as const;

type CardTag = (typeof CARD_CHIPS)[keyof typeof CARD_CHIPS];

type UiNoticeCardItemProps = {
  name: string;
  duration: string;
  workhour: number;
  address: string;
  payment: string;
  imageUrl: string;
  closed: boolean;
  changeRate: undefined | number;
  isShowTag: CardTag;
  onClickToDetail: () => void;
};

export default function Post({
  name,
  duration,
  workhour,
  address,
  payment,
  imageUrl,
  closed,
  changeRate,
  isShowTag,
  onClickToDetail,
}: UiNoticeCardItemProps) {
  return (
    <div
      role="presentation"
      className={closed ? `${styles.cardWrapper} ${styles.closed}` : styles.cardWrapper}
      onClick={onClickToDetail}
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
        <div className={styles.sectionPayment}>
          <p className={closed ? `${styles.pay} ${styles.closed}` : styles.pay}> {`${payment}원`}</p>
          <PostCardTag isCardItem isShowChip={isShowTag} changeRate={changeRate} closed={closed} />
        </div>
      </section>
    </div>
  );
}
