
import { signIn } from "@/auth"
 
export default function SignInGoogle() {
  return (
    <form
      action={async () => {
        "use server"
        await signIn("google", { redirectTo: "/dashboard" })
      }}
    >
      <button
        className="px-4 py-2 text-white bg-indigo-900 rounded-lg duration-150 hover:bg-indigo-700 active:shadow-lg"
        type="submit"
      >Sign in with Google</button>
    </form>
  )
} 