'use client';

import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import ReaderContainer from '../server/readerContainer';
import PapperContainer from '../server/papperContainer';
import BookMetrics from './bookMetrics';

export default function BookReader({ pages }) {
  const [currentPage, setCurrentPage] = useState(0);
  const [prevPage, setPrevPage] = useState(0);
  const [timePerPage, setTimePerPage] = useState([]);
  const [timeStartPage, setTimeStartPage] = useState(new Date().getTime());
  const [viewMetrics, setViewMetrics] = useState(false);

  const totalPagesCount = pages.length;

  useEffect(() => {
    metricsCalculation(currentPage);
  }, [currentPage]);

  const metricsCalculation = (currentPage) => {
    if (currentPage != 0 || (currentPage == 0 && timePerPage[0])) {
      const timeElapsed = new Date().getTime() - timeStartPage;
      setTimePerPage((prevTimePage) => {
        const prevTimePageCopy = [...prevTimePage];
        prevTimePageCopy[prevPage] = (prevTimePageCopy[prevPage] ?? 0) + timeElapsed;
        return prevTimePageCopy;
      });

      setTimeStartPage(new Date().getTime());
    }
  };

  const DisplayCurrentPage = ({ page }) => (
    <div className='max-w-full overflow-y-auto'>
      <p className='text-xl font-serif text-center whitespace-normal'>{page}</p>
    </div>
  );

  const DisplayPageCounter = () => (
    <p className='text-xl font-serif text-center'>{`${currentPage + 1} de ${totalPagesCount}`}</p>
  );

  const PreviousPageButton = () => (
    <Button
      className='absolute h-full left-0 '
      variant='secondaryLight'
      size='icon'
      onClick={() => {
        setCurrentPage((prevPage) => {
          setPrevPage(prevPage);
          return prevPage - 1;
        });
      }}
    >
      <span className='material-icons'>chevron_left</span>
    </Button>
  );

  const NextPageButton = () => (
    <Button
      className='absolute h-full right-0 '
      variant='secondaryLight'
      size='icon'
      onClick={() => {
        setCurrentPage((prevPage) => {
          setPrevPage(prevPage);
          return prevPage + 1;
        });
      }}
    >
      <span className='material-icons'>chevron_right</span>
    </Button>
  );

  const ViewMetricButton = () => (
    <Button
      className='absolute h-full right-0 flex items-center justify-center'
      variant='success'
      size='icon'
      onClick={() => {
        setCurrentPage((prevPage) => {
          setPrevPage(prevPage);
          return prevPage + 1;
        });
        setViewMetrics(true);
      }}
    >
      <span className='vertical-text'>
        {'VER METRICAS'.split('').map((char, index) => (
          <span key={index} className='letter'>
            {char === ' ' ? '\u00A0' : char}
          </span>
        ))}
      </span>
    </Button>
  );

  if (viewMetrics) {
    return (
      <ReaderContainer>
        <BookMetrics readingTimes={timePerPage} />
      </ReaderContainer>
    );
  }

  return (
    <ReaderContainer>
      {currentPage > 0 && <PreviousPageButton />}
      <PapperContainer>
        <div />
        <DisplayCurrentPage page={pages[currentPage]} />
        <DisplayPageCounter />
      </PapperContainer>
      {currentPage < totalPagesCount - 1 && <NextPageButton />}
      {currentPage === totalPagesCount - 1 && <ViewMetricButton />}
    </ReaderContainer>
  );
}
