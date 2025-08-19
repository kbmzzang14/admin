"use client";

import React from "react";
import { ToggleGroup } from "@/ui/components/ToggleGroup";
import { Button } from "@/ui/components/Button";
import { FeatherDownload } from "@subframe/core";

interface ChartContainerProps {
  title: string;
  children: React.ReactNode;
  showTimeToggle?: boolean;
  showExportButton?: boolean;
  timeRange?: string;
  onTimeRangeChange?: (value: string) => void;
  onExport?: () => void;
}

export default function ChartContainer({
  title,
  children,
  showTimeToggle = false,
  showExportButton = false,
  timeRange = "",
  onTimeRangeChange,
  onExport,
}: ChartContainerProps) {
  return (
    <div className="flex w-full flex-col items-start gap-6 rounded-md border border-solid border-neutral-border bg-default-background px-6 py-6 shadow-sm">
      <div className="flex w-full items-center justify-between">
        <span className="text-heading-3 font-heading-3 text-default-font">
          {title}
        </span>
        <div className="flex items-center gap-4">
          {showTimeToggle && (
            <ToggleGroup value={timeRange} onValueChange={onTimeRangeChange}>
              <ToggleGroup.Item icon={null} value="c69ca558">
                Week
              </ToggleGroup.Item>
              <ToggleGroup.Item icon={null} value="e845c5dd">
                Month
              </ToggleGroup.Item>
              <ToggleGroup.Item icon={null} value="2f2b80ea">
                Quarter
              </ToggleGroup.Item>
            </ToggleGroup>
          )}
          {showExportButton && (
            <Button
              variant="neutral-secondary"
              icon={<FeatherDownload />}
              onClick={onExport}
            >
              Export
            </Button>
          )}
        </div>
      </div>
      {children}
    </div>
  );
}
