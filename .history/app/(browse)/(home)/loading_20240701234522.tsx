import { ResultsSkeleton } from "./_components/results";

export default function LoadingPage() {
  return (
    <div className="h-full p-8 max-w-screen-2xl mx-auto">
      <ResultsSkeleton />;
    </div>
  );
}
