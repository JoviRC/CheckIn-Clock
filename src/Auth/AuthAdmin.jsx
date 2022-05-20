import React, { useState, useEffect } from 'react';
import { TOKEN_URL_ADMIN } from 'lib/Constants';

const AuthUserAdmin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState();
  const accessToken = localStorage.getItem('token_admin');

  useEffect(() => {
    fetch(TOKEN_URL_ADMIN, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ token: accessToken }),
    })
      .then((response) => response.json())
      // eslint-disable-next-line consistent-return
      .then((res) => {
        if (res.status === 200) {
          setIsAuthenticated(true);
        }
        // eslint-disable-next-line promise/always-return
        if (res.status === 401) {
          setIsAuthenticated(false);
        }
      })
      .catch((err) => console.error(err));
  }, [isAuthenticated, accessToken]);
  return isAuthenticated;
};
export default AuthUserAdmin;
