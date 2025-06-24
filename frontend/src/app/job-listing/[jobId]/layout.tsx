import React, { ReactNode } from 'react';
import JobDetailsHeader from '../../components/JobDetailsHeader';

interface JobDetailsLayoutProps {
  children: ReactNode;
  params: {
    jobId: string;
  };
}

export default function JobDetailsLayout({ children, params }: JobDetailsLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <JobDetailsHeader jobId={params.jobId} />
      <div className="flex-1 flex bg-[#F8FAFC]">{children}</div>
    </div>
  );
}
