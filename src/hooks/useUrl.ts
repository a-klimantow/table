import React from 'react'

type UrlType =
  | 'login'
  | 'withdrawal'
  | 'withdrawal-arbitrary'
  | `withdrawal/import${'yookassa' | 'webmoney'}`
  | `list/${'panels' | 'withdrawal-statuses' | 'payment-systems'}`

export const useUrl = (url: UrlType) =>
  React.useMemo(() => `/api/v1/admin/${url}`, [url])
