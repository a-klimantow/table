import React from 'react'

export const useUrl = (url: string) =>
  React.useMemo(() => `/v1/admin/${url}`, [url])
