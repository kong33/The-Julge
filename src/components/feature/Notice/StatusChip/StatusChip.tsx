import classnames from 'classnames/bind';

import styles from '@/components/feature/Notice/StatusChip/StatusChip.module.scss';

const cx = classnames.bind(styles);

interface UiTableStatusChipProps {
  status: 'pending' | 'accepted' | 'rejected';
}
function TableStatusChip({ status }: UiTableStatusChipProps) {
  const MESSAGE = {
    pending: '대기중',
    accepted: '승인완료',
    rejected: '거절'
  };

  return (
    <div
      className={cx('chip', {
        pending: status === 'pending',
        accepted: status === 'accepted',
        rejected: status === 'rejected'
      })}
    >
      {MESSAGE[status]}
    </div>
  );
}

export default TableStatusChip;
