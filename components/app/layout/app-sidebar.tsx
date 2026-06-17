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
      name: 'DT Engenharia',
      logo: BrainIcon,
      plan: 'Enterprise',
    },
  ],
  user: {
    name: 'Danilo Torchio',
    email: 'danilotorchio@gmail.com',
    avatar: 'https://gravatar.com/avatar/820821376244bbe9fdcc7020b3a320d3afa852cb8d54864f9b33f8a22fe93950?d=mp',
  },
};

export default function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <OrganizationSwitcher organizations={data.organizations} />
        {/* <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              className="data-[slot=sidebar-menu-button]:p-1.5!"
              render={
                <a href="#">
                  <BrainIcon />
                  <span className="text-base font-semibold">DT Engenharia</span>
                </a>
              }
            />
          </SidebarMenuItem>
        </SidebarMenu> */}
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
