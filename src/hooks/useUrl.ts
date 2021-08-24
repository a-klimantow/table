import React from 'react'

const baseUrl =
  process.env.NODE_ENV === 'development'
    ? 'http://10.10.4.72:30101/v1/admin/'
    : '/api/v1/admin/'

export const useUrl = (url: string) =>
  React.useMemo(() => `${baseUrl}${url}`, [url])
