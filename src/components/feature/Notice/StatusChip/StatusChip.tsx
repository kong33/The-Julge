import styles from '@/components/feature/Notice/StatusChip/StatusChip.module.scss';

interface StatusChipProps {
  status: 'pending' | 'accepted' | 'rejected';
}

function StatusChip({ status }: StatusChipProps) {
  const message = {
    pending: '대기중',
    accepted: '승인완료',
    rejected: '거절'
  };

  return (
    <div>
      {status === 'pending' ? (
        <div className={styles.pending}>{message[status]}</div>
      ) : status === 'accepted' ? (
        <div className={styles.accepted}>{message[status]}</div>
      ) : (
        <div className={styles.rejected}>{message[status]}</div>
      )}
    </div>
  );
}

export default StatusChip;
