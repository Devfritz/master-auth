import { ButtonLogin } from "@/components/auth/login-button";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center bg-sky-600 h-screen">
      <div className="space-y-6">
        <h1 className="text-center font-bold text-6xl text-white drop-shadow-md">
          🔒Auth
        </h1>
        <p className="text-white text-lg">A Simple Authentification Service</p>
      </div>
      <ButtonLogin>
        <Button variant="secondary" size="lg" className="mt-2">Sign Up</Button>
      </ButtonLogin>
    </main>
  );
}
