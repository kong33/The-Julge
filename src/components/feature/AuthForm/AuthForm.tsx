// import Cookies from 'js-cookie';
// import Link from 'next/link';
// import { useForm } from 'react-hook-form';

// import { PostAuthenticationPayload, PostAuthenticationRes } from '@/apis/authentication/authentication.type';
// import Button from '@/components/common/Button';
// import InputForm from '@/components/common/Input/InputForm/InputForm';
// import {
//   AuthFormProps,
//   IFormInput,
//   defaultLoginFormValues,
//   validate,
//   status
// } from '@/components/feature/AuthForm/AuthForm.type';
// import { ReactComponent as Logo } from '@/public/svgs/Logo.svg';
// import RadioInputForm from '@/components/common/Input/RadioInputForm/RadioInputForm';
// import { useRouter } from 'next/router';
// import { userInfoAtom } from './AuthAtom';
// import { useAtom } from 'jotai';
// import { usePostAuthentication } from '@/apis/authentication/useAuthenticationService';
// import { useEffect, useState } from 'react';
// import Modal from '../Modal/Modal';
// import ModalGroup from '../Modal/ModalGroup';
// import { usePostUser } from '@/apis/user/useUserService';
// import { ErrorPutUserRes, GetUserRes, PostUserPayload, isErrorPutUserRes } from '@/apis/user/user.type';

// export default function AuthForm({ formType }: AuthFormProps) {
//   const {
//     handleSubmit,
//     register,
//     formState: { errors },
//     watch,
//     setError,
//     clearErrors
//   } = useForm<IFormInput>({ defaultValues: defaultLoginFormValues, mode: 'onTouched' });

//   //autom으로 유저 정보 전역 저장
//   const [_, setUserInfoAtom] = useAtom(userInfoAtom);
//   //모달 띄울 에러메세지
//   const [alertMessage, setAlertMessage] = useState('');

//   //관리할 레지스터 (validation 을 위해 존재)
//   const registerList = {
//     email: register('email', validate.email),
//     password: register('password', validate.password),
//     passwordConfirm: register('passwordConfirm'),
//     type: register('type', validate.type)
//   };
//   //리다이렉트를 위한 라우터
//   const router = useRouter();

//   //로그인 post 보내기
//   const { mutate: loginMutate, data: loginData } = usePostAuthentication({
//     email: '',
//     password: ''
//   });

//   // 회원가입 Post 보내기
//   const {
//     mutate: signupMutate
//     //data: signupData,
//   } = usePostUser({
//     email: '',
//     password: '',
//     type: 'employee'
//   });

//   //login 성공시 실행
//   const handleLoginSuccess = () => {
//     console.log('success');
//     console.log(loginData);
//     const { token } = loginData.item;
//     Cookies.set('authToken', token, { expires: 1, path: '/' });
//     setUserInfoAtom(loginData);
//   };
//   //login 실패시 실행
//   const handleLoginError = (e: Error) => {
//     console.log('error', e);
//   };

//   type PostType = {
//     email: string;
//     password: string;
//     passwordConfirm: string;
//     type: 'employee';
//   };
//   ``
//   //제출시 동작할 함수
//   const onSubmit = (payload: PostAuthenticationPayload | PostType | PostUserPayload) => {
//     if (formType === 'login') {
//       loginMutate( payload, {onSuccess: handleLoginSuccess, onError: handleLoginError });
//     } else if ('passwordConfirm' in payload) {
//       const { passwordConfirm, ...dataToSubmit } = payload;
//       console.log(dataToSubmit, '제출하는 데이터');
//       signupMutate(dataToSubmit, {onSuccess: handleSignupSuccess, onError: handleSignupError });
//     }
//   };

//   //회원가입시 비밀번호 확인 validating을 위한 watch
//   const password = watch('password');
//   const passwordConfirm = watch('passwordConfirm');

//   useEffect(() => {
//     //회원가입시 비번 벨리데이팅
//     if (formType === 'signup' && passwordConfirm && password !== passwordConfirm) {
//       setError('passwordConfirm', { type: 'password-mismatch', message: '비밀번호가 일치하지 않습니다.' });
//     } else {
//       clearErrors('passwordConfirm');
//     }
//   }, [password, passwordConfirm, alertMessage]);

//   //회원가입시 비번 똑같은 지 확인하는 레지스터
//   const passwordConfirmRegister = register('passwordConfirm', {
//     validate: {
//       matchPassword: (value) => {
//         const password = watch('password'); // 현재 폼의 password 값 가져오기
//         return password === value || '비밀번호가 일치하지 않습니다.';
//       }
//     },
//     required: '비밀번호를 확인해주세요'
//   });

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <Logo width="248" height="44" />
//       <div>
//         <InputForm
//           label="이메일"
//           errorMessage={errors.email?.message}
//           type="email"
//           {...registerList.email}
//           name="email"
//         />
//         <InputForm
//           label="비밀번호"
//           errorMessage={errors.password?.message}
//           type="password"
//           {...registerList.password}
//           name="password"
//         />
//         {/* 회원가입 페이지일 경우 아래의 내용 추가 랜더링 */}
//         {formType === 'signup' && (
//           <>
//             <InputForm
//               label={status[formType].formLabel[2]}
//               errorMessage={errors.passwordConfirm?.message}
//               type="password"
//               {...passwordConfirmRegister}
//             />
//             <RadioInputForm labels={['사장님', '알바생']} value="employer" {...registerList.type} />
//           </>
//         )}
//         <Button size="large" solid submit active>
//           {status[formType].buttonText}
//         </Button>
//       </div>
//       <div>
//         <p>{status[formType].footerText}</p>
//         <Link href={status[formType].footerLink}>{status[formType].footerLinkText}</Link>
//       </div>
//       {alertMessage !== '' && (
//         <ModalGroup.Content>
//           <Modal.Error>{alertMessage}</Modal.Error>
//         </ModalGroup.Content>
//       )}
//     </form>
//   );
// }
