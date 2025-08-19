import ProtectedRoute from "@/components/ProtectedRoute";
import Main from "@/pages/Main";

export default function DashboardPage() {
  return (
    <ProtectedRoute>
      <Main />
    </ProtectedRoute>
  );
}
