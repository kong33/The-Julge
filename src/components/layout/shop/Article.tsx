import Image from 'next/image';
import { useRouter } from 'next/router';

import { GetNoticeListByShopIdRes } from '@/apis/notice/notice.type';
import { GetShopRes } from '@/apis/shop/shop.type';
import Button from '@/components/common/Button';
import styles from '@/components/layout/shop/Article.module.scss';
import { pageList } from '@/libs/constants/contants';
import DefaultShopImg from '@/public/images/defualt-shop.png';
import { ReactComponent as LocationSvg } from '@/public/svgs/location-shop.svg';

// ShopArticle
export function ShopArticle({ shopData }: { shopData: GetShopRes }) {
  const router = useRouter();

  // shopItem이나 shopId가 없을 때 /shop 페이지로 이동
  if (!shopData?.item?.id) {
    return router.replace(pageList.shop());
  }

  const { item: shopItem } = shopData;
  console.log('shopItem', shopItem);

  const { name, category, address1, address2, description } = shopItem; // 나중에 id, imageUrl 추가

  // const shopImg = imageUrl;
  const shopImg = DefaultShopImg; // 이미지 나중에 바꾸기

  const handleClick = {
    toShopEditPage: () => router.push(pageList.shopEdit(shopItem.id)),
    toShopNoticeRegisterPage: () => router.push(pageList.shopNoticeRegister(shopItem.id))
  };

  return (
    <article className={styles.articleShop}>
      <div className={styles.shopImg}>
        <Image
          src={shopImg}
          alt="shop"
          width={2156}
          height={1232}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          priority
        />
      </div>
      <div className={styles.shopContainer}>
        <div className={styles.shopDetailContainer}>
          <div className={styles.shopTitleContainer}>
            <p className={styles.shopCategory}>{category}</p>
            <p className={styles.shopName}>{name}</p>
          </div>
          <div className={styles.shopLocationContainer}>
            <LocationSvg className={styles.shopLocationIcon} />
            <span className={styles.shopLocationText}>{`${address1} ${address2}`}</span>
          </div>
          <p className={styles.shopDescription}>{description}</p>
        </div>
        <div className={styles.shopButtonContainer}>
          <Button className={styles.shopButton} onClick={handleClick.toShopEditPage} size="medium" active>
            편집하기
          </Button>
          <Button
            className={styles.shopButton}
            onClick={handleClick.toShopNoticeRegisterPage}
            size="medium"
            active
            solid
          >
            공고 등록하기
          </Button>
        </div>
      </div>
    </article>
  );
}

// NoticeListArticle
export function NoticeListArticle({
  shopData,
  noticeListData
}: {
  shopData: GetShopRes;
  noticeListData: GetNoticeListByShopIdRes;
}) {
  const router = useRouter();

  const { item: shopItem } = shopData;
  const { items: noticeListItem } = noticeListData;
  console.log('noticeListItem', noticeListItem);

  const handleClick = {
    toShopNoticeRegisterPage: () => router.push(pageList.shopNoticeRegister(shopItem.id))
  };

  if (!noticeListItem?.length) {
    return (
      <article className={styles.article}>
        <p className={styles.description}>공고를 등록해 보세요.</p>
        <Button className={styles.button} onClick={handleClick.toShopNoticeRegisterPage} size="medium" active solid>
          공고 등록하기
        </Button>
      </article>
    );
  }

  // 여기 작업해야함
  return <article className={styles.articleNoticeList}>PostList-무한 스크롤</article>;
}
