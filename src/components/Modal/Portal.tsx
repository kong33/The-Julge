import { createPortal } from 'react-dom';

import { childrenProps } from '@/components/Modal/Modal.type';
import styles from '@/components/Modal/Portal.module.scss';

function Potal({ children }: childrenProps) {
  // eslint-disable-next-line react/jsx-no-useless-fragment
  return createPortal(<div className={styles.Potal}>{children}</div>, document.getElementById('modal') as HTMLElement);
}

export default Potal;
