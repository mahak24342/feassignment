// app/components/Auth.js
'use client';

import { signIn } from 'next-auth/react';

export default function Auth() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-lg max-w-md w-full">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Welcome to Pizza Dashboard</h1>
        <p className="text-center text-gray-600 mb-8">Please sign in to continue</p>
        <button
          onClick={() => signIn('google')}
          className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-gray-500 hover:bg-gray-600 text-white font-medium rounded-lg transition-shadow shadow-md hover:shadow-lg"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 488 512"
            className="w-6 h-6"
          >
            <path
              fill="currentColor"
              d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123.4 24.3 168.5 64.1l-68.2 65.7C310.3 117.7 281 104 248 104c-88.2 0-160 71.8-160 160s71.8 160 160 160c79.8 0 139.9-55.1 149.6-126.7H248v-101.5h240z"
            />
          </svg>
          <span>Sign In with Google</span>
        </button>
      </div>
    </div>
  );
}
