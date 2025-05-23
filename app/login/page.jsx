'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Auth from '../components/Auth';

export default function HomePage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'authenticated') {
      router.push('/HelloUser'); // redirect to HelloUser
    }
  }, [status, router]);

  if (status === 'loading') {
    return <p className="text-center py-6">Loading...</p>;
  }

  if (!session) {
    return <Auth />;
  }

  // While redirecting after sign in
  return null;
}
