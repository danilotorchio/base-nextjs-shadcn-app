'use client';

import { Controller, useForm } from 'react-hook-form';
import * as yup from 'yup';

import { yupResolver } from '@hookform/resolvers/yup';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Field, FieldDescription, FieldError, FieldGroup, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

const schema = yup
  .object({
    email: yup.string().trim().email().required('Email required'),
    password: yup.string().trim().required('Password required'),
  })
  .required();

type SignInForm = {
  email: string;
  password: string;
};

export function LoginForm({ className, ...props }: React.ComponentProps<'div'>) {
  const { control, handleSubmit } = useForm<SignInForm>({
    resolver: yupResolver(schema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = (values: SignInForm) => {
    console.log(values);
  };

  return (
    <div className={cn('flex flex-col gap-6', className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle>Login to your account</CardTitle>
          <CardDescription>Enter your email below to login to your account</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FieldGroup>
              <Controller
                name="email"
                control={control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="email">Email</FieldLabel>

                    <Input
                      {...field}
                      id="email"
                      type="email"
                      placeholder="m@example.com"
                      aria-invalid={fieldState.invalid}
                    />

                    {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                  </Field>
                )}
              />

              <Controller
                name="password"
                control={control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <div className="flex items-center">
                      <FieldLabel htmlFor="password">Password</FieldLabel>
                      <a href="#" className="ml-auto inline-block text-sm underline-offset-4 hover:underline">
                        Forgot your password?
                      </a>
                    </div>
                    <Input {...field} id="password" type="password" data-invalid={fieldState.invalid} />
                    {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                  </Field>
                )}
              />

              <Field>
                <Button type="submit">Login</Button>
                <Button variant="outline" type="button">
                  Login with Google
                </Button>
                <FieldDescription className="text-center">
                  Don&apos;t have an account? <a href="#">Sign up</a>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
