'use client';

import { signIn, signOut } from 'next-auth/react';
import React from 'react';
import { GoogleIcon } from '../../components/icons';

export function SignOut() {
  return (
    <button
      className="text-xs text-neutral-700 dark:text-neutral-300 mt-2 mb-6"
      onClick={() => signOut()}
    >
      → Sign out
    </button>
  );
}

export function SignIn() {
  return (
    <button
      className="flex bg-black text-neutral-200 px-4 py-3 rounded-md font-semibold text-sm mb-4 hover:text-white transition-all border border-gray-800"
      onClick={() => signIn('google')}
    >
      <GoogleIcon />
      <div className="ml-3">Sign in with Google</div>
    </button>
  );
}
