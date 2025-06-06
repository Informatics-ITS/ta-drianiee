import { LayoutDashboard, List, ScanLine, Handshake, Medal, Megaphone } from "lucide-react"

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

// Menu items.
const items = [
  {
    title: "Beranda",
    url: "#",
    icon: LayoutDashboard,
  },
  {
    title: "Jadwal Tes",
    url: "#",
    icon: List,
  },
  {
    title: "Transaksi Peserta",
    url: "#",
    icon: ScanLine,
  },
  {
    title: "Mitra",
    url: "#",
    icon: Handshake,
  },
  {
    title: "Periode Peserta",
    url: "#",
    icon: Medal,
  },
  {
    title: "Pengumuman",
    url: "#",
    icon: Megaphone,
  },
]

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Operator</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="!gap-2">
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild  className="!p-2 !text-normal !font-medium gap-3">
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}