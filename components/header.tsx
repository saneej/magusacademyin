"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronDown, Phone, Mail, MapPin } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isNotesOpen, setIsNotesOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-gradient-to-r from-indigo-950 to-purple-950 backdrop-blur-md">
      {/* Top bar with contact info */}
      <div className="hidden md:block border-b border-white/10">
        <div className="container flex items-center justify-between py-2 text-sm text-zinc-300">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <Phone className="mr-2 h-3 w-3" />
              <span>+91 8113 0044 11 / +91 8113 8899 33</span>
            </div>
            <div className="flex items-center">
              <Mail className="mr-2 h-3 w-3" />
              <span>info@magusacademy.com</span>
            </div>
          </div>
          <div className="flex items-center">
            <MapPin className="mr-2 h-3 w-3" />
            <span>Kannur Road, West Nadakkavu, Calicut</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/magus-logo-white.png"
            alt="Magus Academy"
            width={150}
            height={45}
            className="h-8 w-auto brightness-0 invert"
          />
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-sm font-medium text-white hover:text-purple-300 transition-colors">
            Home
          </Link>
          <Link href="/about" className="text-sm font-medium text-white hover:text-purple-300 transition-colors">
            About
          </Link>
          <div className="relative group">
            <button
              className="flex items-center text-sm font-medium text-white hover:text-purple-300 transition-colors"
              onClick={() => setIsNotesOpen(!isNotesOpen)}
            >
              Courses
              <ChevronDown className="ml-1 h-4 w-4" />
            </button>
            <div className="absolute left-0 top-full hidden pt-2 group-hover:block">
              <div className="w-48 rounded-md bg-indigo-950 p-2 shadow-lg ring-1 ring-black ring-opacity-5">
                <Link
                  href="/courses/btech"
                  className="block rounded-md px-3 py-2 text-sm text-white hover:bg-indigo-900"
                >
                  B.Tech
                </Link>
                <Link
                  href="/courses/mtech"
                  className="block rounded-md px-3 py-2 text-sm text-white hover:bg-indigo-900"
                >
                  M.Tech
                </Link>
                <Link
                  href="/courses/barch"
                  className="block rounded-md px-3 py-2 text-sm text-white hover:bg-indigo-900"
                >
                  B.Arch
                </Link>
                <Link
                  href="/courses/plus-two"
                  className="block rounded-md px-3 py-2 text-sm text-white hover:bg-indigo-900"
                >
                  Plus One & Plus Two
                </Link>
              </div>
            </div>
          </div>
          <div className="relative group">
            <button className="flex items-center text-sm font-medium text-white hover:text-purple-300 transition-colors">
              Notes
              <ChevronDown className="ml-1 h-4 w-4" />
            </button>
            <div className="absolute left-0 top-full hidden pt-2 group-hover:block">
              <div className="w-48 rounded-md bg-indigo-950 p-2 shadow-lg ring-1 ring-black ring-opacity-5">
                <Link href="/notes/btech" className="block rounded-md px-3 py-2 text-sm text-white hover:bg-indigo-900">
                  B.Tech
                </Link>
                <Link href="/notes/mtech" className="block rounded-md px-3 py-2 text-sm text-white hover:bg-indigo-900">
                  M.Tech
                </Link>
                <Link href="/notes/barch" className="block rounded-md px-3 py-2 text-sm text-white hover:bg-indigo-900">
                  B.Arch
                </Link>
                <Link href="/notes/12th" className="block rounded-md px-3 py-2 text-sm text-white hover:bg-indigo-900">
                  12th
                </Link>
                <Link href="/notes/11th" className="block rounded-md px-3 py-2 text-sm text-white hover:bg-indigo-900">
                  11th
                </Link>
                <Link href="/notes/10th" className="block rounded-md px-3 py-2 text-sm text-white hover:bg-indigo-900">
                  10th
                </Link>
              </div>
            </div>
          </div>
          <Link href="/contact" className="text-sm font-medium text-white hover:text-purple-300 transition-colors">
            Contact
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile navigation */}
      <div className={cn("md:hidden bg-indigo-950 border-t border-white/10", isMenuOpen ? "block" : "hidden")}>
        <div className="container py-4 space-y-4">
          <Link href="/" className="block py-2 text-white hover:text-purple-300" onClick={() => setIsMenuOpen(false)}>
            Home
          </Link>
          <Link
            href="/about"
            className="block py-2 text-white hover:text-purple-300"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <div>
            <button
              className="flex items-center w-full py-2 text-white hover:text-purple-300 justify-between"
              onClick={() => setIsNotesOpen(!isNotesOpen)}
            >
              <span>Courses</span>
              <ChevronDown className={cn("h-4 w-4 transition-transform", isNotesOpen ? "rotate-180" : "")} />
            </button>
            <div className={cn("pl-4 space-y-2 mt-2", isNotesOpen ? "block" : "hidden")}>
              <Link
                href="/courses/btech"
                className="block py-1 text-zinc-300 hover:text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                B.Tech
              </Link>
              <Link
                href="/courses/mtech"
                className="block py-1 text-zinc-300 hover:text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                M.Tech
              </Link>
              <Link
                href="/courses/barch"
                className="block py-1 text-zinc-300 hover:text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                B.Arch
              </Link>
              <Link
                href="/courses/plus-two"
                className="block py-1 text-zinc-300 hover:text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                Plus One & Plus Two
              </Link>
            </div>
          </div>
          <div>
            <button
              className="flex items-center w-full py-2 text-white hover:text-purple-300 justify-between"
              onClick={() => setIsNotesOpen(!isNotesOpen)}
            >
              <span>Notes</span>
              <ChevronDown className={cn("h-4 w-4 transition-transform", isNotesOpen ? "rotate-180" : "")} />
            </button>
            <div className={cn("pl-4 space-y-2 mt-2", isNotesOpen ? "block" : "hidden")}>
              <Link
                href="/notes/btech"
                className="block py-1 text-zinc-300 hover:text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                B.Tech
              </Link>
              <Link
                href="/notes/mtech"
                className="block py-1 text-zinc-300 hover:text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                M.Tech
              </Link>
              <Link
                href="/notes/barch"
                className="block py-1 text-zinc-300 hover:text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                B.Arch
              </Link>
              <Link
                href="/notes/12th"
                className="block py-1 text-zinc-300 hover:text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                12th
              </Link>
              <Link
                href="/notes/11th"
                className="block py-1 text-zinc-300 hover:text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                11th
              </Link>
              <Link
                href="/notes/10th"
                className="block py-1 text-zinc-300 hover:text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                10th
              </Link>
            </div>
          </div>
          <Link
            href="/contact"
            className="block py-2 text-white hover:text-purple-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
      </div>
    </header>
  )
}

