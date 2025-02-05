import { api } from '@/lib/axios'

export interface GetMonthRevenueResponse {
  receipt: number
  diffFromLastMonth: number
}

export async function getMonthRevenue() {
  const responde = await api.get<GetMonthRevenueResponse>(
    '/metrics/month-receipt',
  )

  return responde.data
}
