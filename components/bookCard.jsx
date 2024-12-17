import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function BookCard({ image, title, author }) {
  return (
    <div className='relative w-full sm:w-64 bg-white shadow-md hover:shadow-xl rounded-md overflow-hidden border border-gray-200 m-2 group'>
      <div className='relative w-full h-96 md:h-80 overflow-hidden'>
        <Image
          src={image}
          alt='Book Cover'
          width={256}
          height={320}
          className='absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 group-hover:w-full group-hover:h-full'
        />
      </div>
      <div className='p-4 h-20'>
        <h3 className='text-lg font-semibold text-gray-800 truncate'>{title}</h3>
        <p className='text-sm text-gray-500 truncate'>Autor: {author}</p>
      </div>
      <div className='absolute inset-0 bg-gray-800 bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300'>
        <Button variant='secondary' size='lg'>
          Leer este libro
        </Button>
      </div>
    </div>
  );
}
