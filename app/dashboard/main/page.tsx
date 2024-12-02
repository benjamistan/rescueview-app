import Main from '@/components/dashboard/main';
// import {
//   getProducts,
//   getSubscription,
//   getUser,
//   getUserDetails
// } from '@/utils/supabase/queries';
// import { createClient } from '@/utils/supabase/server';
// import { redirect } from 'next/navigation';

export default async function Account() {
  //   const supabase = createClient();
  //   const [user, userDetails, products, subscription] = await Promise.all([
  //     getUser(supabase),
  //     getUserDetails(supabase),
  //     getProducts(supabase),
  //     getSubscription(supabase)
  //   ]);

  //   if (!user) {
  //     return redirect('/dashboard/signin');
  //   }

  const userDetails = null;
  const user = null;
  const products = null;
  const subscription = null;

  return (
    <Main
      userDetails={userDetails}
      user={user}
      products={products}
      subscription={subscription}
    />
  );
}
