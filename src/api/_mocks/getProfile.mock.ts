import { http, HttpResponse } from 'msw'

import { GetProfileResponse } from '../getProfile'

export const GetProfileMock = http.get<never, never, GetProfileResponse>(
  '/me',
  () => {
    return HttpResponse.json({
      id: 'custom-user-id',
      name: 'John Doe',
      email: 'johndoe@gmail.com',
      phone: '1234567890',
      role: 'manager',
      createdAt: new Date(),
      updatedAt: null,
    })
  },
)
