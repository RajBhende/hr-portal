import './globals.css';
import CustomNavbar from './components/sidebar/CustomNavbar';
import Header from './components/header/Header'; // import your header component
import type { Metadata } from 'next';
import { SpeedInsights } from "@vercel/speed-insights/next"

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
          <SpeedInsights />
         <main className="flex-1 bg-[#F8FAFC]">
            <Header /> {/* Add the header here */}
            <div className="p-4">{children}</div> {/* Optional padding */}
          </main>

        </div>
      </body>
    </html>
  );
}
