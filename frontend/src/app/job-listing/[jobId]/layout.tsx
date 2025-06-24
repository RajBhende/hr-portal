import React from 'react';
import JobDetailsHeader from '../../components/JobDetailsHeader';

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
