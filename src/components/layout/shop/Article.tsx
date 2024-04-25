import Image from 'next/image';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';

import { GetNoticeListByShopIdRes } from '@/apis/notice/notice.type';
import { useGetNoticeListByShopId } from '@/apis/notice/useNoticeService';
import { GetShopRes } from '@/apis/shop/shop.type';
import Button from '@/components/common/Button';
import PostList from '@/components/feature/Post/PostList/PostList';
import styles from '@/components/layout/shop/Article.module.scss';
import { defaultLimit, pageList } from '@/libs/constants/contants';
import useIntersectionObserver from '@/libs/hooks/useIntersectionObserver';
import { ReactComponent as LocationSvg } from '@/public/svgs/location-shop.svg';

// ShopArticle
export function ShopArticle({ shopData }: { shopData: GetShopRes }) {
  const router = useRouter();

  const { item: shopItem } = shopData;
  const { id: shopId, name, category, address1, address2, description, imageUrl } = shopItem;

  const handleClick = {
    toShopEditPage: () => router.push(pageList.shopEdit(shopId)),
    toShopNoticeRegisterPage: () => router.push(pageList.shopNoticeRegister(shopId))
  };

  return (
    <article className={styles.articleShop}>
      <div className={styles.shopImg}>
        <Image src={imageUrl} alt="shop" width={2156} height={1232} style={{ objectFit: 'cover' }} priority />
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

  // 무한 스크롤
  const [queryParams, setQueryParams] = useState({ offset: defaultLimit, limit: defaultLimit });
  const { data: moreNoticeListItems } = useGetNoticeListByShopId(shopItem.id, {
    offset: queryParams.offset,
    limit: queryParams.limit
  });
  const noticeMaxCount = moreNoticeListItems?.count;
  const moreNoticeListItem = moreNoticeListItems?.items;

  const loadMoreNoticeList = useCallback(() => {
    setQueryParams((prev) => {
      return { offset: prev.offset + prev.limit, limit: prev.limit };
    });
  }, []);

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

  const observationTargetRef = useIntersectionObserver({ callbackIn: loadMoreNoticeList });

  // 데이터 저장할 배열
  const [loadedNoticeList, setLoadedNoticeList] = useState(postListDatas);

  const handleClick = {
    toShopNoticeRegisterPage: () => router.push(pageList.shopNoticeRegister(shopItem.id))
  };

  // 추가 데이터를 loadedNoticeList에 추가
  useEffect(() => {
    // 기존에 추가된 데이터인지 확인
    if (moreNoticeListItem) {
      const isExist = () => loadedNoticeList.find((item) => item.id === moreNoticeListItem[0]?.item?.id);

      // 추가된 적이 없으면 moreNoticeListItem을 loadedNoticeList에 추가
      if (!isExist()) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const morePostListDatas = moreNoticeListItem.map((notice: any) => {
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

        setLoadedNoticeList([...loadedNoticeList, ...morePostListDatas]);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [moreNoticeListItems]);

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

  // 공고가 있을 때
  return (
    <article className={styles.articleNoticeList}>
      <PostList datas={loadedNoticeList} />
      {/* 옵저버에 등록될 엔트리 */}
      {noticeMaxCount > queryParams.offset + queryParams.limit && (
        <div style={{ height: `0.1rem` }} ref={observationTargetRef} />
      )}
    </article>
  );
}
