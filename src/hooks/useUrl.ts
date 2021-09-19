import React from 'react'

const baseURL =
  process.env.NODE_ENV === 'production' ? '/api/v1/admin/' : '/api/v1/admin/'

type UrlType = 'withdrawal'

export const useUrl = (url: UrlType) =>
  React.useMemo(() => `${baseURL}${url}`, [url])
