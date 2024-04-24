import React from 'react';

import HeadLayout from '@/layouts//HeadLayout';

export default function OnlytagLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <HeadLayout />
      <main>{children}</main>
      {/* footer */}
    </>
  );
}
