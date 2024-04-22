import { useRouter } from 'next/router';

import Button from '@/components/common/Button';
import styles from '@/pages/shop/index.module.scss';

export default function ShopPage() {
  const router = useRouter();

  const handleClickButton = () => {
    router.push('/shop/register');
  };

  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <h1 className={styles.title}>내 가게</h1>
        <article className={styles.article}>
          <p className={styles.description}>내 가게를 소개하고 공고도 등록해 보세요.</p>
          <Button className={styles.button} onClick={handleClickButton} size="medium" active solid>
            가게 등록하기
          </Button>
        </article>
      </section>
    </main>
  );
}
