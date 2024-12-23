'use client';

import React from 'react';
import { Input } from '@/components/ui/input';
import { LoadingButton } from '@/components/ui/loadingButton';
import { Form } from '@/components/ui/form';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/navigation';
import { useToast } from '@/hooks/use-toast';
import FormErrorMessage from '@/components/ui/formErrorMessage';

export default function LoginForm({ requestLogin }) {
  const router = useRouter();
  const schemaLogin = yup.object({
    email: yup.string().email('Formato invalido').required('Requerido'),
    password: yup.string().required('Requerido'),
  });

  const { toast } = useToast();

  const form = useForm({
    mode: 'onSubmit',
    resolver: yupResolver(schemaLogin),
  });

  const {
    formState: { isSubmitting, errors },
    register,
    handleSubmit,
  } = form;

  const handleLogin = async (values) => {
    try {
      const data = await requestLogin(values);
      if (data.accessToken) {
        document.cookie = `token=${data.accessToken}; path=/; SameSite=Strict; max-age=${30 * 60}`; //Expires in 30 minutes (the token is valid for 20 minutes in json-server)
        document.cookie = `user=${encodeURIComponent(
          JSON.stringify(data.user)
        )}; path=/; SameSite=Strict`;
        router.push('/books');
      }
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Algo salio mal',
        description: error.message,
      });
    }
  };

  return (
    <div className='flex flex-col w-96 mx-4 p-4 bg-white rounded-lg shadow-lg'>
      <Form {...form}>
        <form onSubmit={handleSubmit(handleLogin)}>
          <div className='flex flex-col space-y-4'>
            <Input {...register('email')} placeholder='Email' id='email' type='email' />
            {errors.email && <FormErrorMessage error={errors.email.message} />}

            <Input {...register('password')} placeholder='Password' id='password' type='password' />
            {errors.password && <FormErrorMessage error={errors.password.message} />}

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
