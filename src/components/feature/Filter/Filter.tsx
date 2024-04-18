import { useState, MouseEventHandler } from 'react';

import Badge from '@/components/common/Badge/Badge';
import ScrollMenu from '@/components/common/ScrollMenu/ScrollMenu';
import styles from '@/components/feature/Filter/Filter.module.scss';
import { addressList } from '@/libs/constants';
import useFilterOutsideClick from '@/libs/hooks/useFilterOutsideClick';
import { ReactComponent as CloseButton } from '@/public/svgs/closeButton.svg';

export default function Filter({ filterShow }: { filterShow: boolean }) {
  const [clickedAddress, setClickedAddress] = useState<string[]>([]);
  const { isFilterShow, setIsFilterShow, filterRef } = useFilterOutsideClick({ filterShow });

  const handleAddressClicked: MouseEventHandler<HTMLElement> = (e) => {
    const clickedAddressText = e.currentTarget.textContent;
    if (clickedAddressText) {
      setClickedAddress((prev) => [...prev, clickedAddressText]);
    }
  };

  return (
    isFilterShow && (
      <div className={styles.container} ref={filterRef}>
        <div>
          <h1>상세 필터</h1>
          <CloseButton onClick={() => setIsFilterShow(false)} />
        </div>

        <section>
          <p>위치</p>
          <ScrollMenu list={addressList} handleClick={handleAddressClicked} />
          <section className={styles.badgeList}>
            {clickedAddress.map((item) => (
              <div key={item}>
                <Badge title={item} color="red" closeBtn />
              </div>
            ))}
          </section>
        </section>

        <hr />

        <section>
          <p>시작일</p>
          <input placeholder="입력" />
        </section>

        <hr />

        <section>
          <p>금액</p>
          <section>
            <input placeholder="입력" />
            <p>이상부터</p>
          </section>
        </section>

        <section>
          <button type="button">초기화</button>
          <button type="button">적용하기</button>
        </section>
      </div>
    )
  );
}
