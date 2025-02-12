import HeaderUI from "@/components/ui/Header/HeaderUI";

export default function ProfileLayout({
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
