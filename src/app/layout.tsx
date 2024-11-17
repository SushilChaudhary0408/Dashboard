

// "use client";

// import * as React from "react";
// import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
// import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
// import { AppSidebar } from "@/components/app-sidebar";
// import { usePathname, useRouter } from "next/navigation";
// import { useEffect } from "react";
// import "./globals.css";
// import { titleKeyPair } from "../../utilis";

// const validPaths = [
//   "/dashboard",
//   "/companies/all-companies",
//   "/companies/companies-request",
//   "/vm-management",
//   "/payment",
//   "/settings",
// ];

// export default function Layout({ children }: { children: React.ReactNode }) {
//   const pathname = usePathname();
//   const router = useRouter();

//   const splitPathname = pathname.split('/');

//   useEffect(() => {
//     if (!validPaths.includes(pathname)) {
//       router.push("/dashboard"); // Redirect to dashboard if invalid path
//     }
//   }, [pathname, router]);

//   return (
//     <html lang="en">
//       <body>
//         <SidebarProvider>
//           <AppSidebar />
//           <main className="w-full">
//             <SidebarTrigger />
//             <Breadcrumb aria-label="Breadcrumb">
//               <BreadcrumbList>
//                 {/* Dashboard */}
//                 <BreadcrumbItem>
//                   <BreadcrumbLink href="/dashboard">Dashboard</BreadcrumbLink>
//                 </BreadcrumbItem>

//                 <>
//                   <BreadcrumbSeparator />
//                   <BreadcrumbItem>
//                     <BreadcrumbLink href="/companies">Companies</BreadcrumbLink>
//                   </BreadcrumbItem>
//                 </>



//                 <BreadcrumbSeparator />
//                 <BreadcrumbItem>
//                   <BreadcrumbLink href={pathname}>{titleKeyPair[splitPathname[2] as keyof typeof titleKeyPair]}</BreadcrumbLink>
//                 </BreadcrumbItem>


//               </BreadcrumbList>
//             </Breadcrumb>
//             {/* Page Title */}
//             <h1 className="text-4xl font-bold p-4">{titleKeyPair[splitPathname[2] as keyof typeof titleKeyPair]}</h1>

//             {children}
//           </main>
//         </SidebarProvider>
//       </body>
//     </html>
//   );
// }












// 'use client';
// import * as React from "react";
// import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
// import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
// import { AppSidebar } from "@/components/app-sidebar";
// import { usePathname, useRouter } from "next/navigation";
// import { useEffect } from "react";
// import "./globals.css";
// import { titleKeyPair } from "../../utilis";

// const validPaths = [
//   "/dashboard",
//   "/companies/all-companies",
//   "/companies/companies-request",
//   "/vm-management",
//   "/payment",
//   "/settings",
// ];

// export default function Layout({ children }: { children: React.ReactNode }) {
//   const pathname = usePathname();
//   const router = useRouter();
//   const splitPathname = pathname.split('/');

//   useEffect(() => {
//     if (!validPaths.includes(pathname)) {
//       router.push("/dashboard"); // Redirect to dashboard if invalid path
//     }
//   }, [pathname, router]);

//   return (
//     <html lang="en">
//       <body>
//         <SidebarProvider>
//           <AppSidebar />
//           <main className="w-full">
//             <SidebarTrigger />
//             <Breadcrumb aria-label="Breadcrumb">
//               <BreadcrumbList>
//                 {/* Always show "Dashboard" */}
//                 <BreadcrumbItem>
//                   <BreadcrumbLink href="/dashboard">Dashboard</BreadcrumbLink>
//                 </BreadcrumbItem>

