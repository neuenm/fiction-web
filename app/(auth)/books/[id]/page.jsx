import React from 'react';
import fetchWrapperServer from '@/lib/fetchWrapperServer';
import BookReader from '../components/client/bookReader';
import Link from 'next/link';

const fetchBook = async (bookId) => {
  const response = await fetchWrapperServer({
    url: `660/books/${bookId}`,
    method: 'GET',
  });

  return response;
};

export default async function Page({ params }) {
  const { id: bookId } = await params;
  const { pages, title, author } = await fetchBook(bookId);

  return (
    <>
      <Link href='/books' className='flex items-center m-2'>
        <span className='material-icons'>arrow_back_ios</span>
        <p className='h4 ml-1'> Biblioteca</p>
      </Link>
      <h2 className='h1-sm m-2 text-center'>{title}</h2>
      <h3 className='h3 m-2 text-center text-gray-600 font-medium italic'>{author}</h3>

      <BookReader pages={pages} />
    </>
  );
}
