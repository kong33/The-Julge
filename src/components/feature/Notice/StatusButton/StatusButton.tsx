import styles from '@/components/feature/Notice/StatusButton/StatusButton.module.scss';

function CheckStatusButton() {
  return (
    <div>
      <div className={styles.CheckStatusButtonContainer}>
        <button type="button" className={styles.approve}>
          승인하기
        </button>
        <button type="button" className={styles.reject}>
          거절하기
        </button>
      </div>
    </div>
  );
}

export default CheckStatusButton;
