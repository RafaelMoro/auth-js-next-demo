import SignIn from "@/components/sign-in";

export default function Home() {
  return (
    <div className="flex flex-col items-center gap-3 mt-4">
      <h1 className="text-4xl font-bold">Welcome to Auth demo</h1>
      <SignIn />
    </div>
  );
}
