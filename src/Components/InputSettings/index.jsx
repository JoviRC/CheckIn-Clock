/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable promise/always-return */
/* eslint-disable promise/catch-or-return */
import React, { useState, useEffect } from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import jwt_defode from 'jwt-decode';
import { LOGIN_ADMIN } from 'lib/Constants';
import { Input, Button, Icon } from './InputSettings.style';

const axios = require('axios').default;

const InputSettings = () => {
  const [userID, setUserID] = useState('');
  const [action, setAction] = useState(false);
  const [message, setMessage] = useState(null);
  const [showMessage, setShowMessage] = useState(false);
  const [navidateTo, setNavigateTo] = useState(false);
  const token = localStorage.getItem('token');
  const decoded = jwt_defode(token);
  const location = useLocation();

  useEffect(() => {
    if (action) {
      fetch(LOGIN_ADMIN, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          input: userID,
          areaToken: decoded.uid,
        }),
      })
        .then((response) => response.json())
        .then((res) => {
          console.log(res.status);
          console.log(res.message);
          console.log(res.access_token);
          if (res.status === 200) {
            localStorage.setItem('token_admin', res.access_token);
            setMessage('Bienvenido');
            setShowMessage(true);
            setTimeout(() => {
              setMessage(null);
              setShowMessage(false);
              setNavigateTo(true);
            }, 2000);
          }
        })
        .catch((err) => {
          console.log(err);
          setMessage('Error al ingresar, intente nuevamente ');
          setShowMessage(true);
          setUserID('');
          setTimeout(() => {
            setMessage(null);
            setShowMessage(false);
          }, 2000);
        });
    }
    setAction(false);
    setUserID('');
  }, [action]);
  if (navidateTo)
    return <Navigate replace to="/settings/" state={{ from: location }} />;

  if (showMessage) return <p>{message}</p>;
  return (
    <>
      <Input
        type="password"
        value={userID}
        placeholder="ID Usuario"
        onChange={(e) => setUserID(e.target.value)}
      />
      <Button onClick={() => setAction(true)}>
        <Icon />
      </Button>
    </>
  );
};

export default InputSettings;
