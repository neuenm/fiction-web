// pages/404.js
'use client';

import React from 'react';
import { logo } from '@/public/images';
import Image from 'next/image';
import LinkButton from '@/components/ui/linkButton';
const NotFoundPage = () => {
  return (
    <div className='flex justify-center items-center h-screen bg-primary text-white flex-col text-center'>
      <Image src={logo} alt='Example' width={300} height={300} className='object-contain' />
      <LinkButton variant='secondary' link={'/login'} text='Login' />

      <h1>404 - Página no encontrada</h1>
      <p>Lo sentimos, no pudimos encontrar la página que estás buscando.</p>
    </div>
  );
};

export default NotFoundPage;
