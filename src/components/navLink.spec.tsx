import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router'

import { NavLink } from './navLink'

describe('NavLink', () => {
  it('should highlight the nav link when the current route matches the link', () => {
    const wrapper = render(
      <>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
      </>,
      {
        wrapper: ({ children }) => {
          return (
            <MemoryRouter initialEntries={['/about']}>{children}</MemoryRouter>
          )
        },
      },
    )

    expect(wrapper.getByText('Home').dataset.current).toBe('false')
    expect(wrapper.getByText('About').dataset.current).toBe('true')
  })
})
