// app/components/Nav.js
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';
import { Menu } from 'lucide-react';

export default function Nav() {
  const { data: session, status } = useSession();
  const [open, setOpen] = useState(false);

  if (status === 'loading' || !session) {
    return null;
  }

  return (
    <nav className="bg-white shadow-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-800">🍕 Dash</div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link href="/HelloUser" className="text-gray-700 font-medium hover:text-blue-600 transition">
            Home
          </Link>
          <Link href="/Orders" className="text-gray-700 font-medium hover:text-blue-600 transition">
            Pizza Orders
          </Link>
        </div>

        {/* Session Info & Actions */}
        <div className="flex items-center space-x-4">
          <img
            src={session.user.image || '/default-avatar.png'}
            alt="profile"
            className="w-9 h-9 rounded-full object-cover border border-gray-300 shadow-sm"
          />
          <button
            onClick={() => signOut()}
            className="hidden md:inline-block bg-gray-500 hover:bg-red-600 font-bold text-white text-sm px-4 py-2 rounded-md transition"
          >
            Sign Out
          </button>
          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(o => !o)}
            className="md:hidden p-2 rounded-md hover:bg-gray-100 border border-gray-300"
          >
            <Menu className="w-6 h-6 text-gray-700" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-200 px-4 py-4 space-y-3">
          <Link
            href="/HelloUser"
            className="block text-base font-medium text-gray-700 hover:text-blue-600"
            onClick={() => setOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/Orders"
            className="block text-base font-medium text-gray-700 hover:text-blue-600"
            onClick={() => setOpen(false)}
          >
            Pizza Orders
          </Link>
          <button
            onClick={() => {
              setOpen(false);
              signOut();
            }}
            className="w-full text-left text-gray-700 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-md"
          >
            Sign Out
          </button>
        </div>
      )}
    </nav>
  );
}
