import { Response } from 'superagent'

// фоматирование даты

export function dateFormate(date: Date) {
  return new Intl.DateTimeFormat('ru-Ru', {
    dateStyle: 'short',
    timeStyle: 'short',
  }).format(new Date(date))
}

// правильный урл

export const currentUrl = (str = '') => `/api/v1/admin/${str}`

// rewards

export function getRewardsBody({ body }: Response) {
  const { items, metadata } = body
  const { total_count } = metadata.pagination
  return { items, count: total_count }
}
