"use client";
import Image from 'next/image';
import Link from 'next/link';
import { HomeIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/app/context/authContext'; 



export default function LoginPage() {

    const router = useRouter();
  const { login } = useAuth();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate successful login (replace with real API logic)
    login();
    router.push('/');
  };

  return (
    <main className="min-h-screen grid grid-cols-1 pt-16 md:grid-cols-2">
      {/* Left side */}
      <div className="relative bg-[var(--primary-color)] flex items-center justify-center p-6"
      style={{
            backgroundColor: "#a1007e",
            backgroundRepeat: 'repeat',
            backgroundSize: 'auto',
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='152' height='152' viewBox='0 0 152 152'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='temple' fill='%23cc4fa8' fill-opacity='0.21'%3E%3Cpath d='M152 150v2H0v-2h28v-8H8v-20H0v-2h8V80h42v20h20v42H30v8h90v-8H80v-42h20V80h42v40h8V30h-8v40h-42V50H80V8h40V0h2v8h20v20h8V0h2v150zm-2 0v-28h-8v20h-20v8h28zM82 30v18h18V30H82zm20 18h20v20h18V30h-20V10H82v18h20v20zm0 2v18h18V50h-18zm20-22h18V10h-18v18zm-54 92v-18H50v18h18zm-20-18H28V82H10v38h20v20h38v-18H48v-20zm0-2V82H30v18h18zm-20 22H10v18h18v-18zm54 0v18h38v-20h20V82h-18v20h-20v20H82zm18-20H82v18h18v-18zm2-2h18V82h-18v18zm20 40v-18h18v18h-18zM30 0h-2v8H8v20H0v2h8v40h42V50h20V8H30V0zm20 48h18V30H50v18zm18-20H48v20H28v20H10V30h20V10h38v18zM30 50h18v18H30V50zm-2-40H10v18h18V10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}
      >
        <Link href="/" className="absolute top-6 left-6">
          <HomeIcon className="h-10 w-10 text-white" />
        </Link>
        <Image
          src="/logos/WhiteMployusRecruitmentLogo2.png"
          alt="Mployus Logo"
          width={220}
          height={80}
          className="object-contain"
        />
      </div>

      {/* Right side */}
      <div className="flex items-center justify-center px-6 py-12 bg-white">
        <div className="w-full max-w-sm">
          <h3 className="text-2xl font-semibold text-center text-[var(--primary-color)] mb-8">Login</h3>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email:
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
              />
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password:
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
              />
            </div>

            {/* Forgot password */}
            <div className="text-right">
              <Link href="#" className="text-sm text-[var(--primary-color)] hover:underline">
                Forgot Password
              </Link>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[var(--primary-color)] hover:bg-(--primary-400) text-white font-medium py-2.5 rounded-md transition"
            >
              Login
            </button>
          </form>

          {/* Register */}
          <p className="text-sm text-center text-gray-700 mt-6">
            Don’t have an account?{' '}
            <Link href="/auth/signup" className="text-[var(--primary-color)] font-medium hover:underline">
              Register
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}