'use client';

import React from 'react';
import ApplicantTabs from '../../components/joblistingmodule/ApplicantTabs';
import ApplicantList from '../../components/joblistingmodule/ApplicantList';
import ApplicantProfile from '../../components/joblistingmodule/ApplicantProfile';

interface FilterPill {
  label: string;
  count: number;
  active?: boolean;
}

const filterPills: FilterPill[] = [
  { label: 'All', count: 80 },
  { label: 'Strong Fit', count: 8, active: true },
  { label: 'Good Fit', count: 16 },
  { label: 'Potential', count: 32 },
  { label: 'Consider', count: 16 },
  { label: 'Declined', count: 8 },
];

export default function JobApplicantsPage(): React.JSX.Element {
  const selectedApplicant = 0;

  return (
    <div className="flex w-full flex-col gap-0 px-0 py-0 bg-[#F8FAFC] min-h-[calc(100vh-180px)]">
      <div className="flex w-full gap-6 px-8 py-6">
        <div className="w-full max-w-xs flex-shrink-0">
          <ApplicantTabs />
          <div className="flex items-center gap-2 mt-2 mb-4">
{filterPills.map((pill) => (
              <button
                key={pill.label}
                className={`px-3 py-1 rounded-full text-xs font-medium border transition ${
                  pill.active ? 'bg-[#264AFF] text-white border-[#264AFF]' : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-100'
                }`}
              >
                {pill.label} {pill.count !== undefined && <span className="ml-1">({pill.count})</span>}
              </button>
            ))}
            <div className="flex-1" />
            <button className="ml-auto px-3 py-1 rounded-full border border-gray-300 text-xs font-medium text-gray-700 bg-white hover:bg-gray-100">
              Shortlist by filters
            </button>
          </div>
          <ApplicantList selected={selectedApplicant} />
        </div>
        <div className="flex-1 flex flex-col">
          <ApplicantProfile applicantIndex={selectedApplicant} />
        </div>
      </div>
    </div>
  );
}
