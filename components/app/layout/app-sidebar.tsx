'use client';

import { BrainIcon, ChartPieIcon } from 'lucide-react';

import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader } from '@/components/ui/sidebar';

import { NavMain } from './nav-main';
import { NavUser } from './nav-user';
import { OrganizationInfo, OrganizationSwitcher } from './organization-switcher';

const data: {
  organizations: OrganizationInfo[];
  navMain: {
    title: string;
    url: string;
    icon: React.ElementType;
  }[];
  user: {
    name: string;
    email: string;
    avatar: string;
  };
} = {
  navMain: [
    {
      title: 'Dashboard',
      url: '/dashboard',
      icon: ChartPieIcon,
    },
  ],
  organizations: [
    {
      name: 'Brain Corp',
      logo: BrainIcon,
      plan: 'Enterprise',
    },
  ],
  user: {
    name: 'Cuca Maluca',
    email: 'cuca@vai.te.pegar',
    avatar: 'https://gravatar.com/avatar/0000?d=mp',
  },
};

export default function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <OrganizationSwitcher organizations={data.organizations} />
      </SidebarHeader>

      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>

      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
