'use client';

import React from 'react';

interface Applicant {
  name: string;
  role: string;
  jobType: string;
  uploads: number;
  appliedOn: string;
  status: string;
  score: number;
}

interface ApplicantModalProps {
  applicant: Applicant;
  onClose: () => void;
}

export default function ApplicantModal({ applicant, onClose }: ApplicantModalProps) {
  if (!applicant) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md p-6">
        <h2 className="text-xl font-semibold mb-4">Applicant Details</h2>

        <p><strong>Name:</strong> {applicant.name}</p>
        <p><strong>Role:</strong> {applicant.role}</p>
        <p><strong>Job Type:</strong> {applicant.jobType}</p>
        <p><strong>Uploads:</strong> {applicant.uploads}</p>
        <p><strong>Applied On:</strong> {applicant.appliedOn}</p>
        <p><strong>Status:</strong> {applicant.status}</p>
        <p><strong>Score:</strong> {applicant.score}</p>

        <button
          onClick={onClose}
          className="mt-6 w-full bg-[#4F8FF0] hover:bg-[#3B77D3] text-white px-4 py-2 rounded-md text-sm"
        >
          Close
        </button>
      </div>
    </div>
  );
}
