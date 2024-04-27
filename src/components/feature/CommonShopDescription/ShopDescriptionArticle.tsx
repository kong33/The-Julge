import Button from '@/components/common/Button';
import styles from '@/components/feature/CommonShopDescription/ShopDescriptionArticle.module.scss';
import { ReactComponent as LocationSvg } from '@/public/svgs/location-shop.svg';

// ShopArticle
export function ShopDescriptionArticle() {
  return (
    <article>
      <h1>식당</h1>
      <h2>도토리 식당</h2>
      <div className={styles.articleShop}>
        <div className={styles.shopImg}>이미지</div>
        <div className={styles.shopContainer}>
          <div className={styles.shopDetailContainer}>
            <div className={styles.shopTitleContainer}>
              <p className={styles.shopCategory}>카테고리</p>
              <p className={styles.shopName}>이름</p>
            </div>
            <div className={styles.shopLocationContainer}>
              <LocationSvg className={styles.shopLocationIcon} />
              <span className={styles.shopLocationText}>주소</span>
            </div>
            <p className={styles.shopDescription}>설명</p>
          </div>
          <div className={styles.shopButtonContainer}>
            <Button className={styles.shopButton} size="medium" active>
              편집하기
            </Button>
            <Button className={styles.shopButton} size="medium" active solid>
              공고 등록하기
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
}

export default ShopDescriptionArticle;
