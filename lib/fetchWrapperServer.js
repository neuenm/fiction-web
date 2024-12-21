'use server';

import { getTokenFormCookies } from '@Utils/manageCookies';

// eslint-disable-next-line
const API_URL = process.env.PRIVATE_API_URL;

export default async function fetchWrapperServer({ url, method, body = null }) {
  const token = await getTokenFormCookies();
  const headers = new Headers();

  if (token?.value) {
    headers.append('Authorization', `Bearer ${token.value}`);
  }
  headers.append('Content-Type', 'application/json');

  body = body && JSON.stringify(body);

  try {
    const response = await fetch(`${API_URL}/${url}`, {
      headers,
      method,
      body,
    });

    if (!response.ok) {
      const resp = await response.json();

      throw resp;
    }

    return response.json();
  } catch (error) {
    throw error ?? new Error(`Request failed`);
  }
}
