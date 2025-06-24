import './globals.css';
import CustomNavbar from './components/CustomNavbar';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'tayog',
  description: 'Job Portal',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): React.JSX.Element {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col min-h-screen md:flex-row">
          <CustomNavbar />
          <main className="flex-1 bg-[#F8FAFC]">{children}</main>
        </div>
      </body>
    </html>
  );
}
