"use client";
import { cn } from "@/lib/utils";
import { Category } from "@/types";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import NavbarActions from "./navbar-actions";
import { BiMenu } from "react-icons/bi";

interface MainNavProps {
  data: Category[];
}
const MainNav: React.FC<MainNavProps> = ({ data }) => {
  const pathname = usePathname();
  const routes = data?.map((route) => ({
    href: `/category/${route.id}`,
    label: route.name,
    active: pathname === `/category/${route.id}`,
  }));
  return (
    <>
      <nav className="mx-6 items-center space-x-4 lg:space-x-6 hidden sm:flex">
        {routes?.map((route) => (
          <Link
            href={route.href}
            key={route.href}
            className={cn(
              "text-sm font-medium transition-colors hover:text-black",
              route.active ? "text-black" : "text-neutral-500"
            )}
          >
            {route.label}
          </Link>
        ))}
      </nav>
      <nav className="block flex sm:hidden ">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <BiMenu size={30} />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel className="flex items-center space-x-2">
              <p>Carrito</p>
              <NavbarActions />
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            {routes?.map((route) => (
              <DropdownMenuItem>
                <Link
                  href={route.href}
                  key={route.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-black",
                    route.active ? "text-black" : "text-neutral-500"
                  )}
                >
                  {route.label}
                </Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </nav>
    </>
  );
};

export default MainNav;
