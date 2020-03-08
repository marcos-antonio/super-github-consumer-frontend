import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

import { UserDetailTemplate } from 'templates/user/detail';

const Index = () => {
  const router = useRouter();
  const userLogin = router.query.login;
  const [user, setUser] = useState(null);
  const [userRepos, setUserRepos] = useState(null);
  const getUserDetail = () => {
    return axios.get(`http://localhost:3001/users/${userLogin}/details`);
  };
  const getUserRepos = () => {
    return axios.get(`http://localhost:3001/users/${userLogin}/repos`);
  };

  useEffect(() => {
    if (!userLogin) return;
    axios.all([getUserDetail, getUserRepos]).then(
      axios.spread(async (userDetailReq, userReposReq) => {
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
