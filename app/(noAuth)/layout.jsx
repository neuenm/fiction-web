import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default async function AuthLayout({ children }) {
  const cookieStore = cookies();
  const cookieStoreResult = await cookieStore;

  const token = cookieStoreResult.get('token');
  //if the user is loged in, redirect to the books page
  if (token) {
    redirect('/books');
  }

  return <>{children}</>;
}
