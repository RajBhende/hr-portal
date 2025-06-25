'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const routeTitleMap: { [key: string]: string } = {
  '/dashboard': 'Dashboard',
  '/job-listing': 'Job Listing',
  '/job-listing/new': 'Post a New Job',
  '/applicants': 'All Applicants',
  '/company-profile': 'Company Profile',
  '/schedule': 'Schedule',
};

export default function Header(): React.JSX.Element {
  const pathname = usePathname();

  // Extract base path to match routes like "/job-listing/new" -> "/job-listing"
  const basePath = `/${pathname.split('/')[1]}`;
  const pageTitle = routeTitleMap[pathname] || routeTitleMap[basePath] || 'Page';

  return (
    <header className="w-full px-4 md:px-8 py-4 bg-white border-b border-gray-200 flex justify-between items-center">
      {/* Dynamic Page Title */}
      <div className="text-xl font-semibold text-gray-800">{pageTitle}</div>

      {/* Right side (notifications and button) */}
      <div className="flex items-center gap-4">
        {/* Notification Icon */}
        <button className="relative p-2 rounded-full hover:bg-gray-100">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-gray-600"
          >
            <path
              d="M10 2C7.79086 2 6 3.79086 6 6V8C6 9.5913 5.36786 11.1174 4.24264 12.2426L3 13.5H17L15.7574 12.2426C14.6321 11.1174 14 9.5913 14 8V6C14 3.79086 12.2091 2 10 2Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8 16C8 17.1046 8.89543 18 10 18C11.1046 18 12 17.1046 12 16"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          {/* Notification Dot (optional) */}
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
        </button>

        {/* Post a New Job Button */}
        <Link href="/job-listing/new">
          <button className="flex items-center gap-2 bg-[#4F8FF0] text-white px-4 py-2 rounded-md hover:bg-[#3B77D3] transition">
            <span className="text-lg">+</span>
            <span className="text-sm font-medium">Post a New Job</span>
          </button>
        </Link>
      </div>
    </header>
  );
}
