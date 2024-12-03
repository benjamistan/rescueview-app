// Auth Imports
import { IRoute } from '@/types/types';
import {
  HiOutlineCog8Tooth,
  HiPaperAirplane,
  HiOutlineHome,
  HiOutlineUsers,
  HiOutlineLifebuoy,
  HiMiniMapPin
} from 'react-icons/hi2';

export const routes: IRoute[] = [
  {
    name: 'Main Dashboard',
    path: '/dashboard/main',
    icon: <HiOutlineHome className="-mt-[7px] h-4 w-4 stroke-2 text-inherit" />,
    collapse: false
  },
  {
    name: 'Active Missions',
    path: '/dashboard/main',
    icon: (
      <HiOutlineLifebuoy className="-mt-[7px] h-4 w-4 stroke-2 text-inherit" />
    ),
    collapse: true,
    items: [
      {
        name: 'Valencia - Flood',
        path: '/dashboard/main',
        collapse: false
      },
      {
        name: 'New Orleans - Hurricane',
        path: '/dashboard/main',
        collapse: false
      },
      {
        name: 'Borough Market - MTA',
        path: '/dashboard/main',
        collapse: false
      },
      {
        name: 'Bataclan - MTA',
        path: '/dashboard/main',
        collapse: false
      }
    ]
  },
  // {
  //  name: 'AI Generator',
  //  path: '/dashboard/ai-generator',
  //  icon: <MdWorkspacePremium className="-mt-[7px] h-4 w-4 stroke-2 text-inherit" />,
  //  collapse: false,
  // },
  // {
  //  name: 'AI Assistant',
  //  path: '/dashboard/ai-assistant',
  //  icon: <MdAssistant className="-mt-[7px] h-4 w-4 stroke-2 text-inherit" />,
  //  collapse: false,
  // },
  // {
  //  name: 'AI Chat',
  //  path: '/dashboard/ai-chat',
  //  icon: <MdAutoAwesome className="-mt-[7px] h-4 w-4 stroke-2 text-inherit" />,
  //  collapse: false,
  // },
  {
    name: 'Misson Planning',
    path: '/dashboard/users-list',
    icon: (
      <HiOutlineUsers className="-mt-[7px] h-4 w-4 stroke-2 text-inherit" />
    ),
    collapse: false
  },
  {
    name: 'Analytics & Reports',
    path: '/dashboard/settings',
    icon: (
      <HiOutlineCog8Tooth className="-mt-[7px] h-4 w-4 stroke-2 text-inherit" />
    ),
    collapse: false
  },
  {
    name: 'Drone Fleet Management',
    path: '/dashboard/subscription',
    icon: (
      <HiPaperAirplane className="-mt-[7px] h-4 w-4 stroke-2 text-inherit" />
    ),
    collapse: false
  },
  {
    name: 'Maps & Terrain',
    path: '/home',
    icon: <HiMiniMapPin className="-mt-[7px] h-4 w-4 stroke-2 text-inherit" />,
    collapse: false
  },
  {
    name: 'Resource Requests',
    path: '/pricing',
    icon: (
      <HiOutlineUsers className="-mt-[7px] h-4 w-4 stroke-2 text-inherit" />
    ),
    collapse: false
  }
];
