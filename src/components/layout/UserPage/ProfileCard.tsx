import { useRouter } from 'next/router';

import Button from '@/components/common/Button/Button';
import { ReactComponent as LocationSvg } from '@/public/svgs/location-shop.svg';
import { ReactComponent as PhoneSvg } from '@/public/svgs/phone.svg';

import styles from './ProfileCard.module.scss';

type UserProfileProps = {
  isRegisterd: boolean;
  name: string;
  phone: string;
  address: string;
  bio: string;
};

export default function ProfileCard({ isRegisterd, ...props }: UserProfileProps) {
  const router = useRouter();
  const onClick = () => {
    router.push('/user/edit');
  };

  if (!isRegisterd) {
    return (
      <div className={styles.nonDataWrapper}>
        <div className={styles.section}>
          <p>내 프로필을 등록하고 원하는 가게에 지원해 보세요.</p>
        </div>
        <div className={styles.section}>
          <Button className={styles.editButton} solid size="large" active onClick={onClick}>
            내 프로필 등록하기
          </Button>
        </div>
      </div>
    );
  }
  return (
    <div className={styles.wrapper}>
      <div className={styles.section}>
        <div className={styles.nameSection}>
          <h1>이름</h1>
          <p>{props.name}</p>
        </div>
        <div className={styles.infoSection}>
          <div>
            <PhoneSvg className={styles.icon} />
            <p>{props.phone}</p>
          </div>
          <div>
            <LocationSvg className={styles.icon} />
            <p>{props.address}</p>
          </div>
        </div>
        <div className={styles.bioSection}>
          <p>{props.bio}</p>
        </div>
      </div>
      <div className={styles.section}>
        <Button className={styles.editButton} solid size="large" active onClick={onClick}>
          편집하기
        </Button>
      </div>
    </div>
  );
}
