import { LoginForm } from './components/login-form';

export default function SigninPage() {
  return (
    <div className="grow flex items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <LoginForm />
      </div>
    </div>
  );
}
