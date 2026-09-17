import Link from "next/link";

import { AppSidebar } from "@/modules/dashboard/ui/components/app-sidebar";
import { cohort } from "@/modules/dashboard/data/cohorts";
import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Progress } from "@/components/ui/progress";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

// ponytail: single hardcoded cohort in the data file, `id` is unused until there's more than one to look up.
export default async function CohortDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  await params;

  const { progress } = cohort;

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
                <BreadcrumbLink asChild>
                  <Link href="/cohort">Cohorts</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{cohort.title}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </header>

        <div className="mx-auto flex w-full flex-1 flex-col gap-6 p-6">
          <div>
            <h1 className="text-2xl font-medium">{cohort.title}</h1>
            <p className="mt-1 text-sm text-muted-foreground">
              {cohort.creatorNote}
            </p>
          </div>

          <Card>
            <CardContent className="flex flex-col gap-3">
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium">
                  {progress.completed} of {progress.total} classes completed
                </span>
                <span className="text-muted-foreground">
                  {Math.round((progress.completed / progress.total) * 100)}%
                </span>
              </div>
              <Progress value={(progress.completed / progress.total) * 100} />
              <div className="mt-1 grid grid-cols-3 gap-4 text-sm">
                <div>
                  <div className="text-lg font-medium">{progress.attended}</div>
                  <div className="text-muted-foreground">Classes attended</div>
                </div>
                <div>
                  <div className="text-lg font-medium">
                    {cohort.weeks.length}
                  </div>
                  <div className="text-muted-foreground">Weeks</div>
                </div>
                <div>
                  <div className="text-lg font-medium">
                    {progress.recordings}
                  </div>
                  <div className="text-muted-foreground">
                    Recordings available
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex flex-col gap-3">
            {cohort.weeks.map((week, index) => (
              <div key={week.title}>
                <p className="mb-1 text-xs font-medium tracking-wide text-muted-foreground uppercase">
                  Week {index + 1}
                </p>
                <Card size="sm">
                  <CardContent>
                    <Accordion
                      type="multiple"
                      defaultValue={index === 0 ? [week.title] : []}
                    >
                      <AccordionItem value={week.title}>
                        <AccordionTrigger>{week.title}</AccordionTrigger>
                        <AccordionContent>
                          <div className="flex flex-col gap-4">
                            <div>
                              <h3 className="mb-2 text-sm font-medium">
                                Theory
                              </h3>
                              <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                                {week.theory.map((point) => (
                                  <li key={point}>{point}</li>
                                ))}
                              </ul>
                            </div>

                            <div>
                              <h3 className="mb-2 text-sm font-medium">
                                Coding
                              </h3>
                              <p className="text-sm text-muted-foreground">
                                {week.coding}
                              </p>
                            </div>

                            <div className="flex flex-wrap gap-1.5">
                              {week.tags.map((tag) => (
                                <Badge key={tag} variant="secondary">
                                  {tag}
                                </Badge>
                              ))}
                            </div>

                            <div>
                              <h3 className="mb-2 text-sm font-medium">
                                Resources
                              </h3>
                              <ul className="space-y-1 text-sm text-primary">
                                {week.resources.map((resource) => (
                                  <li key={resource}>
                                    <a href="#" className="hover:underline">
                                      {resource}
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
