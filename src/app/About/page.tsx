// src/app/about/page.tsx
import Link from 'next/link';

export default function About() {
  return (
    <div className="flex flex-col items-center p-8 space-y-8">
      <h1 className="text-4xl font-bold text-white animate-slideIn">About Me</h1>
      <p className="text-lg text-white text-center">
        I am an Electrical Engineer with a passion for working with HV Power Stations & HV Power Sub Stations.
      </p>
      <p className="text-lg text-white text-center">
        I am also an App & Web developer with a passion for creating beautiful and functional apps & websites.
      </p>

      {/* General Information */}
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md glowing-border">
        <h2 className="text-2xl font-semibold text-black mb-4">General Information</h2>
        <ul className="space-y-2 text-black">
          <li><strong>Name:</strong> Azmat Ali</li>
          <li><strong>Profession:</strong> Electrical Engineer (Power)</li>
          <li><strong>Profession:</strong> Software Engineer</li>
          <li><strong>Nationality:</strong> Pakistani</li>
        </ul>
      </div>

      {/* Education Section */}
      <div className="w-full max-w-2xl space-y-6 ">
        <div className="bg-white shadow-md rounded-lg p-6 glowing-border-2 mt-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Education 1</h2>
          <ul className="space-y-2 text-gray-600">
            <li>High School: 1978, Ist Division Marks, Karachi, Pakistan</li>
            <li>DAE Electrical: 1984, Ist Division Marks, Karachi, Pakistan</li>
            <li>Note: Attended many seminars & training courses during job</li>
          </ul>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 glowing-border-2">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Education 2</h2>
          <ul className="space-y-2 text-gray-600">
            <li>Enrolled in: GIAIC IT program, Batch-1</li>
            <li>January 2024, Karachi, Pakistan</li>
            <li>GIAIC IT Program: AI, Metaverse, Web 3.0 (In Progress)</li>
            <li>1st Quarter: Passed with grade <strong>&#39;A&#39;</strong>, August 2024</li>
          </ul>
        </div>
      </div>

      {/* Experience Section */}
      <div className="w-full max-w-2xl space-y-6">
        <div className="bg-white shadow-md rounded-lg p-6 mt-8 mb-12 glowing-border-3">
          <h2 className="text-2xl font-semibold text-gray-700 mb-10 ">Experience</h2>
          <ul className="space-y-2 text-gray-600">
            <li>Mangla Hydro Power Station (Pakistan): 4 Years Experience</li>
            <li>1st Position in Basic Operation Training at Mangla Hydro Power Station</li>
            <li>National Power Control Center (Pakistan): 3 Years Experience</li>
            <li>National Grid (Saudi Arabia): 30 Years Experience</li>
            <li>Employee of the Year at National Grid (Saudi Arabia), 2008</li>
          </ul>
        </div>

        {/* Skills Section */}
        <div className="bg-white shadow-md rounded-lg p-6 space-y-4 glowing-border-3">
          <h2 className="text-2xl font-semibold text-gray-700">Skills</h2>
          <div className="space-y-3">
            <div className="flex items-center space-x-4">
              <span className="text-gray-700">HTML 80%</span>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-red-400 h-2 rounded-full w-[80%]  "></div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-gray-700">CSS 60%</span>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-purple-400 h-2 rounded-full w-[60%]"  ></div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-gray-700">Tailwind CSS 50%</span>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full w-[50%]"></div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-gray-700">TypeScript 60%</span>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-pink-400 h-2 rounded-full w-[60%]"></div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-gray-700">Next.js 60%</span>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-400 h-2 rounded-full w-[60%]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
  <Link href="/">
    <button className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
      Home
    </button>
  </Link>
  <Link href="/Contact">
    <button className="w-full px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition">
      Contact Me
    </button>
  </Link>
</div>

      <h4 className="text-gray-500">Author: Azmat Ali</h4>
    </div>
  );
}
