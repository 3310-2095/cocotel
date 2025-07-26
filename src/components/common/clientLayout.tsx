"use client";

import { usePathname } from "next/navigation";
import Footer from "./footer";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const hideFooterRoutes = ["/login", "/signup", "/register"]; // Added /register
  const shouldHideFooter = hideFooterRoutes.includes(pathname.toLowerCase());

  return (
    <>
      {children}
      {!shouldHideFooter && <Footer />}
    </>
  );
}