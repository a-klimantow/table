interface IMetadata {
  pagination: {
    total_count: number
  }
}

interface IResponse<I> {
  total_count: number
  items: I[]
  metadata: IMetadata
}

interface IBidItem {
  accept_requests: number
  all_requests: number
  all_requests_sum: number
  country: string
  old_requests: number
  old_requests_sum: number
  panel_name: string
}

export type BidResType = IResponse<IBidItem>
