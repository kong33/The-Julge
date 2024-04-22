import Head from 'next/head';

import styles from '@/pages/index.module.scss';

export default function Home() {
  return (
    <>
      <Head>
        <title>The-Julge</title>
      </Head>
      <p className={styles.text}>home</p>;
    </>
  );
}
