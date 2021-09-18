export const RequestPage = () => <div>RequestPage</div>
export const ReportsPage = () => <div>ReportsPage</div>
export const AccrualPage = () => <div>AccrualPage</div>

export const pages = {
  requests: RequestPage,
  reports: ReportsPage,
  accrual: AccrualPage,
}

export type RewardsPageType = keyof typeof pages
