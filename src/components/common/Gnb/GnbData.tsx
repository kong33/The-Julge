import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';

import AlertService from '@/apis/alert/Alert.service';
import { GetAlertListRes } from '@/apis/alert/alert.type';
import UserService from '@/apis/user/User.service';
import Gnb from '@/components/common/Gnb/Gnb';

function GnbData() {
  const [userType, setUserType] = useState<'guest' | 'employee' | 'employer'>('guest');
  const [alertList, setAlertList] = useState<GetAlertListRes>({
    offset: 0,
    limit: 5,
    count: 0,
    hasNext: false,
    items: [],
    links: []
  });
  useEffect(() => {
    const fetchData = async () => {
      const userId = Cookies.get('userId');

      if (!userId) {
        setUserType('guest');
        return;
      }

      try {
        const userInfo = await UserService.getUser(userId);
        if (!userInfo.data) {
          setUserType('guest');
        }

        const user = userInfo.data.item;
        setUserType(user.type);

        if (user.type === 'employee' || user.type === 'employer') {
          const params = { offset: 0, limit: 5 };
          const alertListData = await AlertService.getAlertList(userId, params);
          setAlertList(alertListData.data);
        }
      } catch (error) {
        setUserType('guest');
      }
    };
    fetchData();
  }, []);
  return <Gnb alertList={alertList} userType={userType} />;
}

export default GnbData;
