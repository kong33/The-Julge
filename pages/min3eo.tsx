import Gnb from '../src/components/common/Gnb';

// mockData 배열 부분   const userData = mockData[1]; 을 변경하시면서 테스트 해 볼 수 있습니다

type UserData = {
  userType: 'employee' | 'employer' | 'guest' | undefined;
  NotiStatus: boolean;
};

const mockData: UserData[] = [
  {
    userType: 'employee',
    NotiStatus: true
  },
  {
    userType: 'employer',
    NotiStatus: false
  },
  {
    userType: 'guest',
    NotiStatus: false
  }
];

export default function Page() {
  const userData = mockData[0];

  return (
    <div>
      <Gnb userType={userData.userType} NotiStatus={userData.NotiStatus} />
    </div>
  );
}
