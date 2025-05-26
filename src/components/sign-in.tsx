
import { signIn } from "@/auth"
 
export default function SignInGithub() {
  return (
    <form
      action={async () => {
        "use server"
        await signIn("github", { redirectTo: "/dashboard" })
      }}
    >
      <button
        className="px-4 py-2 text-white bg-gray-800 rounded-lg duration-150 hover:bg-gray-500 active:shadow-lg"
        type="submit"
      >Sign in with GitHub</button>
    </form>
  )
} 