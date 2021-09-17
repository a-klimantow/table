import React from 'react'

const baseURL =
  process.env.NODE_ENV === 'production' ? '/api/v1/admin/' : '/api/v1/admin/'

export const useUrl = (url: string) =>
  React.useMemo(() => `${baseURL}${url}`, [url])
