import styles from '@/components/common/Table/NoApplicantList.module.scss';

function NoApplicantList() {
  return (
    <div className={styles.noTableContainer}>
      <span>아직 신청 내역이 없어요.</span>
    </div>
  );
}

export default NoApplicantList;
