"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export function Navbar() {
  const pathname = usePathname()

  const links = [
    { name: "Beranda", href: "/" },
    { name: "Jadwal Tes", href: "/" },
    { name: "Tentang Kami", href: "/" },
  ]

  return (
<nav className="h-[64px] px-16 fixed top-0 z-50 w-full flex justify-between items-center">
      {/* Logo kiri */}
      <Link href="/">
        <img
            src="/logo/logoReal.svg"
            alt="Image"
            className="flex items-center"
        />
      </Link>
      {/* Menu tengah - posisi absolut di tengah navbar */}
      <ul className="absolute left-1/2 -translate-x-1/2 flex gap-6 text-base font-medium">
        {links.map((link) => (
          <li key={link.name}>
            <Link
              href={link.href}
              className={cn(
                "hover:text-blue-600 transition-colors",
                pathname === link.href ? "text-bluetpka-100" : "text-primarytpka" // mau pake gsap, ketika login ini gaada lagi
              )}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>

      {/* Kanan - tombol login/daftar */}
      <div className="flex items-center gap-4">
      <Button asChild variant="link">
        <Link href="/register">Daftar</Link>
      </Button>
      <Button asChild variant="bluetpka">
        <Link href="/login">Masuk</Link>
      </Button>
      </div>
    </nav>
  )
}
