import { getTokenFormCookies } from '@Utils/manageCookies';
import { redirect } from 'next/navigation';

export default function Home() {
  const token = getTokenFormCookies();
  if (token) {
    redirect('/books');
  } else {
    redirect('/login');
  }
}
