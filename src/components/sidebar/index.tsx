import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Home, Package, PanelBottom, Settings2, ShoppingBag, Users, LogOut } from "lucide-react";


export const SideBar = () => {
  return (
    <div className="flex w-full flex-col bg-muted/40">

      <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 border-r bg-background sm:flex flex-col">
        <nav className="flex flex-col items-center gap-4 px-2 py-5">
          <Tooltip>
            <TooltipTrigger asChild>
              <Link href="#" 
              className="flex h-9 w-9 shrink-0 items-center justify-center bg-primary text-primary-foreground rounded-full">
                <Package className="h-4 w-4"/>
                <span className="sr-only">Dashboard</span>
              </Link>
            </TooltipTrigger>
            {/* <TooltipContent side="right">Dashboard</TooltipContent> */}
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Link href="#" 
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground">
                <Home className="h-4 w-4"/>
                <span className="sr-only">Menu</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Menu</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Link href="#" 
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground">
                <ShoppingBag className="h-4 w-4"/>
                <span className="sr-only">Cart</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Cart</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Link href="#" 
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground">
                <Package className="h-4 w-4"/>
                <span className="sr-only">Products</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Products</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Link href="#" 
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground">
                <Users className="h-4 w-4"/>
                <span className="sr-only">Customers</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Customers</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Link href="#" 
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground">
                <Settings2 className="h-4 w-4"/>
                <span className="sr-only">Settings</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Settings</TooltipContent>
          </Tooltip>
        </nav>

        <nav className="mt-auto flex flex-col items-center gap-4 px-2 py-5">
          <Tooltip>
            <TooltipTrigger asChild>
              <Link href="#" 
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground">
                <LogOut className="h-4 w-4 text-red-500"/>
                <span className="sr-only">Log out</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Log out</TooltipContent>
          </Tooltip>
        </nav>
      </aside>

      <div className="sm:hidden flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <header 
        className="stick top-0 z-30 flex h-14 items-center px-4 border-b bg-backgroung gap-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="sm:hidden">
                <PanelBottom className="w-5 h-5"/>
                <span className="sr-only"> Open / Close menu</span>
              </Button>
            </SheetTrigger>

            <SheetContent side="left" className="sm:max-w-x">
              <nav className="grid gap-6 text-lg font-medium">
                <Link href="#" 
                className="m-4 flex h-10 w-10 bg-primary rounded-full text-lg items-center justify-center text-primary-foreground md:text-base gap-2" 
                prefetch={false}>
                  <Package className="w-5 h-5 transition-all"/>
                  <span className="sr-only">Logo</span>
                </Link>

                <Link href="#" 
                className="mx-4 flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground" 
                prefetch={false}>
                  <Home className="w-5 h-5 transition-all"/>
                  <span className="">Home</span>
                </Link>

                <Link href="#" 
                className="mx-4 flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground" 
                prefetch={false}>
                  <ShoppingBag className="w-5 h-5 transition-all"/>
                  <span className="">Cart</span>
                </Link>

                <Link href="#" 
                className="mx-4 flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground" 
                prefetch={false}>
                  <Package className="w-5 h-5 transition-all"/>
                  <span className="">Products</span>
                </Link>

                <Link href="#" 
                className="mx-4 flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground" 
                prefetch={false}>
                  <Users className="w-5 h-5 transition-all"/>
                  <span className="">Customers</span>
                </Link>

                <Link href="#" 
                className="mx-4 flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground" 
                prefetch={false}>
                  <Settings2 className="w-5 h-5 transition-all"/>
                  <span className="">Settings</span>
                </Link>
              </nav>
            </SheetContent>
          </Sheet>

          <h2>Menu</h2>

        </header>
      </div>

    </div>
  )
}
