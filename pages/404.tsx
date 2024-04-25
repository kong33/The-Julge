import { useRouter } from 'next/router';

import Button from '@/components/common/Button';
import { pageList } from '@/libs/constants/contants';

export default function Page404() {
  const router = useRouter();

  const handleClick = () => {
    router.replace(pageList.home());
  };

  return (
    <Button active size="large" onClick={handleClick}>
      404/홈페이지로 돌아가기
    </Button>
  );
}
