'use server';

import { getTokenFormCookies } from '@Utils/manageCookies';

const API_URL = process.env.PRIVATE_API_URL;

export default async function fetchWrapperServer({ url, method, body = null, options = {} }) {
  const token = await getTokenFormCookies();
  const headers = new Headers();

  if (token) {
    headers.append('AccessToken', `Bearer ${token}`);
  }
  headers.append('Content-Type', 'application/json');

  body = body && JSON.stringify(body);

  try {
    const response = await fetch(`${API_URL}/${url}`, {
      headers,
      method,
      body,
      ...options,
    });

    if (!response.ok) {
      const resp = await response.json();

      throw resp.error;
    }

    return response.json();
  } catch (error) {
    throw error?.message ? error : new Error(`Request failed`);
  }
}
