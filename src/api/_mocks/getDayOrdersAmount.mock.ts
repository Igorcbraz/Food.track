import { http, HttpResponse } from 'msw'

import { GetDaysOrdersAmountResponse } from '../getDayOrdersAmount'

export const getDayOrdersAmountMock = http.get<
  never,
  never,
  GetDaysOrdersAmountResponse
>('/metrics/day-orders-amount', () => {
  return HttpResponse.json({
    amount: 20,
    diffFromYesterday: -5,
  })
})
