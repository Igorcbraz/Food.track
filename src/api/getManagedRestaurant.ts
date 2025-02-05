import { api } from '@/lib/axios'

export interface GetManagedRestaurantResponse {
  id: string
  managerId: string
  name: string
  description: string | null
  createdAt: Date | null
  updatedAt: Date | null
}

export async function GetManagedRestaurant() {
  const response = await api.get<GetManagedRestaurantResponse>(
    '/managed-restaurant',
  )

  return response.data
}
