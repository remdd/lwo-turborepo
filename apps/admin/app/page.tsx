import { Card } from "@lwo/ui/components";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <h1>LWO admin site</h1>
      </div>

      <Card>This is shared UI!</Card>
    </main>
  );
}
