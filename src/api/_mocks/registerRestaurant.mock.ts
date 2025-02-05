import { http, HttpResponse } from 'msw'

import { RegisterRestaurantBody } from '../registerRestaurant'

export const registerRestaurantMock = http.post<never, RegisterRestaurantBody>(
  '/restaurants',
  async ({ request }) => {
    const { restaurantName } = await request.json()
    const testName = 'Food Track'

    if (restaurantName === testName) {
      return new HttpResponse(null, { status: 201 })
    }

    return new HttpResponse(null, { status: 400 })
  },
)
