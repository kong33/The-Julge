import FilterBadge from '@/components/common/FilterBadge';
import styles from '@/components/feature/Filter/styles.module.scss';
//  import { addressList } from '@/libs/constants';
import { ReactComponent as CloseButton } from '@/public/svgs/closeButton.svg';

export default function Filter() {
  return (
    <div className={styles.container}>
      <div>
        <h1>상세 필터</h1>
        <CloseButton />
      </div>

      <section>
        <p>위치</p>
        <div>{/* {addressList.map((item)=><li>item</li>)} */}</div>
        <section>
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
