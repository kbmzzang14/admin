"use client";
/*
 * Documentation:
 * Avatar — https://app.subframe.com/16c7559ad175/library?component=Avatar_bec25ae6-5010-4485-b46b-cf79e3943ab2
 * Default Page Layout — https://app.subframe.com/16c7559ad175/library?component=Default+Page+Layout_a57b1c43-310a-493f-b807-8cc88e2452cf
 * Dropdown Menu — https://app.subframe.com/16c7559ad175/library?component=Dropdown+Menu_99951515-459b-4286-919e-a89e7549b43b
 * Sidebar rail with labels — https://app.subframe.com/16c7559ad175/library?component=Sidebar+rail+with+labels_3296372a-ba83-4ca9-b291-10dc2aa86fdd
 */

import React from "react";
import { FeatherBell } from "@subframe/core";
import { FeatherSettings } from "@subframe/core";
import { FeatherUser } from "@subframe/core";
import { FeatherLogOut } from "@subframe/core";
import * as SubframeCore from "@subframe/core";
import { Avatar } from "../components/Avatar";
import { DropdownMenu } from "../components/DropdownMenu";
import { SidebarRailWithLabels } from "../components/SidebarRailWithLabels";
import * as SubframeUtils from "../utils";
import { useRouter, usePathname } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";

interface DefaultPageLayoutRootProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
}

const DefaultPageLayoutRoot = React.forwardRef<
  HTMLDivElement,
  DefaultPageLayoutRootProps
>(function DefaultPageLayoutRoot(
  { children, className, ...otherProps }: DefaultPageLayoutRootProps,
  ref
) {
  const router = useRouter();
  const pathname = usePathname();
  const { user, signOut } = useAuth();

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  const handleSignOut = async () => {
    await signOut();
    router.push("/login");
  };

  return (
    <div
      className={SubframeUtils.twClassNames(
        "flex h-screen w-full items-center",
        className
      )}
      ref={ref}
      {...otherProps}
    >
      <SidebarRailWithLabels
        header={
          <div className="flex flex-col items-center justify-center gap-2 px-1 py-1">
            <img
              className="h-6 w-6 flex-none object-cover"
              // src="https://res.cloudinary.com/subframe/image/upload/v1711417507/shared/y2rsnhq3mex4auk54aye.png"
              src="https://res.cloudinary.com/subframe/image/upload/v1755564252/uploads/24387/jbk4cjjo9wo4chpjsmih.svg"
            />
          </div>
        }
        footer={
          <>
            <SidebarRailWithLabels.NavItem icon={<FeatherBell />} />
            <SidebarRailWithLabels.NavItem icon={<FeatherSettings />} />
            <div className="flex flex-col items-center justify-end gap-1 px-2 py-2">
              <SubframeCore.DropdownMenu.Root>
                <SubframeCore.DropdownMenu.Trigger asChild={true}>
                  <Avatar image="https://res.cloudinary.com/subframe/image/upload/v1711417507/shared/fychrij7dzl8wgq2zjq9.avif">
                    {user?.email?.charAt(0).toUpperCase() || "U"}
                  </Avatar>
                </SubframeCore.DropdownMenu.Trigger>
                <SubframeCore.DropdownMenu.Portal>
                  <SubframeCore.DropdownMenu.Content
                    side="right"
                    align="end"
                    sideOffset={4}
                    asChild={true}
                  >
                    <DropdownMenu>
                      <DropdownMenu.DropdownItem icon={<FeatherUser />}>
                        {user?.email}
                      </DropdownMenu.DropdownItem>
                      <DropdownMenu.DropdownItem icon={<FeatherSettings />}>
                        Settings
                      </DropdownMenu.DropdownItem>
                      <DropdownMenu.DropdownItem
                        icon={<FeatherLogOut />}
                        onClick={handleSignOut}
                      >
                        Log out
                      </DropdownMenu.DropdownItem>
                    </DropdownMenu>
                  </SubframeCore.DropdownMenu.Content>
                </SubframeCore.DropdownMenu.Portal>
              </SubframeCore.DropdownMenu.Root>
            </div>
          </>
        }
      >
        <SidebarRailWithLabels.NavItem
          icon={<SubframeCore.FeatherLayoutDashboard />}
          selected={pathname === "/dashboard"}
          onClick={() => handleNavigation("/dashboard")}
        >
          홈
        </SidebarRailWithLabels.NavItem>
        <SidebarRailWithLabels.NavItem
          icon={<SubframeCore.FeatherBarChart4 />}
          selected={pathname === "/survey"}
          onClick={() => handleNavigation("/survey")}
        >
          설문
        </SidebarRailWithLabels.NavItem>
        {/* <SidebarRailWithLabels.NavItem
          icon={<FeatherInbox />}
          selected={pathname === "/inbox"}
          onClick={() => handleNavigation("/inbox")}
        >
          Inbox
        </SidebarRailWithLabels.NavItem> */}
        {/* <SidebarRailWithLabels.NavItem
          icon={<FeatherBarChart2 />}
          selected={pathname === "/reports"}
          onClick={() => handleNavigation("/reports")}
        >
          Reports
        </SidebarRailWithLabels.NavItem> */}
      </SidebarRailWithLabels>
      {children ? (
        <div className="flex grow shrink-0 basis-0 flex-col items-start gap-4 self-stretch overflow-y-auto bg-default-background">
          {children}
        </div>
      ) : null}
    </div>
  );
});

export const DefaultPageLayout = DefaultPageLayoutRoot;
