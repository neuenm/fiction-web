import React from 'react';
import Image from 'next/image';
import LinkButton from '@/components/ui/linkButton';

export default function BookCard({ book: { id, image, title, author } }) {
  return (
    <div className='relative w-full sm:w-64 bg-white shadow-md hover:shadow-xl rounded-md overflow-hidden border border-gray-200 m-2 group focus-within:ring focus-within:ring-gray-300'>
      <div className='relative w-full h-96 md:h-80 overflow-hidden'>
        <Image
          src={image}
          alt='Book Cover'
          width={256}
          height={320}
          className='absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 group-focus-within:scale-110'
        />
      </div>
      <div className='p-4 h-20'>
        <h3 className='text-lg font-semibold text-gray-800 truncate'>{title}</h3>
        <p className='text-sm text-gray-500 truncate'>Autor: {author}</p>
      </div>
      <div className='absolute inset-0 bg-gray-800 bg-opacity-50 opacity-0 flex items-center justify-center transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100 pointer-events-none group-hover:pointer-events-auto group-focus-within:pointer-events-auto'>
        <LinkButton link={`/books/${id}`} text='Leer este libro' variant='secondary' size='lg' />
      </div>
    </div>
  );
}
