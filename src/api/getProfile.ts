import { api } from '@/lib/axios'

export interface GetProfileResponse {
  id: string
  email: string
  name: string
  phone: string
  role: 'manager' | 'customer'
  createdAt: Date | null
  updatedAt: Date | null
}

export async function getProfile() {
  const response = await api.get<GetProfileResponse>('/me')

  return response.data
}
