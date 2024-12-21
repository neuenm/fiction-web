'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const LinkButton = ({ link, text, variant, size }) => {
  return (
    <Link href={link}>
      <Button variant={variant} size={size}>
        {text}
      </Button>
    </Link>
  );
};

export default LinkButton;
