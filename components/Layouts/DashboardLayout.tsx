import SideBar from '../shared/Sidebar';

export default function DashboardLayout({ children }: { children: JSX.Element }) {
  return (
    <div className="relative min-h-screen flex">
      <SideBar />
      {children}
    </div>
  );
}
