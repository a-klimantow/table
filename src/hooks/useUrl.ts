import React from 'react'

type UrlType = 'login' | 'withdrawal'

export const useUrl = (url: UrlType) =>
  React.useMemo(() => `/api/v1/admin/${url}`, [url])
