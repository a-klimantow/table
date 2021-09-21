import React from 'react'

type UrlType = 'login' | 'withdrawal' | 'withdrawal-arbitrary'

export const useUrl = (url: UrlType) =>
  React.useMemo(() => `/api/v1/admin/${url}`, [url])
