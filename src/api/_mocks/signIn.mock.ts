import { http, HttpResponse } from 'msw'

import { SignInBody } from '../signIn'

export const signInMock = http.post<never, SignInBody>(
  '/authenticate',
  async ({ request }) => {
    const { email } = await request.json()
    const testEmail = 'johndoe@gmail.com'

    if (email === testEmail) {
      return new HttpResponse(null, {
        status: 200,
        headers: {
          'Set-Cookie': 'auth=sample-jwt',
        },
      })
    }

    return new HttpResponse(null, { status: 401 })
  },
)
