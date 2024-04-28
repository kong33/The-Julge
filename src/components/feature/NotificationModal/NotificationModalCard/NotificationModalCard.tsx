import classNames from 'classnames/bind';
import Link from 'next/link';

import styles from '@/components/feature/NotificationModal/NotificationModalCard/NotificationModal.module.scss';
import calculateMinutesAgo from '@/libs/utils/calculateMinutesAgo';
import calculateWorkhour from '@/libs/utils/calculateWorkhour';

type dataProps = {
  shop: string; // shop - name
  result: 'accepted' | 'rejected'; // item - result
  createdAt: string; // createdAt
  startsAt: string; // notice - startsAt
  workhour: number; // notice - workhour
};
const resultComment = {
  accepted: '승인',
  rejected: '거절'
};

export default function NotificationModalCard(data: dataProps) {
  const { shop, result, createdAt, startsAt, workhour } = data;
  const calculatedTime = calculateMinutesAgo(createdAt);

  const cn = classNames.bind(styles);
  const elipseCN = cn(result, 'elipse');
  const { formattedDate, fromToHour } = calculateWorkhour(startsAt, workhour);

  return (
    <Link href="/">
      <article className={cn('container')}>
        <div className={elipseCN} />
        <p>
          {`${shop} (${formattedDate} ${fromToHour}) 공고 지원이 `}
          <span className={cn(`${result}Comment`)}>{resultComment[result]}</span>되었어요.
        </p>
        <p>{calculatedTime}</p>
      </article>
    </Link>
  );
}
