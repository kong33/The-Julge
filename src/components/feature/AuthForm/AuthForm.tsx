import Link from 'next/link';
import { useState, MouseEvent } from 'react';

import Button from '@/components/common/Button';
import { ReactComponent as Logo } from '@/public/svgs/Logo.svg';
import { ReactComponent as ButtonCheck } from '@/public/svgs/buttonCheck.svg';
import { ReactComponent as ButtonUnCheck } from '@/public/svgs/buttonUnCheck.svg';

// import { useForm } from 'react-hook-form';

// const {
//   register,
//   handleSubmit,
//   formState: { errors }
// } = useForm();

const status = {
  login: {
    formLabel: ['이메일', '비밀번호'],
    buttonText: '로그인 하기',
    footerText: '회원이 아니신가요?',
    footerLink: '회원가입하기'
  },
  signin: {
    formLabel: ['이메일', '비밀번호', '비밀번호 확인'],
    buttonText: '가입하기',
    footerText: '이미 가입하셨나요?',
    footerLink: '로그인하기'
  }
};

type AuthFormProps = {
  type: 'login' | 'signin';
};

type clickedState = {
  알바생: boolean;
  사장님: boolean;
};
export default function AuthForm({ type }: AuthFormProps) {
  const [isClicked, setIsClicked] = useState<clickedState>({ 알바생: false, 사장님: false });
  const handleClicked = (e: MouseEvent<HTMLButtonElement>) => {
    const clickedButton = e.currentTarget.id as keyof clickedState;
    setIsClicked((prev) => ({
      ...prev,
      [clickedButton]: !prev[clickedButton]
    }));
  };
  return (
    <form>
      <Logo width="248" height="44" />
      <div>
        <input />
        <input />
        <Button size="large" solid submit active>
          로그인 하기
        </Button>
      </div>
      <div>
        <p>{status[type].footerText}</p>
        <Link href="/">{status[type].footerLink}</Link>
        {type === 'signin' && (
          <>
            <input />
            <Button size="large" submit active id="알바님" onClick={handleClicked}>
              {isClicked ? <ButtonCheck /> : <ButtonUnCheck />}알바님
            </Button>
            <Button size="large" submit active id="사장님" onClick={handleClicked}>
              사장님
            </Button>
          </>
        )}
      </div>
    </form>
  );
}
