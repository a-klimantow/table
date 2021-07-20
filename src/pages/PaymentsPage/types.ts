export interface IPaymentPanels {
  panels: string[]
}

export interface IPaymentSystems {
  paymentSystems: string[]
}

export interface IPaymentsPage {
  panels: IPaymentPanels
  paymentSystems: IPaymentSystems
}
