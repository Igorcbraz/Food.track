import { ChartPie } from 'lucide-react'
import { Outlet } from 'react-router'

import FoodIllustration from '@/assets/food-illustration.svg?react'

export function AuthLayout() {
  return (
    <div className="grid min-h-screen grid-cols-2 antialiased">
      <div className="flex h-full flex-col justify-between border-r border-foreground/5 bg-muted p-10 text-muted-foreground">
        <div className="flex items-center gap-3 text-lg text-foreground">
          <ChartPie className="h-5 w-5" />
          <span className="font-semibold">food.track</span>
        </div>
        <FoodIllustration className="w-[70%] self-center" />
        <footer className="text-sm">
          Painel do parceiro &copy; food.track - {new Date().getFullYear()}
        </footer>
      </div>
      <div className="relative flex flex-col items-center justify-center">
        <Outlet />
      </div>
    </div>
  )
}
