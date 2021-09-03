type tokenType = 'accessToken' | 'refreshToken';

export const getAuthToken = (type: tokenType): string => {
  return localStorage.getItem(type) || '';
}

export const setAuthToken = (type: tokenType, value?: string | undefined) => {
  if (value) {
    localStorage.setItem(type, value);
  } else {
    localStorage.removeItem(type);
  }
}