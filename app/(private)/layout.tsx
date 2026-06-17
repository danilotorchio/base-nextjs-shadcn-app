import { AppLayout } from '@/components/app/layout/app-layout';

export default function PrivateLayout({ children }: { children: React.ReactNode }) {
  return <AppLayout>{children}</AppLayout>;
}
