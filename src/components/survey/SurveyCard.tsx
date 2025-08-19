"use client";

import React from "react";
import { Badge } from "@/ui/components/Badge";
import { FeatherArrowUp } from "@subframe/core";

interface SurveyCardProps {
  title: string;
  value: string | number;
  badgeText: string;
  badgeVariant?: "success" | "warning" | "error";
  badgeIcon?: React.ReactNode;
}

export default function SurveyCard({
  title,
  value,
  badgeText,
  badgeVariant = "success",
  badgeIcon = <FeatherArrowUp />,
}: SurveyCardProps) {
  return (
    <div className="flex grow shrink-0 basis-0 flex-col items-start gap-4 rounded-md border border-solid border-neutral-border bg-default-background px-4 py-4 shadow-sm">
      <span className="text-body-bold font-body-bold text-default-font">
        {title}
      </span>
      <div className="flex w-full flex-col items-start gap-2">
        <span className="text-heading-2 font-heading-2 text-default-font">
          {value}
        </span>
        <Badge variant={badgeVariant} icon={badgeIcon}>
          {badgeText}
        </Badge>
      </div>
    </div>
  );
}
