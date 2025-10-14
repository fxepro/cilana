"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Hexagon } from "lucide-react"; // Hexagon as a placeholder logo icon

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <div className="w-8 h-8 gradient-primary rounded-lg flex items-center justify-center">
            <Hexagon className="h-5 w-5 text-white" />
          </div>
          <span className="font-bold text-foreground sm:inline-block font-headline text-lg">
            {siteConfig.name}
          </span>
        </Link>
        
        <nav className="hidden md:flex flex-1 items-center space-x-8 text-sm font-medium">
          {siteConfig.navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "transition-all duration-200 hover:text-primary relative",
                pathname === item.href ? "text-primary font-semibold" : "text-foreground/70 hover:text-foreground"
              )}
            >
              {item.label}
              {pathname === item.href && (
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 gradient-primary rounded-full"></div>
              )}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Button asChild variant="outline" size="sm" className="border-primary/20 text-primary hover:bg-primary/5">
            <Link href="/contact">Contact Sales</Link>
          </Button>
          <Button asChild size="sm" className="gradient-primary text-white hover:opacity-90">
            <Link href="/community">Sign Up</Link>
          </Button>
        </div>

        <div className="flex flex-1 items-center justify-end space-x-4 md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col space-y-4 mt-8">
              <Link href="/" className="mb-4 flex items-center space-x-2">
                <div className="w-8 h-8 gradient-primary rounded-lg flex items-center justify-center">
                  <Hexagon className="h-5 w-5 text-white" />
                </div>
                <span className="font-bold text-foreground sm:inline-block font-headline">
                  {siteConfig.name}
                </span>
              </Link>
                {siteConfig.navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "px-3 py-2 rounded-md text-lg transition-colors hover:bg-accent hover:text-accent-foreground",
                      pathname === item.href ? "bg-accent text-accent-foreground font-semibold" : "text-foreground"
                    )}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="pt-4 space-y-2">
                  <Button asChild variant="outline" className="w-full border-primary/20 text-primary hover:bg-primary/5">
                    <Link href="/contact">Contact Sales</Link>
                  </Button>
                  <Button asChild className="w-full gradient-primary text-white hover:opacity-90">
                    <Link href="/community">Sign Up</Link>
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
