"use client";
import React, { SVGProps, useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { cn } from "@/lib/utils";

export const StickyBanner = ({
  className,
  children,
  hideOnScroll = false,
}: {
  className?: string;
  children: React.ReactNode;
  hideOnScroll?: boolean;
}) => {
  const [open, setOpen] = useState(true);
  const [dismissed, setDismissed] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (dismissed || !hideOnScroll) return;
    setOpen(latest <= 40);
  });

  return (
    <motion.div
      className={cn(
        "sticky inset-x-0 top-0 z-40 w-full overflow-hidden",
        className,
      )}
      initial={{ height: 0 }}
      animate={{ height: open ? "auto" : 0 }}
      transition={{ duration: 0.2, ease: "easeInOut", delay: open ? 0.2 : 0 }}
    >
      <div className="relative flex min-h-14 items-center justify-center px-4 py-1">
        {children}

        <button
          type="button"
          className="absolute top-1/2 right-2 -translate-y-1/2 cursor-pointer"
          onClick={() => {
            setDismissed(true);
            setOpen(false);
          }}
        >
          <CloseIcon className="h-5 w-5 text-white" />
        </button>
      </div>
    </motion.div>
  );
};

const CloseIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </svg>
  );
};
