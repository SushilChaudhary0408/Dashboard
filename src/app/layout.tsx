

"use client";

import * as React from "react";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import "./globals.css";

const validPaths = [
  "/dashboard",
  "/companies/all-companies",
  "/companies/companies-request",
  "/vm-management",
  "/payment",
  "/settings",
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();

  const pageTitle =
    pathname === "/dashboard"
      ? "Dashboard"
      : pathname === "/companies/all-companies"
      ? "All Companies"
      : pathname === "/companies/companies-request"
      ? "Registration Request"
      : pathname === "/vm-management"
      ? "VM Management"
      : pathname === "/payment"
      ? "Payment"
      : pathname === "/settings"
      ? "Settings"
      : "";

  useEffect(() => {
    if (!validPaths.includes(pathname)) {
      router.push("/dashboard"); // Redirect to dashboard if invalid path
    }
  }, [pathname, router]);

  return (
    <html lang="en">
      <body>
        <SidebarProvider>
          <AppSidebar />
          <main className="w-full">
            <SidebarTrigger />
            <Breadcrumb aria-label="Breadcrumb">
              <BreadcrumbList>
                {/* Dashboard */}
                <BreadcrumbItem>
                  <BreadcrumbLink href="/dashboard">Dashboard</BreadcrumbLink>
                </BreadcrumbItem>

                {/* Companies, Payment, VM Management, or Settings */}
                {pathname === "/companies/all-companies" || pathname === "/companies/companies-request" ? (
                  <>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                      <BreadcrumbLink href="/companies">Companies</BreadcrumbLink>
                    </BreadcrumbItem>
                  </>
                ) : pathname === "/payment" ? (
                  <>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                      <BreadcrumbLink href="/payment">Payment</BreadcrumbLink>
                    </BreadcrumbItem>
                  </>
                ) : pathname === "/vm-management" ? (
                  <>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                      <BreadcrumbLink href="/vm-management">VM-management</BreadcrumbLink>
                    </BreadcrumbItem>
                  </>
                ) : pathname === "/settings" ? (
                  <>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                      <BreadcrumbLink href="/settings">Settings</BreadcrumbLink>
                    </BreadcrumbItem>
                  </>
                ) : null}

                {/* Final Page (All Companies or Registration Request) */}
                {pageTitle !== "Dashboard" &&
                  pathname !== "/payment" &&
                  pathname !== "/vm-management" &&
                  pathname !== "/settings" && (
                    <>
                      <BreadcrumbSeparator />
                      <BreadcrumbItem>
                        <BreadcrumbLink href={pathname}>{pageTitle}</BreadcrumbLink>
                      </BreadcrumbItem>
                    </>
                  )}
              </BreadcrumbList>
            </Breadcrumb>
            {/* Page Title */}
            <h1 className="text-4xl font-bold p-4">{pageTitle}</h1>

            {children}
          </main>
        </SidebarProvider>
      </body>
    </html>
  );
}

