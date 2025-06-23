"use client"

import { Github, Menu } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "../ui/sheet"
import { Button } from "../ui/button"

export const Header = () => {

    const [isOpen, setIsOpen] = useState(false)

    const navItems = [
        { name: "About", href: "#about" },
        { name: "Portfolio", href: "#portfolio" },
        { name: "Experience", href: "#experience" },
         { name: "Contact", href: "#contact" },
    ]
  
    return (
        <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="flex h-16 items-center justify-between md:px-12 px-4">
                <span className="text-lg font-medium">Gianfranco R</span>
                <nav className="hidden md:flex items-center space-x-6">
                    {navItems.map((item) => (
                        <Link key={item.name} href={item.href} className="text-sm font-medium transition-colors hover:text-primary">
                            {item.name}
                        </Link>
                    ))}
                    <div className="w-px h-4 bg-border mx-2 bg-white" />
                    <Link
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium transition-colors hover:text-primary ml-5"
                    >
                        <Github className="h-6 w-6" />
                        <span className="sr-only">GitHub</span>
                    </Link>
                </nav>
                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                    <SheetTrigger asChild>
                        <Button variant="ghost" size="icon" className="md:hidden">
                        <Menu className="h-5 w-5" />
                        <span className="sr-only">Toggle menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="right" className="w-[300px] sm:w-[400px] border-0 p-4">
                        <div className="flex flex-col space-y-4 mt-4">
                        <div className="flex items-center justify-between">
                            <SheetTitle>
                                <span className="text-lg font-medium">Gianfranco R</span>
                            </SheetTitle> 
                        </div>
                        <nav className="flex flex-col space-y-4">
                            {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-sm font-medium transition-colors hover:text-primary py-2"
                                onClick={() => setIsOpen(false)}
                            >
                                {item.name}
                            </Link>
                            ))}
                            <Link
                            href="https://github.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2 text-sm font-medium transition-colors hover:text-primary py-2"
                            onClick={() => setIsOpen(false)}
                            >
                            <Github className="h-5 w-5" />
                            <span>GitHub</span>
                            </Link>
                        </nav>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </header>
    )
}