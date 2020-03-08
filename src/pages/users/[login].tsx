import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import originalAxios from 'axios';
import axios from 'utils/defaultAxios';

import { UserDetailTemplate } from 'templates/user/detail';

const Index = () => {
  const router = useRouter();
  const userLogin = router.query.login;
  const [user, setUser] = useState(null);
  const [userRepos, setUserRepos] = useState(null);
  const getUserDetail = () => {
    return axios.get(`users/${userLogin}/details`);
  };
  const getUserRepos = () => {
    return axios.get(`users/${userLogin}/repos`);
  };

  useEffect(() => {
    if (!userLogin) return;
    originalAxios.all([getUserDetail, getUserRepos]).then(
      originalAxios.spread(async (userDetailReq, userReposReq) => {
        const userDetail = (await userDetailReq()).data;
        const repos = (await userReposReq()).data;
        setUser(userDetail);
        setUserRepos(repos);
      })
    );
  }, [router]);

  return user && <UserDetailTemplate user={user} userRepos={userRepos} />;
};

export default Index;
