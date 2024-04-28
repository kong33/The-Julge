import { createPortal } from 'react-dom';

import styles from '@/components//feature/Modal/Portal.module.scss';
import { defaultProps } from '@/components/feature/Modal/Modal.type';

function Potal({ children }: defaultProps) {
  // eslint-disable-next-line react/jsx-no-useless-fragment
  return createPortal(<div className={styles.Potal}>{children}</div>, document.getElementById('modal') as HTMLElement);
}

export default Potal;
