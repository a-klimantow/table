import { ICol as C, IData as I } from './types'

export const columns: C[] = [
  { name: 'Страна', key: 'country' },
  { name: 'Наименование колонки', key: 'panel_name' },
  { name: 'Наименование колонки', key: 'panel_name' },
  { name: 'Наименование колонки', key: 'panel_name' },
  { name: 'Наименование колонки', key: 'panel_name' },
  { name: 'Наименование колонки', key: 'panel_name' },
  { name: 'Наименование колонки', key: 'panel_name' },
  { name: 'Наименование колонки', key: 'panel_name' },
  { name: 'Наименование колонки', key: 'panel_name' },
  { name: 'Наименование колонки', key: 'panel_name' },
  { name: 'Наименование колонки', key: 'panel_name' },
  { name: 'Страна', key: 'country' },
]

export const data: I[] = Array(100).fill({
  panel_name: 'Экспертное мнение',
  country: 'RussionFedefatin',
})
