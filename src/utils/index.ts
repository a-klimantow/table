import { Response } from 'superagent'

// фоматирование даты

export function dateFormate(date: string) {
  return new Intl.DateTimeFormat('ru-Ru', {
    dateStyle: 'short',
    timeStyle: 'short',
  }).format(new Date(date))
}

// фоматирование чисел

export function numberFormate(num: number) {
  return new Intl.NumberFormat('ru-Ru').format(num)
}

// правильный урл

export const currentUrl = (str = '') => `/api/v1/admin/${str}`

// rewards

export function getRewardsBody({ body }: Response) {
  const { items, metadata } = body
  const { total_count } = metadata.pagination
  return { items, count: total_count }
}

// validation
type T = 'email' | 'password'
export function validation(type: T, str: string, reg?: RegExp): boolean {
  const value = str.trim()

  switch (type) {
    case 'email':
      return /^.+@.+\..{2,}$/.test(value)
    case 'password':
      return /.{6}/.test(value)
    default:
      if (!reg) console.warn(`type: ${type}, reg: ${reg}`)

      return reg?.test(value) ?? false
  }
}
