import Modal from '@/components/Modal/Modal';
import Modals from '@/components/Modal/ModalGroup';

function Naeun() {
  return (
    <div>
      <Modals.Root>
        <Modals.Trigger>
          <div>버트으은</div>
        </Modals.Trigger>
        <Modals.Content>
          <Modal errorMessage="에러에러에러!!" types="error" />
        </Modals.Content>
      </Modals.Root>
    </div>
  );
}

export default Naeun;
