import { cookies } from 'next/headers';

const initCookies = async () => {
  const cookieStore = cookies();

  return await cookieStore;
};

export const getTokenFormCookies = async () => {
  const cookieStoreResult = await initCookies();

  return cookieStoreResult.get('token');
};

export const getUserFromCookies = async () => {
  const cookieStoreResult = await initCookies();

  return cookieStoreResult.get('user');
};
