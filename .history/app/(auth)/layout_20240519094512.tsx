import { Logo } from "./_components/Logo";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="h-full flex flex-col items-center justify-center space-y-6 border-2 border-white">
      <Logo />

      {children}
    </div>
  );
}
