import Image from 'next/image';

import styles from './PostCardTag.module.scss';

const CARD_CHIPS = {
  Red: 'red',
  Orange: 'orange',
  Hide: 'hide',
} as const;
export type CardChips = (typeof CARD_CHIPS)[keyof typeof CARD_CHIPS];

const chipText = (chip: CardChips, rate: undefined | number): string => {
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

export default function PostCardTag({ isCardItem, isShowChip, changeRate, closed }: UiNoticeCardChipProps) {
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
      <span className={chipTextClasses}>{chipText(isShowChip, changeRate)}</span>
      <div className={styles.imgContainer}>
        <Image src="/svgs/arrow-up.svg" alt="arrow-upper" width={20} height={20} className={styles.img} />
      </div>
    </div>
  );
}
