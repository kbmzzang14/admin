export interface SurveyMetric {
  id: string;
  name: string;
  value: number;
  change: number;
  changeType: "increase" | "decrease" | "stable";
  unit?: string;
}

export interface SurveyResponse {
  id: string;
  customer: {
    id: string;
    name: string;
    email: string;
    avatar?: string;
  };
  score: number;
  segment: string;
  date: string;
  feedback?: string;
  tags?: string[];
}

export interface ChartData {
  categories: string[];
  data: Record<string, any>[];
  index: string;
}

export interface SurveyAnalytics {
  metrics: SurveyMetric[];
  chartData: ChartData;
  recentResponses: SurveyResponse[];
  segmentDistribution: ChartData;
}

export type MetricType = "NPS" | "CES" | "CSAT";
export type TimeRange = "week" | "month" | "quarter" | "year";

export interface SurveyFilters {
  metricType: MetricType;
  timeRange: TimeRange;
  segment?: string;
  dateFrom?: string;
  dateTo?: string;
}
