import { Response } from 'superagent'

export interface IResponse<I> extends Response {
  body: {
    items: I[]
    metadata: {
      pagination: {
        total_count: number
      }
    }
  }
}

// **************** rewards (вознагдаждения)

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

export interface IReportItem {
  amount: number
  currency_name: string
  panel_name: string
  payment_type_name: string
  processed_date: Date
  total_success_requests: number
}

// **************** lists (списки)

export interface IListItem {
  common_name: string
  id: number
  name: string
}
