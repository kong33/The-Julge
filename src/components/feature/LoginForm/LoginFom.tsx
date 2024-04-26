// // import { useForm } from 'react-hook-form';
// // import { useAtom } from 'jotai';
// // import { userInfoAtom } from '../AuthForm/AuthAtom';
// // import { PostAuthenticationPayload, PostAuthenticationRes } from '@/apis/authentication/authentication.type';
// // import Button from '@/components/common/Button';
// // import InputForm from '@/components/common/Input/InputForm/InputForm';
// // import {
// //   AuthFormProps,
// //   IFormInput,
// //   defaultLoginFormValues,
// //   validate,
// //   status
// // } from '@/components/feature/AuthForm/AuthForm.type';
// // import { ReactComponent as Logo } from '@/public/svgs/Logo.svg';
// // import { useRouter } from 'next/router';
// // import { useEffect, useState } from 'react';
// // import Modal from '../Modal/Modal';
// // import ModalGroup from '../Modal/ModalGroup';

// // export default function LoginForm() {
// //   const {
// //     handleSubmit,
// //     register,
// //     formState: { errors },
// //     watch,
// //     setError,
// //     clearErrors,
// //     getValues
// //   } = useForm<IFormInput>({ defaultValues: defaultLoginFormValues, mode: 'onTouched' });

// //   //autom으로 유저 정보 전역 저장
// //   const [, setUserInfoAtom] = useAtom(userInfoAtom);

// //   //관리할 레지스터 (validation 을 위해 존재)
// //   const registerList = {
// //     email: register('email', validate.email),
// //     password: register('password', validate.password)
// //   };
// //   return (
// //     <form onSubmit={handleSubmit(onSubmit)}>
// //       <Logo width="248" height="44" />
// //       <div>
// //         <InputForm
// //           label="이메일"
// //           errorMessage={errors.email?.message}
// //           type="email"
// //           {...registerList.email}
// //           name="email"
// //         />
// //         <InputForm
// //           label="비밀번호"
// //           errorMessage={errors.password?.message}
// //           type="password"
// //           {...registerList.password}
// //           name="password"
// //         />
// //         <Button size="large" solid submit active>
// //           {status[formType].buttonText}
// //         </Button>
// //       </div>
// //       <div>
// //         <p>{status[formType].footerText}</p>
// //         <Link href={status[formType].footerLink}>{status[formType].footerLinkText}</Link>
// //       </div>
// //       {alertMessage !== '' && (
// //         <ModalGroup.Content>
// //           <Modal.Error>{alertMessage}</Modal.Error>
// //         </ModalGroup.Content>
// //       )}
// //     </form>
// //   );
// // }
