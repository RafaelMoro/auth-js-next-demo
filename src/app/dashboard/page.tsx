import { SignOut } from "@/components/sign-out";

export default function DashboardPage() {
  return (
    <main className="flex flex-col items-center gap-3 mt-4">
      <h1 className="text-4xl font-bold">Dashboard</h1>
      <SignOut />
    </main>
  )
}