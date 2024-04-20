import Image from 'next/image';

import caclTagText, { calcTagTextProps } from '@/utils/calcTagText';

import styles from './PostTag.module.scss';

type PostTagprops = {
  isCardItem?: boolean;
  isShowTag: calcTagTextProps;
  changeRate: undefined | number;
  closed: boolean;
};

export default function PostTag({ isCardItem, isShowTag, changeRate, closed }: PostTagprops) {
  const TagWrapperClasses = [
    styles.TagWrapper,
    closed ? styles.closed : '',
    !closed && isShowTag === 'red' ? styles.red : '',
    !closed && isShowTag === 'orange' ? styles.orange : '',
    !closed && isShowTag === undefined ? styles.undefined : '',
    isCardItem ? styles.isCardItem : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={TagWrapperClasses}>
      <span className={styles.TagText}>{caclTagText(isShowTag, changeRate)}</span>
      <div className={styles.imgContainer}>
        {changeRate !== undefined && (
          <Image src="/svgs/arrow-up.svg" alt="arrow-upper" width={20} height={20} className={styles.img} />
        )}
      </div>
    </div>
  );
}
