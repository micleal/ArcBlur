import { Menu } from "./menu";
import { ThemeToggle } from "./theme-toggle";

export const Header = () => {
  return (
    <header className="border-b border-border/40">
      <div className="flex w-full h-12 items-center p-1 justify-between">
        <Menu />
        Arc Plus
        <ThemeToggle />
      </div>
    </header>
  );
};
