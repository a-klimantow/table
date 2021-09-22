import React from 'react'

type UrlType =
  | 'login'
  | 'withdrawal'
  | 'withdrawal-arbitrary'
  | `withdrawal/import${'yookassa' | 'webmoney'}`

export const useUrl = (url: UrlType) =>
  React.useMemo(() => `/api/v1/admin/${url}`, [url])
