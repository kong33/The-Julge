import { ReactElement, useState } from 'react';

import Modal from '@/components/feature/Modal/Modal';
import ModalGroup from '@/components/feature/Modal/ModalGroup';

// 사용법 sample1
// 버튼마다 다른 모달이 뜨며, 조건에 따라 각각 다른 모달이 뜨는 경우
function Sample() {
  const handleClick = () => {
    console.log(`모달내부에 신청취소 혹은 승인 취소 버튼 클릭함!!!`);
  };
  const a = true;
  const b = true;
  const [openModal, setOpenModal] = useState<ReactElement | null>(null);

  const modalList = {
    modal1: <Modal.Error>1</Modal.Error>,
    modal2: <Modal.Check>2</Modal.Check>,
    modal3: <Modal.Select buttonClick={handleClick}>3</Modal.Select>,
    modal4: <Modal.Select buttonClick={handleClick}>4</Modal.Select>
  };

  const onClick1 = () => {
    if (a) {
      setOpenModal(modalList.modal1);
    }
    if (!a) {
      setOpenModal(modalList.modal2);
    }
  };

  const onClick2 = () => {
    if (b) {
      setOpenModal(modalList.modal3);
    }
    if (!b) {
      setOpenModal(modalList.modal4);
    }
  };

  return (
    <div>
      {/* 모달선언 */}
      <ModalGroup.Trigger>
        <button type="button" onClick={onClick1}>
          버튼1
        </button>
        <button type="button" onClick={onClick2}>
          버튼2
        </button>
      </ModalGroup.Trigger>
      <ModalGroup.Content>{openModal}</ModalGroup.Content>
    </div>
  );
}

export default Sample;
