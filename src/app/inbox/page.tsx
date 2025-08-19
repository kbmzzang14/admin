import ProtectedRoute from "@/components/ProtectedRoute";
import { DefaultPageLayout } from "@/ui/layouts/DefaultPageLayout";

export default function InboxPage() {
  return (
    <ProtectedRoute>
      <DefaultPageLayout>
        <div className="container max-w-none flex h-full w-full flex-col items-start gap-8 bg-default-background py-12">
          <div className="flex w-full items-start justify-between">
            <div className="flex flex-col items-start gap-1">
              <span className="text-heading-2 font-heading-2 text-default-font">
                📥 Inbox
              </span>
              <span className="text-body font-body text-subtext-color">
                Manage your messages and notifications
              </span>
            </div>
          </div>
          <div className="flex w-full items-center justify-center py-20">
            <div className="text-center">
              <div className="text-6xl mb-4">📬</div>
              <h2 className="text-heading-3 font-heading-3 text-default-font mb-2">
                Inbox Coming Soon
              </h2>
              <p className="text-body font-body text-subtext-color">
                Message management features will be available soon!
              </p>
            </div>
          </div>
        </div>
      </DefaultPageLayout>
    </ProtectedRoute>
  );
}
