import MainLayoutWrapper from "@/components/layout/MainLayoutWrapper";

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <MainLayoutWrapper>{children}</MainLayoutWrapper>;
}
