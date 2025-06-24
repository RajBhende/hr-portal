'use client';

import React from 'react';
import Link from 'next/link';

type Job = {
  id: number;
  role: string;
  status: 'Live' | 'Closed';
  type: string;
  posted: string;
  due: string;
  applicants: number;
  needs: string;
  action: string;
  active: boolean;
};

const jobs: Job[] = [
  {
    id: 1,
    role: 'User Experience and Research Intern',
    status: 'Live',
    type: 'Internship',
    posted: '08.07.2024',
    due: '19.08.2024',
    applicants: 80,
    needs: '0 / 1',
    action: 'Review Applicants',
    active: true,
  },
  {
    id: 2,
    role: 'User Interface Design Intern',
    status: 'Live',
    type: 'Internship',
    posted: '08.07.2024',
    due: '19.08.2024',
    applicants: 260,
    needs: '0 / 4',
    action: 'Review Applicants',
    active: true,
  },
  {
    id: 3,
    role: 'Software Development',
    status: 'Closed',
    type: 'Full Time',
    posted: '08.11.2023',
    due: '08.02.2024',
    applicants: 620,
    needs: '4 / 4',
    action: 'Completed',
    active: false,
  },
  {
    id: 4,
    role: 'AI ML & Machine Learning Engineer',
    status: 'Closed',
    type: 'Internship',
    posted: '08.01.2024',
    due: '08.02.2024',
    applicants: 206,
    needs: '3 / 4',
    action: 'Completed',
    active: false,
  },
  {
    id: 5,
    role: 'AI ML & Machine Learning Engineer',
    status: 'Closed',
    type: 'Full Time',
    posted: '08.1.2023',
    due: '08.02.2024',
    applicants: 602,
    needs: '4 / 4',
    action: 'Completed',
    active: false,
  },
];

export default function JobListingPage(): React.JSX.Element {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-2 text-gray-800">Job Listing</h1>
      <p className="mb-4 text-gray-500">
        Here is your job listing from 3rd Nov 2023 to 17th Aug 2024
      </p>
      <div className="overflow-x-auto rounded-xl shadow bg-white">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="px-4 py-2 text-left font-semibold">Job Role</th>
              <th className="px-4 py-2 text-left font-semibold">Status</th>
              <th className="px-4 py-2 text-left font-semibold">Job Type</th>
              <th className="px-4 py-2 text-left font-semibold">Posted on</th>
              <th className="px-4 py-2 text-left font-semibold">Due Date</th>
              <th className="px-4 py-2 text-left font-semibold">Applicants</th>
              <th className="px-4 py-2 text-left font-semibold">Needs</th>
              <th className="px-4 py-2 text-left font-semibold">Action</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job) => {
              const isDisabled = !job.active;
              return (
                <tr key={job.id} className={`border-b last:border-0 ${isDisabled ? 'bg-gray-50' : ''}`}>
                  <td className={`px-4 py-2 flex items-center gap-2 ${isDisabled ? 'text-gray-400 font-medium' : 'text-gray-800 font-medium'}`}>
                    <img src="/file.svg" alt="logo" className="w-6 h-6" />
                    {job.role}
                  </td>
                  <td className="px-4 py-2">
                    <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${
                      job.status === 'Live' ? 'bg-green-100 text-green-700' : 'bg-gray-200 text-gray-500'
                    }`}>
                      {job.status}
                    </span>
                  </td>
                  <td className={`px-4 py-2 ${isDisabled ? 'text-gray-400' : 'text-gray-700'}`}>{job.type}</td>
                  <td className={`px-4 py-2 ${isDisabled ? 'text-gray-400' : 'text-gray-700'}`}>{job.posted}</td>
                  <td className={`px-4 py-2 ${isDisabled ? 'text-gray-400' : 'text-gray-700'}`}>{job.due}</td>
                  <td className={`px-4 py-2 ${isDisabled ? 'text-gray-400' : 'text-gray-700'}`}>{job.applicants}</td>
                  <td className={`px-4 py-2 ${isDisabled ? 'text-gray-400' : 'text-gray-800 font-semibold'}`}>{job.needs}</td>
                  <td className="px-4 py-2">
                    {job.active ? (
                      <Link href={`/job-listing/${job.id}`}>
                        <button className="bg-[#4F8FF0] text-white px-3 py-1 rounded font-semibold text-xs">
                          {job.action}
                        </button>
                      </Link>
                    ) : (
                      <button className="bg-gray-200 text-gray-500 px-3 py-1 rounded font-semibold text-xs cursor-not-allowed">
                        {job.action}
                      </button>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
