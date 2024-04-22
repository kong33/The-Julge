/* import { getCookie } from 'cookies-next';
import { useEffect, useState } from 'react';

import UserService from '@/apis/user/User.service';
import Gnb from '@/components/common/Gnb/Gnb';

function GnbData() {
  const [userType, setUserType] = useState<'guest' | 'employee' | 'employer' | undefined>();
  const [shopId, setShopId] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const userId = getCookie('userId');

      console.log('userId:', userId);

      if (userId === undefined || userId === null) {
        setUserType('guest');
        return;
      }

      try {
        const userInfo = await UserService.getUser(userId);
        if (!userInfo.data) {
          throw new Error('사용자 데이터를 찾을 수 없습니다');
        }

        const user = userInfo.data;
        setUserType(user.type);

        if (user.type === 'employer' && user.shop) {
          setShopId(user.shop);
        }
      } catch (error) {
        console.error('사용자 데이터를 불러오는 중 오류가 발생했습니다:', error);
        setUserType(undefined);
        setShopId(null);
      }
    };
    fetchData();
  }, []);

  return <Gnb userType={userType} shopId={shopId || ''} />;
}

export default GnbData;
*/

import { getCookie } from 'cookies-next';
import { useEffect, useState } from 'react';

import UserService from '@/apis/user/User.service';
import Gnb from '@/components/common/Gnb/Gnb';

function GnbData() {
  const [userType, setUserType] = useState<'guest' | 'employee' | 'employer' | undefined>();
  // const [shopId, setShopId] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const userId = getCookie('userId');
      console.log('userId:', userId);

      if (userId === undefined) {
        setUserType('guest');
        return;
      }

      try {
        const userInfo = await UserService.getUser(userId);

        if (!userInfo.data) {
          throw new Error('사용자 데이터를 찾을 수 없습니다');
        }

        const user = userInfo.data;
        setUserType(user.item.type);

        // if (user.type === 'employer' && user.item.shop) {
        //  setShopId(user.item.shop.item.id);
        // }
      } catch (error) {
        console.error('사용자 데이터를 불러오는 중 오류가 발생했습니다:', error);
        setUserType(undefined);
        // setShopId(null);
      }
    };

    fetchData();
  }, []);

  return <Gnb userType={userType} />;
}

export default GnbData;
