import { ConfirmCode } from '../../components/ConfirmationCode';
import Head from 'next/head';

export default function confirm() {
  return (
    <>
      <Head>
        <title>confirmation code</title>
      </Head>
      <ConfirmCode />
    </>
  );
}
