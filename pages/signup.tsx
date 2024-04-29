import { ReactNode } from 'react';

import SignupForm from '@/components/feature/SignupForm/SignupForm';
import EmptyLayout from '@/layouts/EmptyLayout';

export default function signup() {
  return <SignupForm />;
}

signup.getLayout = function getLayout(page: ReactNode) {
  return <EmptyLayout>{page}</EmptyLayout>;
};
