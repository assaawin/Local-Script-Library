import { Code2, Search, User, Menu } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Avatar, AvatarFallback } from "./ui/avatar";

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  onOpenAuth: () => void;
  isLoggedIn: boolean;
}

export function Header({ currentPage, onNavigate, onOpenAuth, isLoggedIn }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => onNavigate("home")}>
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
              <Code2 className="h-6 w-6 text-primary-foreground" />
            </div>
            <div className="hidden sm:block">
              <div className="flex items-baseline gap-2">
                <span className="text-xl">Local Script Library</span>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <button
              onClick={() => onNavigate("home")}
              className={`transition-colors hover:text-foreground/80 ${
                currentPage === "home" ? "text-foreground" : "text-foreground/60"
              }`}
            >
              Home
            </button>
            <button
              onClick={() => onNavigate("browse")}
              className={`transition-colors hover:text-foreground/80 ${
                currentPage === "browse" ? "text-foreground" : "text-foreground/60"
              }`}
            >
              Browse
            </button>
            <button
              onClick={() => onNavigate("submit")}
              className={`transition-colors hover:text-foreground/80 ${
                currentPage === "submit" ? "text-foreground" : "text-foreground/60"
              }`}
            >
              Submit
            </button>
            <button
              onClick={() => onNavigate("community")}
              className={`transition-colors hover:text-foreground/80 ${
                currentPage === "community" ? "text-foreground" : "text-foreground/60"
              }`}
            >
              Community
            </button>
          </nav>

          {/* Right side actions */}
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              className="hidden sm:flex"
              onClick={() => onNavigate("browse")}
            >
              <Search className="h-5 w-5" />
            </Button>

            {isLoggedIn ? (
              <Avatar
                className="h-9 w-9 cursor-pointer"
                onClick={() => onNavigate("profile")}
              >
                <AvatarFallback className="bg-primary text-primary-foreground">U</AvatarFallback>
              </Avatar>
            ) : (
              <Button onClick={onOpenAuth} variant="default">
                <User className="h-4 w-4 mr-2" />
                <span className="hidden sm:inline">Sign In</span>
              </Button>
            )}

            {/* Mobile menu button */}
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
