"use client";

import React from "react";
import { Badge } from "@/ui/components/Badge";
import { Button } from "@/ui/components/Button";
import { DropdownMenu } from "@/ui/components/DropdownMenu";
import { IconButton } from "@/ui/components/IconButton";
import { IconWithBackground } from "@/ui/components/IconWithBackground";
import { Progress } from "@/ui/components/Progress";
import { Table } from "@/ui/components/Table";
import { Tabs } from "@/ui/components/Tabs";
import { TextField } from "@/ui/components/TextField";
import { DefaultPageLayout } from "@/ui/layouts/DefaultPageLayout";
import { FeatherSearch } from "@subframe/core";
import { FeatherChevronDown } from "@subframe/core";
import { FeatherFilter } from "@subframe/core";
import { FeatherZap } from "@subframe/core";
import { FeatherPlay } from "@subframe/core";
import { FeatherPause } from "@subframe/core";
import { FeatherEdit2 } from "@subframe/core";
import { FeatherTrash } from "@subframe/core";
import * as SubframeCore from "@subframe/core";
import { FeatherMoreHorizontal } from "@subframe/core";
import { FeatherMail } from "@subframe/core";
import { FeatherDatabase } from "@subframe/core";

export default function Main() {
  return (
    <DefaultPageLayout>
      <div className="container max-w-none flex h-full w-full flex-col items-start gap-4 bg-default-background py-12">
        <div className="flex w-full grow shrink-0 basis-0 flex-col items-start gap-6 px-12 py-8 overflow-auto">
          <div className="flex w-full items-start justify-between">
            <div className="flex flex-col items-start gap-1">
              <span className="text-heading-2 font-heading-2 text-default-font">
                🏠 Dashboard
              </span>
              <span className="text-body font-body text-subtext-color">
                Monitor your workflows and system status
              </span>
            </div>
          </div>
          <div className="flex w-full flex-wrap items-center gap-2 rounded-md border border-solid border-neutral-border bg-default-background px-6 py-4 shadow-sm">
            <div className="flex grow shrink-0 basis-0 items-start gap-6">
              <div className="flex flex-col items-start gap-1">
                <span className="text-body-bold font-body-bold text-default-font">
                  Active Workflows
                </span>
                <span className="text-heading-2 font-heading-2 text-default-font">
                  24
                </span>
              </div>
              <div className="flex w-px flex-none flex-col items-center gap-2 self-stretch bg-neutral-200" />
              <div className="flex flex-col items-start gap-1">
                <span className="text-body-bold font-body-bold text-default-font">
                  Completed Today
                </span>
                <span className="text-heading-2 font-heading-2 text-default-font">
                  18
                </span>
              </div>
              <div className="flex w-px flex-none flex-col items-center gap-2 self-stretch bg-neutral-200" />
              <div className="flex flex-col items-start gap-1">
                <span className="text-body-bold font-body-bold text-default-font">
                  Success Rate
                </span>
                <span className="text-heading-2 font-heading-2 text-default-font">
                  96%
                </span>
              </div>
            </div>
          </div>
          <div className="flex w-full items-center gap-2">
            <TextField
              className="h-auto grow shrink-0 basis-0"
              variant="filled"
              label=""
              helpText=""
              icon={<FeatherSearch />}
            >
              <TextField.Input
                placeholder="Search workflows..."
                value=""
                onChange={(_: React.ChangeEvent<HTMLInputElement>) => {}}
              />
            </TextField>
            <Button
              variant="neutral-tertiary"
              iconRight={<FeatherChevronDown />}
              onClick={() => {}}
            >
              Last 7 days
            </Button>
            <Button
              variant="neutral-tertiary"
              icon={<FeatherFilter />}
              onClick={() => {}}
            >
              Filter
            </Button>
          </div>
          <Tabs>
            <Tabs.Item active={true}>All Workflows</Tabs.Item>
            <Tabs.Item>Active</Tabs.Item>
            <Tabs.Item>Completed</Tabs.Item>
            <Tabs.Item>Failed</Tabs.Item>
          </Tabs>
          <Table
            header={
              <Table.HeaderRow>
                <Table.HeaderCell>Name</Table.HeaderCell>
                <Table.HeaderCell>Status</Table.HeaderCell>
                <Table.HeaderCell>Progress</Table.HeaderCell>
                <Table.HeaderCell>Last Run</Table.HeaderCell>
                <Table.HeaderCell>Actions</Table.HeaderCell>
              </Table.HeaderRow>
            }
          >
            <Table.Row>
              <Table.Cell>
                <div className="flex items-center gap-3">
                  <IconWithBackground
                    className="flex-none"
                    icon={<FeatherDatabase />}
                    variant="neutral"
                  />
                  <div className="flex flex-col items-start gap-1">
                    <span className="text-body-bold font-body-bold text-default-font">
                      Data Processing Pipeline
                    </span>
                    <span className="text-body font-body text-subdued-font">
                      Processes customer data
                    </span>
                  </div>
                </div>
              </Table.Cell>
              <Table.Cell>
                <Badge variant="success">Running</Badge>
              </Table.Cell>
              <Table.Cell>
                <div className="flex items-center gap-2">
                  <Progress value={75} className="w-20" />
                  <span className="text-body font-body text-default-font">
                    75%
                  </span>
                </div>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-default-font">
                  2 minutes ago
                </span>
              </Table.Cell>
              <Table.Cell>
                <div className="flex items-center gap-1">
                  <IconButton
                    variant="neutral-tertiary"
                    icon={<FeatherPause />}
                    onClick={() => {}}
                  />
                  <IconButton
                    variant="neutral-tertiary"
                    icon={<FeatherEdit2 />}
                    onClick={() => {}}
                  />
                  <IconButton
                    variant="neutral-tertiary"
                    icon={<FeatherTrash />}
                    onClick={() => {}}
                  />
                  <SubframeCore.DropdownMenu.Root>
                    <SubframeCore.DropdownMenu.Trigger asChild={true}>
                      <IconButton
                        variant="neutral-tertiary"
                        icon={<FeatherMoreHorizontal />}
                        onClick={() => {}}
                      />
                    </SubframeCore.DropdownMenu.Trigger>
                    <SubframeCore.DropdownMenu.Portal>
                      <SubframeCore.DropdownMenu.Content
                        side="bottom"
                        align="end"
                        sideOffset={4}
                        asChild={true}
                      >
                        <DropdownMenu>
                          <DropdownMenu.DropdownItem icon={<FeatherEdit2 />}>
                            View Details
                          </DropdownMenu.DropdownItem>
                          <DropdownMenu.DropdownItem icon={<FeatherZap />}>
                            Export Data
                          </DropdownMenu.DropdownItem>
                          <DropdownMenu.DropdownItem icon={<FeatherPlay />}>
                            Schedule
                          </DropdownMenu.DropdownItem>
                        </DropdownMenu>
                      </SubframeCore.DropdownMenu.Content>
                    </SubframeCore.DropdownMenu.Portal>
                  </SubframeCore.DropdownMenu.Root>
                </div>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <div className="flex items-center gap-3">
                  <IconWithBackground
                    className="flex-none"
                    icon={<FeatherMail />}
                    variant="neutral"
                  />
                  <div className="flex flex-col items-start gap-1">
                    <span className="text-body-bold font-body-bold text-default-font">
                      Email Campaign
                    </span>
                    <span className="text-body font-body text-subdued-font">
                      Sends marketing emails
                    </span>
                  </div>
                </div>
              </Table.Cell>
              <Table.Cell>
                <Badge variant="warning">Paused</Badge>
              </Table.Cell>
              <Table.Cell>
                <div className="flex items-center gap-2">
                  <Progress value={45} className="w-20" />
                  <span className="text-body font-body text-default-font">
                    45%
                  </span>
                </div>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-default-font">
                  1 hour ago
                </span>
              </Table.Cell>
              <Table.Cell>
                <div className="flex items-center gap-1">
                  <IconButton
                    variant="neutral-tertiary"
                    icon={<FeatherPlay />}
                    onClick={() => {}}
                  />
                  <IconButton
                    variant="neutral-tertiary"
                    icon={<FeatherEdit2 />}
                    onClick={() => {}}
                  />
                  <IconButton
                    variant="neutral-tertiary"
                    icon={<FeatherTrash />}
                    onClick={() => {}}
                  />
                  <SubframeCore.DropdownMenu.Root>
                    <SubframeCore.DropdownMenu.Trigger asChild={true}>
                      <IconButton
                        variant="neutral-tertiary"
                        icon={<FeatherMoreHorizontal />}
                        onClick={() => {}}
                      />
                    </SubframeCore.DropdownMenu.Trigger>
                    <SubframeCore.DropdownMenu.Portal>
                      <SubframeCore.DropdownMenu.Content
                        side="bottom"
                        align="end"
                        sideOffset={4}
                        asChild={true}
                      >
                        <DropdownMenu>
                          <DropdownMenu.DropdownItem icon={<FeatherEdit2 />}>
                            View Details
                          </DropdownMenu.DropdownItem>
                          <DropdownMenu.DropdownItem icon={<FeatherZap />}>
                            Export Data
                          </DropdownMenu.DropdownItem>
                          <DropdownMenu.DropdownItem icon={<FeatherPlay />}>
                            Schedule
                          </DropdownMenu.DropdownItem>
                        </DropdownMenu>
                      </SubframeCore.DropdownMenu.Content>
                    </SubframeCore.DropdownMenu.Portal>
                  </SubframeCore.DropdownMenu.Root>
                </div>
              </Table.Cell>
            </Table.Row>
          </Table>
        </div>
      </div>
    </DefaultPageLayout>
  );
}
