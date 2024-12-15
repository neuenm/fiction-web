import React from 'react';
import LoginForm from './client/form';
import Image from 'next/image';
import { logo } from '@Public/images';
import { Col } from '@/components/col';
import { Row } from '@/components/row';

export default function page() {
  return (
    <Row className='h-screen !gap-0'>
      <Col xs={12} md={6} className='flex items-center justify-center '>
        <Image src={logo} alt='Example' width={300} height={300} className='object-contain' />
      </Col>
      <Col xs={12} md={6} className='flex items-center justify-center md:h-screen h-52'>
        <LoginForm />
      </Col>
    </Row>
  );
}
