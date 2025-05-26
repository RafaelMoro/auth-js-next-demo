import SignInGithub from "@/components/sign-in";
import SignInGoogle from "@/components/SignInGoogle";

export default function Home() {
  return (
    <div className="flex flex-col items-center gap-3 mt-4">
      <h1 className="text-4xl font-bold">Welcome to Auth demo</h1>
      <p className="text-xl">Sign in with any of these options:</p>
      <div className="flex justify-center gap-3">
        <SignInGithub />
        <SignInGoogle />
      </div>
    </div>
  );
}
