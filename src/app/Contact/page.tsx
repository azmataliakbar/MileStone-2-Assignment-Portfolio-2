// src/app/contact/page.tsx
import Link from 'next/link';

export default function Contact() {
  return (
    <main className="flex flex-col items-center p-8 space-y-8 bg-black">
      <h1 className="text-4xl font-bold text-white animate-slideIn">Contact Me</h1>
      <p className="text-lg text-white text-center">
        Feel free to reach out for collaborations or job opportunities.
      </p>

      {/* General Information */}
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md glowing-border-2">
  <h2 className="text-2xl font-semibold mb-4 text-gray-700">Contact Information</h2>
  <ul className="space-y-2 text-gray-600">
    <li><strong>Name:</strong> Azmat Ali</li>
    <li><strong>Email:</strong> azmat36@yahoo.com</li>
    <li><strong>Email:</strong> azmat136@hotmail.com</li>
    <li><strong>Email:</strong> azmataliakbar@gmail.com</li>
    <li><strong>Phone:</strong> 00-92-333-2236799</li>
    <li><strong>WhatsApp:</strong> 00-92-333-2236799</li>
    <li>
      <strong>LinkedIn:</strong>
      <Link href="https://www.linkedin.com/in/azmat-ali-akbar-3246282b" target="_blank" className="text-blue-500 underline break-words">
        www.linkedin.com/in/azmat-ali-akbar-3246282b
      </Link>
    </li>
  </ul>
</div>


      <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
  <Link href="/">
    <button className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
      Home
    </button>
  </Link>
  <Link href="/About">
    <button className="w-full px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition">
      About Me
    </button>
  </Link>
</div>

      <h4 className="text-gray-500">Author: Azmat Ali</h4>
    </main>
  );
}
