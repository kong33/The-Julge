import { useState } from 'react';

import { usePutApplication } from '@/apis/application/useApplicationService';
import Modal from '@/components/feature/Modal/Modal';
import ModalGroup from '@/components/feature/Modal/ModalGroup';
import styles from '@/components/feature/Notice/StatusButton/StatusButton.module.scss';

function CheckStatusButton({ userId }: { userId: string }) {
  const [isApproveModal, setApproveIsModal] = useState(false);
  const [isRejectModal, setIsRejectModal] = useState<boolean>(false);
  const { mutate: approveApplication } = usePutApplication(
    '4490151c-5217-4157-b072-9c37b05bed47',
    '99996477-82db-4bda-aae1-4044f11d9a8b',
    userId,
    { status: 'accepted' }
  );
  const { mutate: rejectApplication } = usePutApplication(
    '4490151c-5217-4157-b072-9c37b05bed47',
    '99996477-82db-4bda-aae1-4044f11d9a8b',
    userId,
    { status: 'rejected' }
  );

  const handleApproveModal = () => {
    setApproveIsModal(!isApproveModal);
  };

  const handleRejectModal = () => {
    setIsRejectModal(!isRejectModal);
  };

  const handleApproveApplication = () => {
    approveApplication();
    setApproveIsModal(false);
  };

  const handleRejectApplication = () => {
    rejectApplication();
    setIsRejectModal(false);
  };

  return (
    <div>
      <div className={styles.CheckStatusButtonContainer}>
        <ModalGroup.Root>
          <ModalGroup.Trigger>
            <button type="button" className={styles.approve} onClick={handleApproveModal}>
              승인하기
            </button>
          </ModalGroup.Trigger>
          <ModalGroup.Content>
            <Modal.Select buttonClick={handleApproveApplication}>신청을 승인하시겠어요?</Modal.Select>
          </ModalGroup.Content>
        </ModalGroup.Root>
        <ModalGroup.Root>
          <ModalGroup.Trigger>
            <button type="button" className={styles.reject} onClick={handleRejectModal}>
              거절하기
            </button>
          </ModalGroup.Trigger>
          <ModalGroup.Content>
            <Modal.Select buttonClick={handleRejectApplication}>신청을 거절하시겠어요?</Modal.Select>
          </ModalGroup.Content>
        </ModalGroup.Root>
      </div>
    </div>
  );
}

export default CheckStatusButton;
