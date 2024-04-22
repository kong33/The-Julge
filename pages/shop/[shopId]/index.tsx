import { useRouter } from 'next/router';

export default function ShopPage() {
  const router = useRouter();
  const { shopId } = router.query;
  return <div>/shop/{shopId}</div>;
}
