import React from 'react'

// логин
type Login = 'login'

// списки (панели, статусы, платежные системы)
type Lists = `list/${'panels' | 'export-withdrawal-statuses' | 'payment-systems'}`

// выплаты, начисления
type Rewards =
  | 'withdrawal' // выплаты
  | 'withdrawal-arbitrary' // начисления
  | `withdrawal/import${'yookassa' | 'webmoney'}` // импорт
  | `withdrawal/${'exportwebmoney' | 'exportyookassa'}` // экспорт

// все
type UrlType = Login | Rewards | Lists

export const useUrl = (url: UrlType) =>
  React.useMemo(() => `/api/v1/admin/${url}`, [url])
