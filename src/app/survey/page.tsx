import ProtectedRoute from "@/components/ProtectedRoute";
import SurveyDashboard from "@/pages/SurveyDashboard";

export default function SurveyPage() {
  return (
    <ProtectedRoute>
      <SurveyDashboard />
    </ProtectedRoute>
  );
}
