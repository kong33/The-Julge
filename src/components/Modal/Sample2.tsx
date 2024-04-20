import { ReactElement, useState } from 'react';

import Modal from '@/components/Modal/Modal';
import Modals from '@/components/Modal/ModalGroup';

// 사용법 sample2
// 조건에 따라 각각 다른 모달이 뜨는 경우
function Sample2() {
  const handleClick = () => {
    console.log(`모달내부에 신청취소 혹은 승인 취소 버튼 클릭함!!!`);
  };
  const a = true;
  // 조건에 따라 다른 모달이 떠야할 때
  const [openModal, setOpenModal] = useState<ReactElement | null>(null);

  const modalList = {
    modal1: <Modal.Error>에러가 뜹니다!</Modal.Error>,
    modal2: <Modal.Check>2</Modal.Check>,
    modal3: <Modal.Select buttonClick={handleClick}>3</Modal.Select>,
    modal4: <Modal.Select buttonClick={handleClick}>4</Modal.Select>,
  };

  const onClick1 = () => {
    if (a) {
      setOpenModal(modalList.modal1);
    }
    if (!a) {
      setOpenModal(modalList.modal2);
    }
  };

  return (
    <div>
      {/* 모달선언 */}
      <Modals.Trigger>
        <button type="button" onClick={onClick1}>
          버튼1
        </button>
      </Modals.Trigger>
      <Modals.Content>{openModal}</Modals.Content>
      <Modals.Trigger>
        <button type="button" onClick={onClick1}>
          버튼2
        </button>
      </Modals.Trigger>
      <Modals.Content>
        <Modal.Select buttonClick={handleClick}>3</Modal.Select>
      </Modals.Content>
    </div>
  );
}

export default Sample2;
