'use client';

import React from 'react';

import { useRouter } from 'next/navigation';

const Header = ({ user }) => {
  const route = useRouter();

  const handleLogout = () => {
    document.cookie = 'token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;';
    document.cookie = 'user=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;';
    route.push('/login');
  };
  return (
    <div>
      <p onClick={handleLogout}> Logout {user.email}</p>
    </div>
  );
};

export default Header;
