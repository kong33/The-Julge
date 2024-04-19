import Modal from '@/components/Modal/Modal';
import Modals from '@/components/Modal/ModalGroup';

// 사용법 sample
function Sample() {
  const handleClick = () => {
    console.log('신청 취소 혹은 신청 승인 클릭시 이벤트!!');
  };
  return (
    <>
      {/* 경고 표시 모달 */}
      <Modals.Root>
        <Modals.Trigger>에러버튼</Modals.Trigger>
        <Modals.Content>
          <Modal types="error">내 프로필을 먼저 등록해주세요.</Modal>
        </Modals.Content>
      </Modals.Root>
      {/* 체크 모달 */}
      <Modals.Root>
        <Modals.Trigger>체크버튼</Modals.Trigger>
        <Modals.Content>
          <Modal types="check">체크체크!!!!</Modal>
        </Modals.Content>
      </Modals.Root>
      {/* 예/아니오 선택 모달 */}
      <Modals.Root>
        <Modals.Trigger>선택버튼1</Modals.Trigger>
        <Modals.Content>
          <Modal types="select" buttonType="user" buttonClick={handleClick}>
            신청을 취소하시겠어요?
          </Modal>
        </Modals.Content>
      </Modals.Root>

      <Modals.Root>
        <Modals.Trigger>선택버튼2</Modals.Trigger>
        <Modals.Content>
          <Modal types="select" buttonType="ceo" buttonClick={handleClick}>
            신청을 승인하시겠어요?
          </Modal>
        </Modals.Content>
      </Modals.Root>
    </>
  );
}

export default Sample;
