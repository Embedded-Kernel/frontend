import Head from 'next/head';
import DashboardLayout from '../components/layouts/DashboardLayout';

export default function App() {
  return (
    <>
      <Head>
        <title>application</title>
      </Head>
      <DashboardLayout>
        <div>
          <h3 className="font-black text-primary text-4xl">Overview</h3>
        </div>
      </DashboardLayout>
    </>
  );
}
