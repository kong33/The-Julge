import { useState, MouseEventHandler } from 'react';

import FilterBadge from '@/components/common/FilterBadge/FilterBadge';
import ScrollMenu from '@/components/common/ScrollMenu/ScrollMenu';
import styles from '@/components/feature/Filter/Filter.module.scss';
import { ReactComponent as CloseButton } from '@/public/svgs/closeButton.svg';

export default function Filter() {
  const [clickedAddress, setClickedAddress] = useState<string[]>([]);
  console.log(clickedAddress);
  const handleAddressClicked: MouseEventHandler<HTMLElement> = (e) => {
    const clickedAddressText = e.currentTarget.textContent;
    if (clickedAddressText) {
      setClickedAddress((prev) => [...prev, clickedAddressText]);
    }
  };

  return (
    <div className={styles.container}>
      <div>
        <h1>상세 필터</h1>
        <CloseButton />
      </div>

      <section>
        <p>위치</p>
        <ScrollMenu handleClick={handleAddressClicked} />
        <section className={styles.dragMenu}>
          <FilterBadge title="rlarkdms" />
        </section>
      </section>

      <hr />

      <section>
        <p>시작일</p>
        <input />
      </section>

      <hr />

      <section>
        <p>금액</p>
        <section>
          <input />
          <p>이상부터</p>
        </section>
      </section>

      <section>
        <button type="button">초기화</button>
        <button type="button">적용하기</button>
      </section>
    </div>
  );
}
