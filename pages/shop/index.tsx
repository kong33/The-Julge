import { useRouter } from 'next/router';

import NoDataSection from '@/components/layout/NoDataSection/NoDataSection';
import styles from '@/pages/shop/index.module.scss';

const NoDataSectionText = {
  title: '내 가게',
  description: '내 가게를 소개하고 공고도 등록해 보세요.',
  buttonLabel: '가게 등록하기'
};

export default function ShopPage() {
  const router = useRouter();

  const handleClickButton = () => {
    router.push('/shop/register');
  };

  return (
    <main className={styles.main}>
      <NoDataSection onClick={handleClickButton} {...NoDataSectionText} />
    </main>
  );
}
