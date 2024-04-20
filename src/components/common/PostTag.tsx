import Image from 'next/image';

import styles from './PostTag.module.scss';

const CARD_TAGS = {
  Red: 'red',
  Orange: 'orange',
  Hide: 'hide',
} as const;

type CardChips = (typeof CARD_TAGS)[keyof typeof CARD_TAGS];

const TagText = (chip: CardChips, rate: undefined | number): string => {
  if (chip === 'red' || chip === 'orange') {
    return `기존 시급보다 ${rate?.toLocaleString()}%`;
  }
  return '';
};

export interface UiNoticeCardChipProps {
  isCardItem?: boolean;
  isShowChip: CardChips;
  changeRate: undefined | number;
  closed: boolean;
}

export default function PostTag({ isCardItem, isShowChip, changeRate, closed }: UiNoticeCardChipProps) {
  let changeRateFlag = false;
  if (changeRate && changeRate > 999) {
    changeRateFlag = true;
  }

  const chipWrapperClasses = [
    styles.chipWrapper,
    closed ? styles.closed : '',
    !closed && isShowChip === 'red' ? styles.red : '',
    !closed && isShowChip === 'orange' ? styles.orange : '',
    isCardItem ? styles.isCardItem : '',
  ]
    .filter(Boolean)
    .join(' ');

  const chipTextClasses = [styles.chipText, changeRateFlag ? styles.changeRateFlag : ''].filter(Boolean).join(' ');

  return (
    <div className={chipWrapperClasses}>
      <span className={chipTextClasses}>{TagText(isShowChip, changeRate)}</span>
      <div className={styles.imgContainer}>
        <Image src="/svgs/arrow-up.svg" alt="arrow-upper" width={20} height={20} className={styles.img} />
      </div>
    </div>
  );
}
