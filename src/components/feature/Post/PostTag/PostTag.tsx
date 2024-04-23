import Image from 'next/image';

import styles from '@/components/feature/Post/PostTag/PostTag.module.scss';
import { PostTagprops } from '@/components/feature/Post/PostType';
import calcRate from '@/libs/utils/calcRate';
import calcTagColor from '@/libs/utils/calcTagColor';
import caclTagText from '@/utils/calcTagText';

export default function PostTag({ closed, hourlyPay, originalHourlyPay }: PostTagprops) {
  const changeRate = calcRate(hourlyPay, originalHourlyPay);
  const isShowTag = calcTagColor(hourlyPay, originalHourlyPay);

  const TagWrapperClasses = [
    styles.TagWrapper,
    closed ? styles.closed : '',
    !closed && isShowTag === 'red' ? styles.red : '',
    !closed && isShowTag === 'orange' ? styles.orange : '',
    !closed && isShowTag === undefined ? styles.undefined : ''
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
