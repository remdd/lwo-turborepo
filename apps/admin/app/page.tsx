import { Card } from "@lwo/ui/card";

export default function Page() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24">
      <div className="z-10 items-center justify-between w-full max-w-5xl font-mono text-sm lg:flex">
        <h1>LWO admin site</h1>
      </div>

      <Card title="Shared UI - Card component">This is shared UI!</Card>
    </main>
  );
}
