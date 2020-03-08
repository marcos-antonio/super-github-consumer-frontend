import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { UserListTemplate } from 'templates/user/list';

const Index = () => {
  const [users, setUsers] = useState(null);
  const [currentSince, setCurrentSince] = useState(0);
  const [nextPageSince, setNextPageSince] = useState(null);

  const loadNextPageFromLinkHeader = (header: string) => {
    if (!header.includes('rel=next')) {
      setNextPageSince(null);
      return;
    }

    setNextPageSince(
      +header.slice(
        header.indexOf('since') + 'since'.length + 1,
        header.indexOf('>')
      )
    );
  };

  useEffect(() => {
    axios
      .get('http://localhost:3001/users/', {
        params: {
          since: currentSince,
        },
      })
      .then(response => {
        loadNextPageFromLinkHeader(response.headers['link']);
        setUsers(response.data);
      });
  }, [currentSince]);

  console.log(nextPageSince);

  return (
    users && (
      <UserListTemplate
        userList={users}
        hasPagination={true}
        nextPageClickHandler={() => setCurrentSince(nextPageSince)}
        previousPageClickHandler={() => setCurrentSince(0)}
        previousPageDisabled={currentSince === 0}
        nextPageDisabled={!nextPageSince}
      />
    )
  );
};

export default Index;
