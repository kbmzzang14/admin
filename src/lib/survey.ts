import {
  SurveyMetric,
  SurveyResponse,
  ChartData,
  MetricType,
  TimeRange,
} from "@/types/survey";

// 샘플 데이터 생성 함수들
export const generateSampleMetrics = (
  metricType: MetricType
): SurveyMetric[] => {
  const baseMetrics = {
    NPS: [
      {
        id: "nps",
        name: "Net Promoter Score",
        value: 42,
        change: 5,
        changeType: "increase" as const,
      },
      {
        id: "responses",
        name: "Total Responses",
        value: 1284,
        change: 23,
        changeType: "increase" as const,
        unit: "% response rate",
      },
      {
        id: "promoters",
        name: "Promoters",
        value: 52,
        change: 8,
        changeType: "increase" as const,
        unit: "%",
      },
    ],
    CES: [
      {
        id: "ces",
        name: "Customer Effort Score",
        value: 2.8,
        change: -0.3,
        changeType: "decrease" as const,
      },
      {
        id: "responses",
        name: "Total Responses",
        value: 856,
        change: 15,
        changeType: "increase" as const,
        unit: "% response rate",
      },
      {
        id: "easy",
        name: "Easy Interactions",
        value: 68,
        change: 12,
        changeType: "increase" as const,
        unit: "%",
      },
    ],
    CSAT: [
      {
        id: "csat",
        name: "Customer Satisfaction",
        value: 4.2,
        change: 0.1,
        changeType: "increase" as const,
      },
      {
        id: "responses",
        name: "Total Responses",
        value: 1023,
        change: 18,
        changeType: "increase" as const,
        unit: "% response rate",
      },
      {
        id: "satisfied",
        name: "Satisfied Customers",
        value: 78,
        change: 5,
        changeType: "increase" as const,
        unit: "%",
      },
    ],
  };

  return baseMetrics[metricType] || baseMetrics.NPS;
};

export const generateSampleChartData = (
  _metricType: MetricType,
  _timeRange: TimeRange
): ChartData => {
  const baseData = [
    { Year: "2015", Psychology: 120, Business: 110, Biology: 100 },
    { Year: "2016", Psychology: 130, Business: 95, Biology: 105 },
    { Year: "2017", Psychology: 115, Business: 105, Biology: 110 },
    { Year: "2018", Psychology: 125, Business: 120, Biology: 90 },
    { Year: "2019", Psychology: 110, Business: 130, Biology: 85 },
    { Year: "2020", Psychology: 135, Business: 100, Biology: 95 },
    { Year: "2021", Psychology: 105, Business: 115, Biology: 120 },
    { Year: "2022", Psychology: 140, Business: 125, Biology: 130 },
  ];

  return {
    categories: ["Psychology", "Business", "Biology"],
    data: baseData,
    index: "Year",
  };
};

export const generateSampleResponses = (): SurveyResponse[] => {
  return [
    {
      id: "1",
      customer: {
        id: "cust1",
        name: "John Smith",
        email: "john@example.com",
        avatar: "",
      },
      score: 9,
      segment: "Enterprise",
      date: "2 days ago",
      feedback: "Great experience with the product!",
    },
    {
      id: "2",
      customer: {
        id: "cust2",
        name: "Sarah Johnson",
        email: "sarah@example.com",
        avatar: "",
      },
      score: 7,
      segment: "Mid-Market",
      date: "3 days ago",
      feedback: "Good overall, but could be better",
    },
    {
      id: "3",
      customer: {
        id: "cust3",
        name: "Mike Wilson",
        email: "mike@example.com",
        avatar: "",
      },
      score: 10,
      segment: "Enterprise",
      date: "4 days ago",
      feedback: "Excellent service and support!",
    },
  ];
};

export const generateSegmentDistribution = (): ChartData => {
  return {
    categories: ["Graduates"],
    data: [
      { Major: "Psychology", Graduates: 180 },
      { Major: "Business", Graduates: 160 },
      { Major: "Biology", Graduates: 140 },
    ],
    index: "Major",
  };
};

// 유틸리티 함수들
export const formatMetricValue = (metric: SurveyMetric): string => {
  if (metric.unit) {
    return `${metric.value}${metric.unit}`;
  }
  return metric.value.toString();
};

export const getChangeText = (metric: SurveyMetric): string => {
  const changeText =
    metric.change > 0 ? `+${metric.change}` : metric.change.toString();
  return `${changeText} from last month`;
};

export const getScoreVariant = (
  score: number
): "success" | "warning" | "error" => {
  if (score >= 8) return "success";
  if (score >= 6) return "warning";
  return "error";
};

export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  const now = new Date();
  const diffTime = Math.abs(now.getTime() - date.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays === 1) return "1 day ago";
  if (diffDays < 7) return `${diffDays} days ago`;
  if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
  return `${Math.floor(diffDays / 30)} months ago`;
};
