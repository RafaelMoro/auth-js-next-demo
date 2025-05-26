import { redirect } from 'next/navigation'
import { SignOut } from "@/components/sign-out";
import UserAvatar from "@/components/UserAvatar";
import { auth } from "../../auth"

export default async function DashboardPage() {
  const session = await auth()

  if (!session?.user) {
    redirect('/')
  }

  return (
    <main className="flex flex-col items-center gap-3 mt-4">
      <h1 className="text-4xl font-bold">Welcome {session?.user?.name}</h1>
      <UserAvatar imgSrc={session.user.image ?? ""} />
      <SignOut />
    </main>
  )
}