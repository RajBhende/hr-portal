import React from 'react';

type ResumeCVProps = {
  linkedin?: string;
  portfolio?: string;
};

export default function ResumeCV({ linkedin, portfolio }: ResumeCVProps): React.JSX.Element {
  return (
    <div className="bg-white rounded-xl p-0">
      <div className="flex items-center justify-between px-6 pt-6">
        <div className="font-bold text-lg text-gray-800">Resume / CV</div>
        <div className="flex gap-2">
          {linkedin && (
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-gray-700 hover:text-[#4F8FF0] font-medium"
            >
              LinkedIn
            </a>
          )}
          {portfolio && (
            <a
              href={portfolio}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-gray-700 hover:text-[#4F8FF0] font-medium"
            >
              Portfolio
            </a>
          )}
        </div>
      </div>

      <div className="px-6 pb-6">
        <table className="w-full text-sm mb-4 mt-2">
          <thead>
            <tr className="text-left text-gray-700 font-semibold">
              <th>Institute</th>
              <th>CGPA / %</th>
              <th>Year</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-gray-800">
              <td>IIT Hyderabad</td>
              <td>8.82</td>
              <td>2025</td>
            </tr>
            <tr className="text-gray-800">
              <td>IIT Hyderabad (Minor in Entrepreneurship)</td>
              <td>8.50</td>
              <td>2025</td>
            </tr>
            <tr className="text-gray-800">
              <td>Jawahar Navodaya Vidyalaya, Jajpur (XII)</td>
              <td>86%</td>
              <td>2020</td>
            </tr>
            <tr className="text-gray-800">
              <td>Jawahar Navodaya Vidyalaya, Jajpur (X)</td>
              <td>87.6%</td>
              <td>2018</td>
            </tr>
          </tbody>
        </table>

        <div>
          <div className="font-semibold mb-1 text-gray-800">Work Experience</div>
          <div className="text-sm text-gray-800">
            Suzuki Innovation Center (SIC) / Visual Designer
            <br />
            July 2023 - October 2023
          </div>
          <div className="text-xs text-gray-700 mt-1">
            Worked on practical solutions for real-world problems, with a strong emphasis on usability and design.
          </div>
        </div>
      </div>
    </div>
  );
}
