/* eslint-disable */
import styles from '@/components/feature/Filter/styles.module.scss';
import { ReactComponent as CloseButton } from '@/public/svgs/closeButton.svg';
import FilterBadge from '@/components/common/FilterBadge';

export default function Filter({}) {
  let filterBadgeList = [];

  return (
    <div className={styles.container}>
      <div>
        <h1>상세 필터</h1>
        <CloseButton />
      </div>

      <section>
        <p>위치</p>
        <div></div>
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
        <button>초기화</button>
        <button>적용하기</button>
      </section>
    </div>
  );
}
