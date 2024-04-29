// import { usePostUser } from "@/apis/user/useUserService";
// import { useEffect , useState} from "react";
// export default function useManageSignup({passwordConfirm, password, setError, clearErrors}) {
//     const {
//         mutate: signupMutate,
//         data: signupData,
//         isError
//     } = usePostUser({
//         email: '',
//         password: '',
//         type: 'employee'
//     });
//    const [alertMessage, setAlertMessage] = useState('');
//     useEffect(() => {
//           //회원가입시 비번 벨리데이팅
//     if (formType === "signup" && passwordConfirm && password !== passwordConfirm) {
//       setError('passwordConfirm', { type: 'password-mismatch', message: '비밀번호가 일치하지 않습니다.' });
//     } else {
//       clearErrors('passwordConfirm');
//     }
//     })

//     return{alertMessage}
// }
