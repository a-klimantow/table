export interface IRequestItem {
  accept_requests: number
  all_requests: number
  all_requests_sum: number
  country: string
  old_requests: number
  old_requests_sum: number
  panel_name: string
}

export interface IAccrualItem {
  amount: number
  author_id: number
  count_rows: number
  created: Date
  file: {
    file_name: string
  }
  file_id: number
  id: number
}

export interface IListItem {
  common_name: string
  id: number
  name: string
}
