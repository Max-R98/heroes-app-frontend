import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router";

export const CustomMenu = () => {
  const { pathname } = useLocation();

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <NavigationMenu className="py-5">
      <NavigationMenuList>
        {/* Home */}
        <NavigationMenuItem>
          <Link
            to="/"
            className={cn(isActive("/") && "bg-slate-200  ", "p-2 rounded-md")}
          >
            Inicio
          </Link>
        </NavigationMenuItem>

        {/* Search */}
        <NavigationMenuItem>
          <Link
            to="/search"
            className={cn(
              isActive("/search") && "bg-slate-200",
              "p-2 rounded-md",
            )}
          >
            Buscar superheroes
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
