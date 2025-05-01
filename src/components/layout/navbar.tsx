import { cn } from "@/lib/utils";
import { NavbarMenuHorizontal } from "./navbar/navbar-menu-horizontal";
import { NavbarMenuVertical } from "./navbar/navbar-menu-vertical";
import Logo from "~/public/logos/brantl-partners-logo.svg";

export function Navbar() {
  const navbarClasses = cn(
    "z-50 grid grid-cols-2 items-center border-b border-inverse px-8 py-4",
    "md:mx-4 md:grid-cols-[1fr_auto_1fr] md:space-x-4 md:p-4 md:pb-2",
    "xl:m-0 xl:space-x-0 xl:border-none xl:px-12 xl:py-8 xl:pb-0",
  );

  const logoClasses = cn("h-fit w-[95px] shrink-0 fill-icon-inverse", "md:mb-2", "xl:mb-0 xl:mt-2 xl:w-[172px]");

  const horizontalMenuClasses = cn(
    "hidden justify-center space-x-2",
    "md:flex md:self-end",
    "xl:self-start xl:border-b xl:border-inverse xl:pr-3",
  );

  const verticalMenuClasses = "place-self-end";

  return (
    <nav className={navbarClasses}>
      <Logo className={logoClasses} />
      <NavbarMenuHorizontal className={horizontalMenuClasses} />
      <NavbarMenuVertical className={verticalMenuClasses} />
    </nav>
  );
}
