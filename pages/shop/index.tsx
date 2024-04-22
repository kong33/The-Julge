import Image from 'next/image';
import { useRouter } from 'next/router';

import NoticeService from '@/apis/notice/Notice.service';
import { GetNoticeListByShopIdRes } from '@/apis/notice/notice.type';
import ShopService from '@/apis/shop/Shop.service';
import { GetShopRes } from '@/apis/shop/shop.type';
import Button from '@/components/common/Button';
import styles from '@/pages/shop/index.module.scss';
import DefaultShopImg from '@/public/images/defualt-shop.png';
import { ReactComponent as LocationSvg } from '@/public/svgs/location.svg';

export const getServerSideProps = async () => {
  const shopId = '451c0907-2226-4c5d-8947-ba9fdbb5f91d';

  const { data: shopData } = await ShopService.getShop(shopId);
  const { data: noticeListData } = await NoticeService.getNoticeListByShopId(shopId, {});

  return {
    props: { shopData, noticeListData }
  };
};

const pageList = {
  shareRegister: '/shop/register',
  shareEdit: '/shop/edit',
  noticeRegister: '/shop/edit' // 주소 나중에 바꾸기
};

// ShopArticle
function ShopArticle({ shopData }: { shopData: GetShopRes }) {
  const router = useRouter();

  const { item: shopItem } = shopData;
  console.log('shopItem', shopItem);

  const handleClick = {
    toShopRegisterPage: () => router.push(pageList.shareRegister),
    toShopEditPage: () => router.push(pageList.shareEdit),
    toNoticeRegisterPage: () => router.push(pageList.shareRegister)
  };

  if (!shopItem?.id) {
    return (
      <article className={styles.article}>
        <p className={styles.description}>내 가게를 소개하고 공고도 등록해 보세요.</p>
        <Button className={styles.button} onClick={handleClick.toShopRegisterPage} size="medium" active solid>
          가게 등록하기
        </Button>
      </article>
    );
  }

  const { name, category, address1, address2, description } = shopItem; // 나중에 id, imageUrl 추가

  // const shopImg = imageUrl;
  const shopImg = DefaultShopImg; // 이미지 나중에 바꾸기

  return (
    <article className={styles.articleShop}>
      <div className={styles.shopImg}>
        <Image
          src={shopImg}
          alt="shop"
          width={2156}
          height={1232}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
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
          <Button className={styles.shopButton} onClick={handleClick.toNoticeRegisterPage} size="medium" active solid>
            공고 등록하기
          </Button>
        </div>
      </div>
    </article>
  );
}

// NoticeListArticle
function NoticeListArticle({ noticeListData }: { noticeListData: GetNoticeListByShopIdRes }) {
  const router = useRouter();

  const { items: noticeListItem } = noticeListData;
  console.log('noticeListItem', noticeListItem);

  const handleClick = {
    toNoticeRegisterPage: () => router.push(pageList.shareRegister)
  };

  if (!noticeListItem?.length) {
    return (
      <article className={styles.article}>
        <p className={styles.description}>공고를 등록해 보세요.</p>
        <Button className={styles.button} onClick={handleClick.toNoticeRegisterPage} size="medium" active solid>
          공고 등록하기
        </Button>
      </article>
    );
  }

  // 여기 작업해야함
  return <article className={styles.articleNoticeList}>PostList-무한 스크롤</article>;
}

// ShopPage
export default function ShopPage({
  shopData,
  noticeListData
}: {
  shopData: GetShopRes;
  noticeListData: GetNoticeListByShopIdRes;
}) {
  console.log('shopData?.item', shopData?.item);
  if (!shopData?.item) {
    return (
      <main className={styles.main}>
        <section className={styles.section}>
          <h1 className={styles.title}>내 가게</h1>
          <ShopArticle shopData={shopData} />
        </section>
      </main>
    );
  }

  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <h1 className={styles.title}>내 가게</h1>
        <ShopArticle shopData={shopData} />
      </section>
      <section className={styles.section}>
        <h1 className={styles.title}>등록한 공고</h1>
        <NoticeListArticle noticeListData={noticeListData} />
      </section>
    </main>
  );
}
