import React from 'react'

export const useUrl = (url: string) =>
  React.useMemo(() => `/api/v1/admin/${url}`, [url])
