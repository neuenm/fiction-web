'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import Image from 'next/image';
import { userProfile, logoMinimal } from '@Public/images';
import Link from 'next/link';

const Header = ({ user }) => {
  const route = useRouter();

  const handleLogout = () => {
    document.cookie = 'token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;';
    document.cookie = 'user=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;';
    route.push('/login');
  };

  return (
    <header className='w-full bg-primary p-4 sticky top-0 left-0 right-0 z-10 h-20 flex'>
      <div className='container mx-auto flex justify-between'>
        <Link href='/' className='flex items-center m-2'>
          <Image
            src={logoMinimal}
            alt='fiction express logo'
            width={50}
            height={50}
            className='object-contain rounded-sm'
          />
        </Link>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Image
              src={userProfile}
              alt='profile-avatar'
              width={50}
              height={50}
              className='object-contain rounded-full cursor-pointer'
            />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>{user.email}</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={handleLogout}>Salir</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default Header;
