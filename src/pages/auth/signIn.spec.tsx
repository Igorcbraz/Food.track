import { QueryClientProvider } from '@tanstack/react-query'
import { render } from '@testing-library/react'
import { HelmetProvider } from 'react-helmet-async'
import { MemoryRouter } from 'react-router'

import { queryClient } from '@/lib/reactQuery'

import { SignIn } from './signIn'

describe('SignIn', () => {
  it('should set default email input valie if email is present on search params', () => {
    const testEmail = 'johndoe@gmail.com'

    const wrapper = render(<SignIn />, {
      wrapper: ({ children }) => {
        return (
          <HelmetProvider>
            <MemoryRouter initialEntries={[`/sign-in?email=${testEmail}`]}>
              <QueryClientProvider client={queryClient}>
                {children}
              </QueryClientProvider>
            </MemoryRouter>
          </HelmetProvider>
        )
      },
    })

    const emailInput = wrapper.getByLabelText('Seu e-mail') as HTMLInputElement

    expect(emailInput.value).toEqual(testEmail)
  })
})
