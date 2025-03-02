"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import React, { Component } from "react";
import { Code2, Menu, X, ChevronDown } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto max-sm:w-[90%] flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <Code2 className="h-6 w-6 text-primary" />
            <span className="font-bold text-xl hidden sm:inline-block">
              Vyom Computer
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/courses" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Courses
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              {/* <NavigationMenuItem>
                <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    <ListItem href="/blog" title="Blog">
                      Latest articles and tutorials on programming
                    </ListItem>
                    <ListItem href="/events" title="Events">
                      Workshops, webinars, and coding competitions
                    </ListItem>
                    <ListItem href="/success-stories" title="Success Stories">
                      Read about our successful graduates
                    </ListItem>
                    <ListItem href="/faq" title="FAQ">
                      Frequently asked questions about our courses
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem> */}
              <NavigationMenuItem>
                <Link href="/about" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    About Us
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/contact" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Contact
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex items-center gap-4">
            <ModeToggle />
            {/* <Button asChild variant="outline">
              <Link href="/login">Log In</Link>
            </Button>
            <Button asChild>
              <Link href="/register">Register</Link>
            </Button> */}
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="flex md:hidden items-center gap-4">
          <ModeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t">
          <div className="container mx-auto max-sm:w-[90%] py-4 space-y-4">
            <Link
              href="/courses"
              className="flex w-full py-2 text-lg font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Courses
            </Link>
            {/* <div className="border-t pt-2">
              <div className="flex justify-between items-center py-2 text-lg font-medium">
                Resources
                <ChevronDown className="h-5 w-5" />
              </div>
              <div className="pl-4 space-y-2 mt-2">
                <Link
                  href="/blog"
                  className="flex w-full py-1"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Blog
                </Link>
                <Link
                  href="/events"
                  className="flex w-full py-1"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Events
                </Link>
                <Link
                  href="/success-stories"
                  className="flex w-full py-1"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Success Stories
                </Link>
                <Link
                  href="/faq"
                  className="flex w-full py-1"
                  onClick={() => setIsMenuOpen(false)}
                >
                  FAQ
                </Link>
              </div>
            </div> */}
            <Link
              href="/about"
              className="flex w-full py-2 text-lg font-medium border-t"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className="flex w-full py-2 text-lg font-medium border-t"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            {/* <div className="flex flex-col gap-2 pt-2 border-t">
              <Button asChild variant="outline">
                <Link href="/login" onClick={() => setIsMenuOpen(false)}>
                  Log In
                </Link>
              </Button>
              <Button asChild>
                <Link href="/register" onClick={() => setIsMenuOpen(false)}>
                  Register
                </Link>
              </Button>
            </div> */}
          </div>
        </div>
      )}
    </header>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