//                 {/* Conditional Rendering for each path */}
//                 {pathname === "/vm-management" || pathname === "/payment" || pathname === "/settings" ? (
//                   <>
//                     <BreadcrumbSeparator />
//                     <BreadcrumbItem>
//                       <BreadcrumbLink href={pathname}>
//                         {titleKeyPair[splitPathname[1] as keyof typeof titleKeyPair]}
//                       </BreadcrumbLink>
//                     </BreadcrumbItem>
//                   </>
//                 ) : pathname.includes("/companies") ? (
//                   <>
//                     <BreadcrumbSeparator />
//                     <BreadcrumbItem>
//                       <BreadcrumbLink href="/companies">Companies</BreadcrumbLink>
//                     </BreadcrumbItem>
//                     {splitPathname[2] && (
//                       <>
//                         <BreadcrumbSeparator />
//                         <BreadcrumbItem>
//                           <BreadcrumbLink href={pathname}>
//                             {titleKeyPair[splitPathname[2] as keyof typeof titleKeyPair]}
//                           </BreadcrumbLink>
//                         </BreadcrumbItem>
//                       </>
//                     )}
//                   </>
//                 ) : null}
//               </BreadcrumbList>
//             </Breadcrumb>

//             {/* Page Title */}
//             <h1 className="text-4xl font-bold p-4">
//               {titleKeyPair[splitPathname[2] as keyof typeof titleKeyPair] || "Dashboard"}
//             </h1>
//             {children}
//           </main>
//         </SidebarProvider>
//       </body>
//     </html>
//   );
// }













// 'use client';
// import * as React from "react";
// import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
// import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
// import { AppSidebar } from "@/components/app-sidebar";
// import { usePathname, useRouter } from "next/navigation";
// import { useEffect } from "react";
// import "./globals.css";
// import { titleKeyPair } from "../../utilis";

// const validPaths = [
//   "/dashboard",
//   "/companies",
//   "/companies/all-companies",
//   "/companies/companies-request",
//   "/vm-management",
//   "/payment",
//   "/settings",
// ];

// export default function Layout({ children }: { children: React.ReactNode }) {
//   const pathname = usePathname();
//   const router = useRouter();
//   const splitPathname = pathname.split('/');

//   useEffect(() => {
//     const basePath = `/${splitPathname[1]}`; /* Possible paths: /dashboard, /companies, /companies/all-companies, /companies/companies-request, /vm-management, /payment, /settings */
//     if (!validPaths.includes(basePath)) {
//       router.push("/dashboard"); // Redirect to dashboard if invalid path
//     }
//   }, [pathname, router]);

//   const getTitle = (path: string) => {
//     const keys = path.split('/').filter(Boolean);
//     return keys.map(key => titleKeyPair[key as keyof typeof titleKeyPair] || key).join(' > ');
//   };

//   return (
//     <html lang="en">
//       <body>
//         <SidebarProvider>
//           <AppSidebar />
//           <main className="w-full">
//             <SidebarTrigger />
//             <Breadcrumb aria-label="Breadcrumb">
//               <BreadcrumbList>
//                 {/* Always show "Dashboard" */}
//                 <BreadcrumbItem>
//                   <BreadcrumbLink href="/dashboard">Dashboard</BreadcrumbLink>
//                 </BreadcrumbItem>

//                 {/* Dynamic Breadcrumbs */}
//                 {splitPathname.map((segment, index) => {
//                   if (index === 0) return null; // Skip the initial empty segment
//                   const href = `/${splitPathname.slice(1, index + 1).join('/')}`;
//                   return (
//                     <React.Fragment key={href}>
//                       <BreadcrumbSeparator />
//                       <BreadcrumbItem>
//                         <BreadcrumbLink href={href}>
//                           {titleKeyPair[segment as keyof typeof titleKeyPair] || segment}
//                         </BreadcrumbLink>
//                       </BreadcrumbItem>
//                     </React.Fragment>
//                   );
//                 })}
//               </BreadcrumbList>
//             </Breadcrumb>

//             {/* Page Title */}
//             <h1 className="text-4xl font-bold p-4">
//               {getTitle(pathname)}
//             </h1>

//             {children}
//           </main>
//         </SidebarProvider>
//       </body>
//     </html>
//   );
// }

















'use client';
import * as React from "react";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import "./globals.css";
import { titleKeyPair } from "../../utilis";

