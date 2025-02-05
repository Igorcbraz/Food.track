import { render } from '@testing-library/react'

import { OrderStatus, orderStatusOptions } from './orderStatus'

describe('Order Status', () => {
  Object.entries(orderStatusOptions).forEach(
    ([status, { text, className }]) => {
      it(`should display the right text and class when order status is ${status}`, () => {
        const { getByText, getByTestId } = render(
          <OrderStatus status={status as OrderStatus} />,
        )

        const statusText = getByText(text)
        const badgeElement = getByTestId('badge')

        expect(statusText).toBeInTheDocument()
        expect(badgeElement).toHaveClass(className)
      })
    },
  )
})
