import { redirect } from 'next/navigation';
import Header from '@/components/header';
import { getTokenFormCookies, getUserFromCookies } from '@Utils/manageCookies';

export default async function AuthLayout({ children }) {
  const token = await getTokenFormCookies();
  const user = await getUserFromCookies();

  let userObject;
  if (user) {
    const userString = decodeURIComponent(user.value);
    userObject = JSON.parse(userString);
  }

  // if the user is not loged in, redirect to the login page
  if (!token || !token.value) {
    redirect('/login');
  }

  return (
    <>
      <Header user={userObject} />
      <div className='flex justify-center align-center bg-primary-100 min-h-[calc(100vh-5rem)]   '>
        <div className='container'>{children}</div>
      </div>
    </>
  );
}
