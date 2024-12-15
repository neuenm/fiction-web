import React from 'react';
import Image from 'next/image';
import { logo } from '@Public/images';
import { Col } from '@/components/col';
import { Row } from '@/components/row';

export default function page() {
  const handleRegister = () => {};

  return (
    <Row className='h-screen !gap-0'>
      <Col xs={12} md={6} className='flex items-center justify-center '>
        <Image src={logo} alt='Example' width={300} height={300} className='object-contain' />
      </Col>
      <Col xs={12} md={6} className='flex items-center justify-center md:h-screen h-52'>
        <h1>Listado de libros</h1>
      </Col>
    </Row>
  );
}
