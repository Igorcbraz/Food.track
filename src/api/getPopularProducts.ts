import { api } from '@/lib/axios'

export type GetPopularProductsResponse = {
  product: string
  amount: number
}[]

export async function getPopularProducts() {
  const responde = await api.get<GetPopularProductsResponse>(
    '/metrics/popular-products',
  )

  return responde.data
}
