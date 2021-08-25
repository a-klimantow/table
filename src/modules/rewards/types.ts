interface IMetadata {
  pagination: {
    total_count: number
  }
}

export interface IResponse<I> {
  items: I[]
  metadata: IMetadata
}

export interface IBidItem {
  accept_requests: number
  all_requests: number
  all_requests_sum: number
  country: string
  old_requests: number
  old_requests_sum: number
  panel_name: string
}

export interface IProfitItem {
  amount: number
  author_id: number
  count_rows: number
  created: Date
  file_id: number
  file_name: string
  id: number
}
