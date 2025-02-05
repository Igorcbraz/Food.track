import { http, HttpResponse } from 'msw'

import { GetManagedRestaurantResponse } from '../getManagedRestaurant'

export const GetManagedRestaurantMock = http.get<
  never,
  never,
  GetManagedRestaurantResponse
>('/managed-restaurant', () => {
  return HttpResponse.json({
    id: 'custom-restaurant-id',
    name: 'Food Track',
    description: 'Managed restaurant description',
    managerId: 'custom-manager-id',
    createdAt: new Date(),
    updatedAt: null,
  })
})
