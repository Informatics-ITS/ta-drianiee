'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import {
  LayoutDashboard,
  List,
  ScanLine,
  Handshake,
  Medal,
  Megaphone,
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

const items = [
  {
    title: "Beranda",
    url: "/operator/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Jadwal Tes",
    url: "/operator/jadwal-tes",
    icon: List,
  },
  {
    title: "Transaksi Peserta",
    url: "/operator/transaksi",
    icon: ScanLine,
  },
  {
    title: "Mitra",
    url: "/operator/mitra",
    icon: Handshake,
  },
  {
    title: "Periode Peserta",
    url: "/operator/periode",
    icon: Medal,
  },
  {
    title: "Pengumuman",
    url: "/operator/pengumuman",
    icon: Megaphone,
  },
]

export function AppSidebar() {
  const pathname = usePathname()

  return (
  <Sidebar className="fixed top-[64px] left-0 w-64 h-[calc(100vh-64px)] bg-white !border-0">
      <SidebarContent>
        <SidebarGroup className="pt-10 px-4">
          {/* <SidebarGroupLabel>Operator</SidebarGroupLabel> */}
          <SidebarGroupContent>
            <SidebarMenu className="!gap-2">
              {items.map((item) => {
                const isActive = pathname === item.url

                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      className={cn(
                        "!p-4 !text-normal !font-medium gap-3 hover:bg-[#F5F5F5]",
                        isActive && "bg-[#E2E9F3]"
                      )}
                    >
                      <Link href={item.url} className="flex items-center gap-3 w-full">
                        <item.icon />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                )
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
