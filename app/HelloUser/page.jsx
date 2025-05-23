'use client';

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Nav from "../components/Nav";

export default function Hello() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!session && status !== 'loading') {
      router.push('/login');
    }
  }, [session, status]);

  if (status === "loading") return <p className="text-center py-6">Loading...</p>;

  return (
<>


    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold">Hello, {session?.user?.name}!</h1>
      <p className="mt-4 text-lg">Welcome to your dashboard.</p>
    </div>
    </>
  );
}
