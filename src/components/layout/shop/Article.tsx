import Image from 'next/image';
import { useRouter } from 'next/router';

import { GetNoticeListByShopIdRes } from '@/apis/notice/notice.type';
import { GetShopRes } from '@/apis/shop/shop.type';
import Button from '@/components/common/Button';
import PostList from '@/components/feature/Post/PostList/PostList';
import styles from '@/components/layout/shop/Article.module.scss';
import { pageList } from '@/libs/constants/contants';
import { ReactComponent as LocationSvg } from '@/public/svgs/location-shop.svg';

// ShopArticle
export function ShopArticle({ shopData }: { shopData: GetShopRes }) {
  const router = useRouter();

  const { item: shopItem } = shopData;
  const { id: shopId, name, category, address1, address2, description, imageUrl } = shopItem;

  const shopImg = imageUrl;

  const handleClick = {
    toShopEditPage: () => router.push(pageList.shopEdit(shopId)),
    toShopNoticeRegisterPage: () => router.push(pageList.shopNoticeRegister(shopId))
  };

  return (
    <article className={styles.articleShop}>
      <div className={styles.shopImg}>
        <Image src={shopImg} alt="shop" width={2156} height={1232} style={{ objectFit: 'cover' }} priority />
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

  // 공고가 없을 때
  if (!noticeListItem?.length) {
    return (
      <article className={styles.articleNoticeListEmpty}>
        <p className={styles.description}>공고를 등록해 보세요.</p>
        <Button
          className={styles.defaultButton}
          onClick={handleClick.toShopNoticeRegisterPage}
          size="medium"
          active
          solid
        >
          공고 등록하기
        </Button>
      </article>
    );
  }

  // `noticeListItem`을 `postListDatas` 구조로 매핑
  const postListDatas = noticeListItem.map((notice) => {
    const noticeItem = notice.item;

    return {
      id: noticeItem.id,
      hourlyPay: noticeItem.hourlyPay,
      startsAt: noticeItem.startsAt,
      workhour: noticeItem.workhour,
      description: noticeItem.description,
      closed: noticeItem.closed,
      shop: {
        item: {
          id: shopItem.id,
          name: shopItem.name,
          category: shopItem.category,
          address1: shopItem.address1,
          address2: shopItem.address2,
          description: shopItem.description,
          imageUrl: shopItem.imageUrl,
          originalHourlyPay: shopItem.originalHourlyPay
        },
        href: ''
      }
    };
  });

  // 공고가 있을 때
  return (
    <article className={styles.articleNoticeList}>
      <PostList datas={postListDatas} />
    </article>
  );
}
