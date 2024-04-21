import { createPortal } from 'react-dom';

import styles from '@/components//feature/Modal/Portal.module.scss';
import { childrenProps } from '@/components/feature/Modal/Modal.type';

function Potal({ children }: childrenProps) {
  // eslint-disable-next-line react/jsx-no-useless-fragment
  return createPortal(<div className={styles.Potal}>{children}</div>, document.getElementById('modal') as HTMLElement);
}

export default Potal;
