import { LandingLayout } from "@/modules/landing/ui/layout/landing-layout";
import React from "react";

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return <LandingLayout>{children}</LandingLayout>;
}