const validPaths = [
  "/dashboard",
  "/companies",
  "/companies/all-companies",
  "/companies/all-companies/view-request",
  "/companies/companies-request",
  "/vm-management",
  "/payment",
  "/settings",
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const splitPathname = pathname.split('/');

  useEffect(() => {
    const basePath = `/${splitPathname[1]}`; /* Possible paths: /dashboard, /companies, /companies/all-companies, /companies/companies-request, /vm-management, /payment, /settings */
    if (!validPaths.includes(basePath)) {
      router.push("/dashboard"); // Redirect to dashboard if invalid path
    }
  }, [pathname, router]);

  const getTitle = (path: string) => {
    const keys = path.split('/').filter(Boolean);
    const lastKey = keys[keys.length - 1];
    return titleKeyPair[lastKey as keyof typeof titleKeyPair] || lastKey;
  };

  return (
    <html lang="en">
      <body>
        <SidebarProvider>
          <AppSidebar />
          <main className="w-full">
            <SidebarTrigger />
            <Breadcrumb aria-label="Breadcrumb">
              <BreadcrumbList>
                {/* Always show "Dashboard" */}
                <BreadcrumbItem>
                  <BreadcrumbLink href="/dashboard">Dashboard</BreadcrumbLink>
                </BreadcrumbItem>

                {/* Dynamic Breadcrumbs */}
                {splitPathname.map((segment, index) => {
                  if (index === 0) return null; // Skip the initial empty segment
                  const href = `/${splitPathname.slice(1, index + 1).join('/')}`;
                  return (
                    <React.Fragment key={href}>
                      <BreadcrumbSeparator />
                      <BreadcrumbItem>
                        <BreadcrumbLink href={href}>
                          {titleKeyPair[segment as keyof typeof titleKeyPair] || segment}
                        </BreadcrumbLink>
                      </BreadcrumbItem>
                    </React.Fragment>
                  );
                })}
              </BreadcrumbList>
            </Breadcrumb>

            {/* Page Title */}
            <h1 className="text-4xl font-bold p-4">
              {getTitle(pathname)}
            </h1>

            {children}
          </main>
        </SidebarProvider>
      </body>
    </html>
  );
}


















// "use client";

// import * as React from "react";
// import {
//   Breadcrumb,
//   BreadcrumbList,
//   BreadcrumbItem,
//   BreadcrumbLink,
//   BreadcrumbSeparator,
// } from "@/components/ui/breadcrumb";
// import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
// import { AppSidebar } from "@/components/app-sidebar";
// import { usePathname, useRouter } from "next/navigation";
// import { useEffect } from "react";
// import "./globals.css";

// const breadcrumbData = {
//   "/dashboard": ["Dashboard"],
//   "/companies": ["Dashboard", "Companies"],
//   "/companies/all-companies": ["Dashboard", "Companies", "All Companies"],
//   "/companies/companies-request": ["Dashboard", "Companies", "Registration Request"],
//   "/vm-management": ["Dashboard", "VM-management"],
//   "/payment": ["Dashboard", "Payment"],
//   "/settings": ["Dashboard", "Settings"],
// };

// const validPaths = Object.keys(breadcrumbData);

// export default function Layout({ children }: { children: React.ReactNode }) {
//   const pathname = usePathname();
//   const router = useRouter();

//   useEffect(() => {
//     if (!validPaths.includes(pathname)) {
//       router.push("/dashboard"); // Redirect to dashboard if invalid path
//     }
//   }, [pathname, router]);

//   const breadcrumbs = breadcrumbData[pathname] || [];

//   return (
//     <html lang="en">
//       <body>
//         <SidebarProvider>
//           <AppSidebar />
//           <main className="w-full">
//             <SidebarTrigger />
//             <Breadcrumb aria-label="Breadcrumb">
//               <BreadcrumbList>
//                 {breadcrumbs.map((crumb, index) => (
//                   <React.Fragment key={crumb}>
//                     <BreadcrumbItem>
//                       <BreadcrumbLink
//                         href={`/${crumb.toLowerCase().replace(/\s/g, "-")}`}
//                       >
//                         {crumb}
//                       </BreadcrumbLink>
//                     </BreadcrumbItem>
//                     {index < breadcrumbs.length - 1 && <BreadcrumbSeparator />}
//                   </React.Fragment>
//                 ))}
//               </BreadcrumbList>
//             </Breadcrumb>

//             {/* Page Title */}
//             <h1 className="text-4xl font-bold p-4">
//               {breadcrumbs[breadcrumbs.length - 1]}
//             </h1>

//             {children}
//           </main>
//         </SidebarProvider>
//       </body>
//     </html>
//   );
// }
