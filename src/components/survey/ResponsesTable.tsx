"use client";

import React from "react";
import { Table } from "@/ui/components/Table";
import { Badge } from "@/ui/components/Badge";
import { Avatar } from "@/ui/components/Avatar";
import { IconButton } from "@/ui/components/IconButton";
import { Button } from "@/ui/components/Button";
import { FeatherMoreHorizontal } from "@subframe/core";

interface Response {
  id: string;
  customer: {
    name: string;
    avatar: string;
  };
  score: number;
  segment: string;
  date: string;
}

interface ResponsesTableProps {
  responses: Response[];
  onViewAll?: () => void;
  onAction?: (responseId: string) => void;
}

export default function ResponsesTable({
  responses,
  onViewAll,
  onAction,
}: ResponsesTableProps) {
  const getScoreVariant = (score: number) => {
    if (score >= 8) return "success";
    if (score >= 6) return "warning";
    return "error";
  };

  return (
    <div className="flex w-full flex-col items-start gap-6 rounded-md border border-solid border-neutral-border bg-default-background px-6 py-6 shadow-sm">
      <div className="flex w-full items-center justify-between">
        <span className="text-heading-3 font-heading-3 text-default-font">
          Recent Responses
        </span>
        <Button variant="neutral-secondary" onClick={onViewAll}>
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
        {responses.map((response) => (
          <Table.Row key={response.id}>
            <Table.Cell>
              <div className="flex items-center gap-2">
                <Avatar size="small" image={response.customer.avatar}>
                  {response.customer.name.charAt(0)}
                </Avatar>
                <span className="whitespace-nowrap text-body-bold font-body-bold text-default-font">
                  {response.customer.name}
                </span>
              </div>
            </Table.Cell>
            <Table.Cell>
              <Badge variant={getScoreVariant(response.score)}>
                {response.score}
              </Badge>
            </Table.Cell>
            <Table.Cell>
              <span className="text-body font-body text-neutral-500">
                {response.segment}
              </span>
            </Table.Cell>
            <Table.Cell>
              <span className="text-body font-body text-neutral-500">
                {response.date}
              </span>
            </Table.Cell>
            <Table.Cell>
              <div className="flex grow shrink-0 basis-0 items-center justify-end">
                <IconButton
                  icon={<FeatherMoreHorizontal />}
                  onClick={() => onAction?.(response.id)}
                />
              </div>
            </Table.Cell>
          </Table.Row>
        ))}
      </Table>
    </div>
  );
}
