import Image from "next/image";
import Link from "next/link";

import { AppSidebar } from "@/modules/dashboard/ui/components/app-sidebar";
import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";

import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

export default function CohortPage() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="bg-[#111213]">
        <header className="flex h-12 items-center gap-2 border-b px-4">
          <SidebarTrigger />

          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/">Home</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Cohorts</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </header>

        <div className="flex flex-1 flex-col gap-2 p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-2xl font-medium">Cohorts</h1>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">
                Browse and manage the cohorts you&apos;re enrolled in.
              </p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <div className="overflow-hidden rounded-lg border">
              <div className="relative aspect-video w-full bg-muted">
                <Image
                  src="/images/hero1.webp"
                  alt="RAG and Agents cohort"
                  fill
                  className="object-cover"
                />
                <Badge className="absolute left-3 top-3">
                  Late registration
                </Badge>
              </div>
              <div className="flex items-start justify-between gap-2 px-4 pt-4 pb-3 bg-[#191A1C]">
                <div>
                  <Link
                    href="/cohort/rag-and-agents"
                    className="font-medium hover:underline"
                  >
                    RAG and Agents
                  </Link>
                  <p className="text-sm text-muted-foreground">
                    Cohort starts on Sep 12, 2026
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 px-4 pb-4 bg-[#191A1C]">
                <Button variant="cta" className="flex-1 cursor-pointer" asChild>
                  <Link href="/cohort/rag-and-agents">View recording</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
