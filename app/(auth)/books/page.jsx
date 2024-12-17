import React from 'react';
import fetchWrapperServer from '@/lib/fetchWrapperServer';
import BookCard from '@/components/bookCard';

const fetchBooks = async () => {
  const response = await fetchWrapperServer({
    url: 'books',
    method: 'GET',
  });

  return response;
};

export default async function Page() {
  const books = await fetchBooks();

  return (
    <>
      <h2 className='h1-sm m-2'>Biblioteca</h2>

      <div className='container flex flex-wrap'>
        {books.map(({ image, title, author }, key) => (
          <BookCard image={image} title={title} author={author} key={key} />
        ))}
      </div>
    </>
  );
}
