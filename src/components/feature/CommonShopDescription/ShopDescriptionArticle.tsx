// import Image from 'next/image';

import Button from '@/components/common/Button';
import styles from '@/components/feature/CommonShopDescription/ShopDescriptionArticle.module.scss';
// import shopImag from '@/public/images/defualt-shop.png';
import { ReactComponent as LocationSvg } from '@/public/svgs/clock.svg';

// ShopArticle
export function ShopDescriptionArticle() {
  return (
    <article className={styles.shopBox}>
      <div className={styles.titleWrapper}>
        <h1 className={styles.title}>식당</h1>
        <h2 className={styles.titleName}>도토리 식당</h2>
      </div>
      <div className={styles.articleShop}>
        <div className={styles.shopImg}>
          이미지
          {/* <Image src={shopImag} alt="shop" width={2156} height={1232} style={{ objectFit: 'cover' }} priority /> */}
        </div>
        <div className={styles.shopContainer}>
          <div className={styles.shopDetailContainer}>
            <div className={styles.shopTitleContainer}>
              <p className={styles.shopCategory}>시급</p>
              <p className={styles.shopName}>15000원</p>
            </div>
            <div className={styles.shopLocationContainer}>
              <LocationSvg className={styles.shopLocationIcon} />
              <span className={styles.shopLocationText}>2023-01-02 15:00~18:00 (3시간)</span>
            </div>
            <p className={styles.shopDescription}>서울시 송파구</p>
            <p>알바하기 편한 너구리네 라면집! 라면 올려두고 끓이기만 하면 되어서 쉬운 편에 속하는 가게입니다.</p>
          </div>
          <div className={styles.shopButtonContainer}>
            <Button className={styles.shopButton} size="medium" active>
              공고 편집하기
            </Button>
          </div>
        </div>
      </div>
      <div className={styles.noticeDetailContainer}>
        <p className={styles.noticeDetail}>공고설명</p>
        <p className={styles.noticeDetailText}>
          기존 알바 친구가 그만둬서 새로운 친구를 구했는데, 그 사이에 하루가 비네요. 급해서 시급도 높였고 그렇게 바쁜
          날이 아니라서 괜찮을거예요.
        </p>
      </div>
    </article>
  );
}

export default ShopDescriptionArticle;
