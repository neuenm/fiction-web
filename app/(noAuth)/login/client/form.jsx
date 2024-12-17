'use client';

import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { LoadingButton } from '@/components/ui/loadingButton';
import { Form } from '@/components/ui/form';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/navigation';
import fetchWrapperServer from '@/lib/fetchWrapperServer';

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
      const data = await fetchWrapperServer({
        url: 'login',
        method: 'POST',
        body: {
          email: values.email,
          password: values.password,
        },
      });

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
            <LoadingButton
              type='submit'
              variant='default'
              size='lg'
              className='w-full'
              loading={isSubmitting}
            >
              Login
            </LoadingButton>
          </div>
        </form>
      </Form>
    </div>
  );
}
