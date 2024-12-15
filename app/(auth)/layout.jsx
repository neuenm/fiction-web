import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import Header from '@/components/header';

export default async function AuthLayout({ children }) {
  const cookieStore = cookies();
  const cookieStoreResult = await cookieStore;

  const token = cookieStoreResult.get('token');
  const user = cookieStoreResult.get('user');

  let userObject;
  if (user) {
    const userString = decodeURIComponent(user.value);
    userObject = JSON.parse(userString);
  }
  //if the user is not loged in, redirect to the login page
  if (!token) {
    redirect('/login');
  }

  return (
    <>
      <Header user={userObject} />
      {children}
    </>
  );
}
