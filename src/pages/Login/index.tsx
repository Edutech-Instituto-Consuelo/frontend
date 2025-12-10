import { AuthLayout } from "@/components/AuthLayout";
import { LoginHeader, LoginForm, LoginFooter } from "./components";


export default function Login() {
  return (
    <AuthLayout>
        <LoginHeader />
        
        <LoginForm />
        
        <LoginFooter />
    </AuthLayout>
  );
}