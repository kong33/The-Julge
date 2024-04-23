import NoticeService from '@/apis/notice/Notice.service';
import { GetNoticeListByShopIdRes } from '@/apis/notice/notice.type';
import ShopService from '@/apis/shop/Shop.service';
import { GetShopRes } from '@/apis/shop/shop.type';
import { NoticeListArticle, ShopArticle } from '@/components/layout/shop/Article';
import styles from '@/pages/shop/index.module.scss';

export const getServerSideProps = async () => {
  const shopId = '451c0907-2226-4c5d-8947-ba9fdbb5f91d';

  const { data: shopData } = await ShopService.getShop(shopId);
  const { data: noticeListData } = await NoticeService.getNoticeListByShopId(shopId, {});

  return {
    props: { shopData, noticeListData }
  };
};

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
        <h1 className={styles.title}>{noticeListData.items?.length && '내가 '}등록한 공고</h1>
        <NoticeListArticle noticeListData={noticeListData} />
      </section>
    </main>
  );
}
