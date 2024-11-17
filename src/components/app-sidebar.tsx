
import { Calendar, Home, Inbox, Search, Settings } from "lucide-react";
import Image from "next/image";
import logo from '../../public/lOGO.jpg';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Menu items.
const items = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: Home,
  },
  {
    title: "companies",
    url: "/companies",
    icon: Inbox,
    dropdownOptions: [
      { label: 'All Companies', href: '/companies/all-companies' },
      { label: 'Companies Request', href: '/companies/companies-request' },
    ],
  },
  {
    title: "VM management",
    url: "/vm-management",
    icon: Calendar,
  },
  {
    title: "Payment",
    url: "/payment",
    icon: Search,
  },
  {
    title: "Settings",
    url: "/settings",
    icon: Settings,
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>
            <Image src={logo} alt="logo" className="w-[40px] h-[24px] my-2" />
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <SidebarMenuButton className="flex items-center">
                        <a href={item.url} className="flex items-center">
                          <item.icon className="mr-2" />
                          <span>{item.title}</span>
                        </a>
                      </SidebarMenuButton>
                    </DropdownMenuTrigger>
                    {item.dropdownOptions && (
                      <DropdownMenuContent>
                        {item.dropdownOptions.map((option) => (
                          <DropdownMenuItem key={option.label}>
                            <a href={option.href}>{option.label}</a>
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuContent>
                    )}
                  </DropdownMenu>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
























