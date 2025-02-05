import { http, HttpResponse } from 'msw'

import { UpdateProfileBody } from '../updateProfile'

export const UpdateProfileMock = http.put<never, UpdateProfileBody>(
  '/profile',
  async ({ request }) => {
    const { name } = await request.json()
    const testName = 'Another Name'

    if (name === testName) {
      return new HttpResponse(null, { status: 201 })
    }

    return new HttpResponse(null, { status: 400 })
  },
)
