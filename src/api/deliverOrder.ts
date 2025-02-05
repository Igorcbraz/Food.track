import { api } from '@/lib/axios'

export interface DeliverOrderParams {
  orderId: string
}

export async function deliverOrder({ orderId }: DeliverOrderParams) {
  return await api.patch(`/orders/${orderId}/deliver`)
}
