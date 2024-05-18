import { Logo } from "./_components/Logo";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="h-full flex items-center justify-center">
      <Logo />

      {children}
    </div>
  );
}
