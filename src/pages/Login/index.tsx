import { LoginHeader, LoginForm, LoginFooter } from "./components";

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-50 px-4 py-12">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8 md:p-10 space-y-6">
        
        <LoginHeader />
        
        <LoginForm />
        
        <LoginFooter />

      </div>
    </div>
  );
}