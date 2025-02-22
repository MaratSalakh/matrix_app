import HeaderUI from "@/components/ui/HeaderUI/HeaderUI";

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <HeaderUI></HeaderUI>
      {children}
    </>
  );
}
