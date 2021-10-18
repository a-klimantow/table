import React from 'react'

// логин
type Login = 'login' | 'login/refresh'

// списки (панели, статусы, платежные системы)
type Lists = `list/${'panels' | 'export-withdrawal-statuses' | 'payment-systems'}`

// выплаты, начисления, отчеты
type Rewards =
  | 'withdrawal' // выплаты
  | 'withdrawal-arbitrary' // начисления
  | 'withdrawal-report' // отчеты
  | `withdrawal/import${'yookassa' | 'webmoney'}` // импорт
  | `withdrawal/${'exportwebmoney' | 'exportyookassa'}` // экспорт

// все
type UrlType = Login | Rewards | Lists

export const useUrl = (url: UrlType) =>
  React.useMemo(() => `/api/v1/admin/${url}`, [url])
