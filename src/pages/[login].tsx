import React from 'react';
import { useRouter } from 'next/router';

import { UserDetailTemplate } from 'templates/user/detail';

const Index = () => {
  const router = useRouter();
  console.log(router.query);
  return <UserDetailTemplate />;
};

export default Index;
