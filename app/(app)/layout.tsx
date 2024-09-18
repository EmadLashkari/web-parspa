import MainLayoutWrapper from "@/components/layout/MainLayoutWrapper";
import { PWA } from "./pwa";

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <MainLayoutWrapper>
      {children}
      <PWA />
    </MainLayoutWrapper>
  );
}
