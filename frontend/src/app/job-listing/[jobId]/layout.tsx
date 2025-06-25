import React from 'react';
import JobDetailsHeader from '../../components/joblistingmodule/JobDetailsHeader';

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}): React.JSX.Element {
  return (
    <div>
      <JobDetailsHeader />
      {children}
    </div>
  );
}
