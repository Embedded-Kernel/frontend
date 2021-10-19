import Head from 'next/head';
import DashboardLayout from '../components/Layouts/DashboardLayout';

export default function App() {
  return (
    <>
      <Head>
        <title>application</title>
      </Head>
      <DashboardLayout>
        <h1>Here we go</h1>
      </DashboardLayout>
    </>
  );
}
