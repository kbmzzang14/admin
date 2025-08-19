"use client";

import React, { useState } from "react";
import { DefaultPageLayout } from "@/ui/layouts/DefaultPageLayout";
import { ToggleGroup } from "@/ui/components/ToggleGroup";
import { Badge } from "@/ui/components/Badge";
import { Button } from "@/ui/components/Button";
import { BarChart } from "@/ui/components/BarChart";
import { LineChart } from "@/ui/components/LineChart";
import { PieChart } from "@/ui/components/PieChart";
import { Table } from "@/ui/components/Table";
import { Avatar } from "@/ui/components/Avatar";
import { IconButton } from "@/ui/components/IconButton";
import {
  FeatherArrowUp,
  FeatherTrendingUp,
  FeatherDownload,
  FeatherMoreHorizontal,
} from "@subframe/core";

export default function SurveyDashboard() {
  const [metricType, setMetricType] = useState("4f6bc306"); // NPS
  const [timeRange, setTimeRange] = useState("e845c5dd"); // Month

  return (
    <DefaultPageLayout>
      <div className="container max-w-none flex h-full w-full flex-col items-start gap-8 bg-default-background py-12">
        <div className="flex w-full items-start justify-between">
          <div className="flex flex-col items-start gap-1">
            <span className="text-heading-2 font-heading-2 text-default-font">
              Customer Feedback Analytics
            </span>
            <span className="text-body font-body text-subtext-color">
              Survey results and trends analysis
            </span>
          </div>
          <ToggleGroup value={metricType} onValueChange={setMetricType}>
            <ToggleGroup.Item icon={null} value="4f6bc306">
              NPS
            </ToggleGroup.Item>
            <ToggleGroup.Item icon={null} value="10dfd660">
              CES
            </ToggleGroup.Item>
            <ToggleGroup.Item icon={null} value="99919a96">
              CSAT
            </ToggleGroup.Item>
          </ToggleGroup>
        </div>

        <div className="flex w-full flex-wrap items-start gap-4">
          <div className="flex grow shrink-0 basis-0 flex-col items-start gap-4 rounded-md border border-solid border-neutral-border bg-default-background px-4 py-4 shadow-sm">
            <span className="text-body-bold font-body-bold text-default-font">
              Net Promoter Score
            </span>
            <div className="flex w-full flex-col items-start gap-2">
              <span className="text-heading-2 font-heading-2 text-default-font">
                42
              </span>
              <Badge variant="success" icon={<FeatherArrowUp />}>
                +5 from last month
              </Badge>
            </div>
          </div>
          <div className="flex grow shrink-0 basis-0 flex-col items-start gap-4 rounded-md border border-solid border-neutral-border bg-default-background px-4 py-4 shadow-sm">
            <span className="text-body-bold font-body-bold text-default-font">
              Total Responses
            </span>
            <div className="flex w-full flex-col items-start gap-2">
              <span className="text-heading-2 font-heading-2 text-default-font">
                1,284
              </span>
              <Badge variant="success" icon={<FeatherArrowUp />}>
                23% response rate
              </Badge>
            </div>
          </div>
          <div className="flex grow shrink-0 basis-0 flex-col items-start gap-4 rounded-md border border-solid border-neutral-border bg-default-background px-4 py-4 shadow-sm">
            <span className="text-body-bold font-body-bold text-default-font">
              Promoters
            </span>
            <div className="flex w-full flex-col items-start gap-2">
              <span className="text-heading-2 font-heading-2 text-default-font">
                52%
              </span>
              <Badge variant="success" icon={<FeatherTrendingUp />}>
                Growing
              </Badge>
            </div>
          </div>
        </div>

        <div className="flex w-full flex-col items-start gap-6 rounded-md border border-solid border-neutral-border bg-default-background px-6 py-6 shadow-sm">
          <div className="flex w-full items-center justify-between">
            <span className="text-heading-3 font-heading-3 text-default-font">
              Score Distribution
            </span>
            <ToggleGroup value={timeRange} onValueChange={setTimeRange}>
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
          </div>
          <BarChart
            categories={["Biology", "Business", "Psychology"]}
            data={[
              { Year: "2015", Psychology: 120, Business: 110, Biology: 100 },
              { Year: "2016", Psychology: 130, Business: 95, Biology: 105 },
              { Year: "2017", Psychology: 115, Business: 105, Biology: 110 },
              { Year: "2018", Psychology: 125, Business: 120, Biology: 90 },
              { Year: "2019", Psychology: 110, Business: 130, Biology: 85 },
              { Year: "2020", Psychology: 135, Business: 100, Biology: 95 },
              { Year: "2021", Psychology: 105, Business: 115, Biology: 120 },
              { Year: "2022", Psychology: 140, Business: 125, Biology: 130 },
            ]}
            index={"Year"}
          />
        </div>

        <div className="flex w-full items-start gap-6">
          <div className="flex grow shrink-0 basis-0 flex-col items-start gap-6 rounded-md border border-solid border-neutral-border bg-default-background px-6 py-6 shadow-sm">
            <div className="flex w-full items-center justify-between">
              <span className="text-heading-3 font-heading-3 text-default-font">
                Score Trend
              </span>
              <Button
                variant="neutral-secondary"
                icon={<FeatherDownload />}
                onClick={() => {}}
              >
                Export
              </Button>
            </div>
            <LineChart
              categories={["Biology", "Business", "Psychology"]}
              data={[
                { Year: "2015", Psychology: 120, Business: 110, Biology: 100 },
                { Year: "2016", Psychology: 130, Business: 95, Biology: 105 },
                { Year: "2017", Psychology: 115, Business: 105, Biology: 110 },
                { Year: "2018", Psychology: 125, Business: 120, Biology: 90 },
                { Year: "2019", Psychology: 110, Business: 130, Biology: 85 },
                { Year: "2020", Psychology: 135, Business: 100, Biology: 95 },
                { Year: "2021", Psychology: 105, Business: 115, Biology: 120 },
                { Year: "2022", Psychology: 140, Business: 125, Biology: 130 },
              ]}
              index={"Year"}
            />
          </div>
          <div className="flex flex-col items-start gap-6 rounded-md border border-solid border-neutral-border bg-default-background px-6 py-6 shadow-sm">
            <span className="text-heading-3 font-heading-3 text-default-font">
              Response by Segment
            </span>
            <PieChart
              category={"Graduates"}
              data={[
                { Major: "Psychology", Graduates: 180 },
                { Major: "Business", Graduates: 160 },
                { Major: "Biology", Graduates: 140 },
              ]}
              index={"Major"}
            />
          </div>
        </div>

        <div className="flex w-full flex-col items-start gap-6 rounded-md border border-solid border-neutral-border bg-default-background px-6 py-6 shadow-sm">
          <div className="flex w-full items-center justify-between">
            <span className="text-heading-3 font-heading-3 text-default-font">
              Recent Responses
            </span>
            <Button variant="neutral-secondary" onClick={() => {}}>
              View all
            </Button>
          </div>
          <Table
            header={
              <Table.HeaderRow>
                <Table.HeaderCell>Customer</Table.HeaderCell>
                <Table.HeaderCell>Score</Table.HeaderCell>
                <Table.HeaderCell>Segment</Table.HeaderCell>
                <Table.HeaderCell>Date</Table.HeaderCell>
                <Table.HeaderCell />
              </Table.HeaderRow>
            }
          >
            <Table.Row>
              <Table.Cell>
                <div className="flex items-center gap-2">
                  <Avatar size="small" image="">
                    J
                  </Avatar>
                  <span className="whitespace-nowrap text-body-bold font-body-bold text-default-font">
                    John Smith
                  </span>
                </div>
              </Table.Cell>
              <Table.Cell>
                <Badge variant="success">9</Badge>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-neutral-500">
                  Enterprise
                </span>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-neutral-500">
                  2 days ago
                </span>
              </Table.Cell>
              <Table.Cell>
                <div className="flex grow shrink-0 basis-0 items-center justify-end">
                  <IconButton
                    icon={<FeatherMoreHorizontal />}
                    onClick={() => {}}
                  />
                </div>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <div className="flex items-center gap-2">
                  <Avatar size="small" image="">
                    S
                  </Avatar>
                  <span className="whitespace-nowrap text-body-bold font-body-bold text-default-font">
                    Sarah Johnson
                  </span>
                </div>
              </Table.Cell>
              <Table.Cell>
                <Badge variant="warning">7</Badge>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-neutral-500">
                  Mid-Market
                </span>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-neutral-500">
                  3 days ago
                </span>
              </Table.Cell>
              <Table.Cell>
                <div className="flex grow shrink-0 basis-0 items-center justify-end">
                  <IconButton
                    icon={<FeatherMoreHorizontal />}
                    onClick={() => {}}
                  />
                </div>
              </Table.Cell>
            </Table.Row>
          </Table>
        </div>
      </div>
    </DefaultPageLayout>
  );
}
