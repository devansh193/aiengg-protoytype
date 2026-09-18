"use client";

import Link from "next/link";
import {
  ChevronRight,
  GraduationCap,
  Hash,
  LogOut,
  Receipt,
  Settings,
  Users,
} from "lucide-react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";

// Channels: chat rooms for the cohort (more will be added later, like Discord).
const channels = [
  { title: "general", url: "#" },
  { title: "intro", url: "#" },
  { title: "projects", url: "#" },
] as const;

export const AppSidebar = () => {
  return (
    <Sidebar
      collapsible="icon"
      style={{ "--sidebar": "#111213" } as React.CSSProperties}
    >
      <SidebarHeader className="border-b">
        <Link
          href="/"
          className="flex items-center gap-2 overflow-hidden px-2 py-1.5"
        >
          <span className="flex size-6 shrink-0 items-center justify-center rounded-md bg-primary text-xs font-bold text-primary-foreground">
            A
          </span>
          <h1 className="truncate text-xl font-semibold tracking-wider group-data-[collapsible=icon]:hidden">
            AiEngg
          </h1>
        </Link>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-[10px]">
            WORKSPACE
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="gap-1">
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive>
                  <Link href="/cohort">
                    <GraduationCap />
                    <span>Cohorts</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href="#">
                    <Users />
                    <span>Community</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <Collapsible defaultOpen className="group/channels">
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton>
                      <Hash />
                      <span>Channels</span>
                      <ChevronRight className="ml-auto transition-transform group-data-[state=open]/channels:rotate-90" />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      {channels.map((channel) => (
                        <SidebarMenuSubItem key={channel.title}>
                          <SidebarMenuSubButton asChild>
                            <a href={channel.url}>
                              <Hash />
                              <span>{channel.title}</span>
                            </a>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </SidebarMenuItem>
              </Collapsible>

              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href="#">
                    <Receipt />
                    <span>Invoices</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu className="gap-1">
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <a href="#">
                <Settings />
                <span>Account settings</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton>
              <LogOut />
              <span>Log out</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
};
