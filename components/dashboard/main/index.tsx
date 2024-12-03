/*eslint-disable*/
'use client';

import Statistics from '@/components/dashboard/main/cards/Statistics';
import StatisticsRed from '@/components/dashboard/main/cards/StatisticsRed';
import MacroMapComponent from '@/components/charts/MacroMap';
import InfoCardComponent from '@/components/charts/InfoCard';
import InfoCardDetail from '@/components/charts/InfoCardDetail';
import InfoCardIncidentDetailViewComponent from '@/components/charts/InfoCardIncidentDetailView';
import DashboardLayout from '@/components/layout';
import { Button } from '@/components/ui/button';
import { Database } from '@/types/types_db';
import { User } from '@supabase/supabase-js';
import {
  HiChartBar,
  HiUsers,
  HiOutlineWallet,
  HiOutlineCurrencyDollar
} from 'react-icons/hi2';
import Link from 'next/link';
import InfoCardIncidentDetailComponent from '@/components/charts/InfoCardIncidentDetail';

type Subscription = Database['public']['Tables']['subscriptions']['Row'];
type Product = Database['public']['Tables']['products']['Row'];
type Price = Database['public']['Tables']['prices']['Row'];
interface ProductWithPrices extends Product {
  prices: Price[];
}
interface PriceWithProduct extends Price {
  products: Product | null;
}
interface SubscriptionWithProduct extends Subscription {
  prices: PriceWithProduct | null;
}

interface Props {
  user: User | null | undefined;
  products: ProductWithPrices[];
  subscription: SubscriptionWithProduct | null | any;
  userDetails: { [x: string]: any } | null | any;
}

export default function Settings(props: Props) {
  return (
    <DashboardLayout
      userDetails={props.userDetails}
      user={props.user}
      products={props.products}
      subscription={props.subscription}
      title="Subscription Page"
      description="Manage your subscriptions"
    >
      <div className="h-full w-full">
        <div className="mb-5 grid w-full grid-cols-1 gap-5 rounded-md md:grid-cols-2 xl:grid-cols-4">
          {/* statistics */}
          <StatisticsRed
            icon={
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-zinc-200 text-4xl dark:border-zinc-800 text-white text-foreground dark:text-white">
                <HiChartBar className="h-5 w-5" />
              </div>
            }
            title="Situation Status"
            value="Red"
            info="Life at risk"
          />
          <Statistics
            icon={
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-zinc-200 text-4xl dark:border-zinc-800 text-foreground dark:text-white">
                <HiUsers className="h-5 w-5" />
              </div>
            }
            title="People Identified"
            value="258"
            info="in risk zone"
          />
          <Statistics
            icon={
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-zinc-200 text-4xl dark:border-zinc-800 text-foreground dark:text-white">
                <HiOutlineWallet className="h-5 w-5 stroke-2" />
              </div>
            }
            title="Rescue Resources Available"
            value="17"
            info=""
          />
          <Statistics
            icon={
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-zinc-200 text-4xl dark:border-zinc-800 text-foreground dark:text-white">
                <HiOutlineCurrencyDollar className="h-5 w-5 stroke-2" />
              </div>
            }
            title="Command Level"
            value="Gold"
            endContent={
              <Link href="/dashboard/main">
                <Button
                  variant="outline"
                  className="mt-10 text-foreground dark:text-white bg-red-600 text-white hover:bg-red-700 hover:text-white"
                >
                  Escalate
                </Button>
              </Link>
            }
          />
        </div>
        <div className="mb-5 flex gap-5 flex-col xl:flex-row">
          {/* <BarChartComponent /> */}
          <InfoCardComponent />
          <InfoCardDetail />
        </div>

        <div className="h-full w-full rounded-md ">
          {/* <MainDashboardTable tableData={tableDataUserReports} /> */}
          <MacroMapComponent />
        </div>
        <div className="mb-5 flex gap-5 flex-col xl:flex-row">
          {/* <BarChartComponent /> */}
          <InfoCardIncidentDetailComponent />
          <InfoCardIncidentDetailViewComponent />
        </div>
      </div>
    </DashboardLayout>
  );
}
