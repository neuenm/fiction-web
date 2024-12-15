'use client';

import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/navigation';

export default function LoginForm() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const schemaLogin = yup.object({
    email: yup.string().email('Formato invalido').required('Requerido'),
    password: yup.string().required('Requerido'),
  });

  const form = useForm({
    mode: 'onChange',
    resolver: yupResolver(schemaLogin),
  });

  const {
    formState: { isSubmitting, isDirty, isValid },
    register,
    handleSubmit,
  } = form;

  const handleLogin = async (values) => {
    try {
      const response = await fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: values.email,
          password: values.password,
        }),
      });

      const data = await response.json();

      if (data.accessToken) {
        document.cookie = `token=${data.accessToken}; path=/; SameSite=Strict`;
        document.cookie = `user=${encodeURIComponent(
          JSON.stringify(data.user)
        )}; path=/; SameSite=Strict`;
        router.push('/books');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className='flex flex-col w-96 mx-4 p-4 bg-white rounded-lg shadow-lg'>
      <Form {...form}>
        <form onSubmit={handleSubmit(handleLogin)}>
          <div className='flex flex-col space-y-4'>
            <Input {...register('email')} placeholder='Email' id='email' type='email' />
            <Input {...register('password')} placeholder='Password' id='password' type='password' />
            <Button
              type='submit'
              variant='default'
              size='lg'
              className='w-full'
              loading={loading}
              disabled={loading}
            >
              Login
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
