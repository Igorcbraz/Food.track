export type OrderStatus =
  | 'pending'
  | 'canceled'
  | 'processing'
  | 'delivering'
  | 'delivered'

interface OrderStatusProps {
  status: OrderStatus
}

export const orderStatusOptions: Record<
  OrderStatus,
  { text: string; className: string }
> = {
  pending: { text: 'Pendente', className: 'bg-slate-400' },
  canceled: { text: 'Cancelado', className: 'bg-rose-400' },
  processing: { text: 'Em preparo', className: 'bg-amber-400' },
  delivering: { text: 'Em entrega', className: 'bg-amber-400' },
  delivered: { text: 'Entregue', className: 'bg-emerald-400' },
}

export function OrderStatus({ status }: OrderStatusProps) {
  const { text, className } = orderStatusOptions[status]

  return (
    <div className="flex items-center gap-2">
      <span
        data-testid="badge"
        className={`h-2 w-2 rounded-full ${className}`}
      />
      <span className="font-medium text-muted-foreground">{text}</span>
    </div>
  )
}
