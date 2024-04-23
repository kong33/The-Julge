import Cookies from 'js-cookie';
import Link from 'next/link'; // import { useState, MouseEvent } from 'react';
import { useForm } from 'react-hook-form';

import { PostAuthenticationPayload } from '@/apis/authentication/authentication.type';
import { usePostAuthentication } from '@/apis/authentication/useAuthenticationService';
import Button from '@/components/common/Button';
import InputForm from '@/components/common/Input/InputForm/InputForm';
import {
  AuthFormProps, // clickedState,
  IFormInput,
  defaultFormValues,
  validate,
  status
} from '@/components/feature/AuthForm/AuthForm.type';
import { ReactComponent as Logo } from '@/public/svgs/Logo.svg'; // import { ReactComponent as ButtonCheck } from '@/public/svgs/buttonCheck.svg';//import { ReactComponent as ButtonUnCheck } from '@/public/svgs/buttonUnCheck.svg';

export default function AuthForm({ formType }: AuthFormProps) {
  const {
    // control,
    register,
    handleSubmit
    // formState: { errors }
  } = useForm<IFormInput>({ defaultValues: defaultFormValues, mode: 'onBlur' });

  const registerList = {
    email: register('email', validate.email),
    password: register('password', validate.password)
  };

  // const [isClicked, setIsClicked] = useState<clickedState>({ 알바생: false, 사장님: false });

  // const handleClicked = (e: MouseEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  //   const clickedButton = e.currentTarget.id as keyof clickedState;
  //   setIsClicked((prev) => ({
  //     ...prev,
  //     [clickedButton]: !prev[clickedButton]
  //   }));
  // };

  const OnSubmit = async (payload: PostAuthenticationPayload) => {
    try {
      const response = usePostAuthentication(payload);
      if (response.ok) {
        console.log('tjdrhd');
        const { token, user } = response.item;
        const { links } = response;
        Cookies.set('authToken', token, { expires: 1, path: '/' });
        Cookies.set('userInfo', user, { expires: 1, path: '/' });
        Cookies.set('links', links, { expires: 1, path: '/' }); // 이건 필요할 지 모르겠네욤. 필요 없으면 추후 삭제하곘습니다.
      }
      // response 형태
      //   "item": {
      //     "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIyOGQ1ZGNjOS04NTFlLTQyNGUtYmI2Zi0wYjNjMmU4NmM2NWEiLCJpYXQiOjE3MTM4ODMyNzN9.D5TBVN5ny590TnljMSuHAhuxPD7in-iMJNu4leV_l6A",
      //     "user": {
      //       "item": {
      //         "id": "28d5dcc9-851e-424e-bb6f-0b3c2e86c65a",
      //         "email": "codeit@codeit.com",
      //         "type": "employee",
      //         "name": "수정한 이름2",
      //         "phone": "01087654321",
      //         "address": "서울시 종로구",
      //         "bio": "string"
      //       },
      //       "href": "/api/0-1/the-julge/users/28d5dcc9-851e-424e-bb6f-0b3c2e86c65a"
      //     }
      //   },
      //   "links": []
      // }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(OnSubmit)}>
      <Logo width="248" height="44" />
      <div>
        <InputForm label="이메일" errorMessage="이메일 형식으로 작성해주세요" type="email" {...registerList.email} />
        <InputForm
          label="비밀번호"
          errorMessage="8자 이상으로 입력해주세요"
          type="password"
          {...registerList.password}
        />
        <Button size="large" solid submit active>
          {status[formType].buttonText}
        </Button>
      </div>
      <div>
        <p>{status[formType].footerText}</p>
        <Link href="/">{status[formType].footerLink}</Link>
        {/* 회원가입 페이지일 경우 아래의 내용 추가 랜더링 */}
        {formType === 'signup' && (
          <>
            <InputForm
              label={status[formType].formLabel[2]}
              errorMessage={status[formType].errorMessage[2]}
              type="password"
            />
            {/* <InputForm
              type="radio"
              label={{ isClicked.알바생 ? <ButtonCheck /> : <ButtonUnCheck /> }}
              className={styles.radioButton}
              fieldLabel="회원 유형"
              onClick={handleClicked}
            /> */}
          </>
        )}
      </div>
    </form>
  );
}
