import { redirect } from 'next/navigation';
import { getTokenFormCookies } from '@Utils/manageCookies';

export default async function AuthLayout({ children }) {
  const token = await getTokenFormCookies();

  //if the user is loged in, redirect to the books page
  if (token) {
    redirect('/books');
  }

  return <>{children}</>;
}
