import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { API_URL_USERS, API_URL_CHECKIN } from 'lib/Constants';
import { failTheme, passTheme, mainTheme } from 'lib/Theme';
import jwt_defode from 'jwt-decode';
import { Container, Input } from './InputHome.style';

const axios = require('axios').default;

const InputCheckin = ({ setTheme }) => {
  const [userID, setUserID] = useState('');
  const [action, setAction] = useState(null);
  const [message, setMessage] = useState(null);
  const [showMessage, setShowMessage] = useState(false);
  const token = localStorage.getItem('token');
  const decoded = jwt_defode(token);
  document.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      setAction(true);
    }
  });

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (action === true) {
      axios
        .get(API_URL_USERS, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
          params: {
            id: parseInt(userID, 10),
            area_id: decoded.uid,
          },
        })
        .then((res) => {
          if (res.status !== 200) {
            setTheme(failTheme);
            setMessage('Usuario no encontrado');
            setShowMessage(true);
            setTimeout(() => {
              setMessage(null);
              setShowMessage(false);
              setTheme(mainTheme);
            }, 2000);
          }
          if (res.data.length === 0) {
            setTheme(failTheme);
            setMessage('Usuario no encontrado');
            setShowMessage(true);
            setTimeout(() => {
              setMessage(null);
              setShowMessage(false);
              setTheme(mainTheme);
            }, 2000);
          }
          // eslint-disable-next-line promise/always-return
          if (res.data.length > 0) {
            // eslint-disable-next-line promise/no-nesting
            fetch(API_URL_CHECKIN, {
              method: 'PUT',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('token')}`,
              },
              body: JSON.stringify({
                id_user: userID,
              }),
            })
              .then((response) => response.json())
              .then((resp) => {
                if (resp.status === 200) {
                  setTheme(passTheme);
                  setMessage(resp.message);
                  setShowMessage(true);
                }
                if (resp.status === 203) {
                  setTheme(failTheme);
                  setMessage(resp.message);
                  setShowMessage(true);
                }
                // eslint-disable-next-line promise/always-return
                if (resp.status === 500) {
                  setTheme(failTheme);
                  setMessage(resp.message);
                  setShowMessage(true);
                }
              })
              .catch((err) => console.error(err));
            setTimeout(() => {
              setTheme(mainTheme);
              setMessage(null);
              setShowMessage(false);
            }, 2000);
          }
          setUserID('');
          setAction(false);
        })
        .catch((err) => {
          console.error(err);
          setMessage('Ocurrio un error, intente de nuevo');
          setShowMessage(true);
          setUserID('');
          setAction(false);
          setTheme(failTheme);
          setTimeout(() => {
            setMessage(null);
            setShowMessage(false);
            setTheme(mainTheme);
          });
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [action]);

  if (showMessage) {
    return (
      <Container>
        <h2>{message}</h2>
      </Container>
    );
  }

  return (
    <Container>
      <Input
        type="password"
        value={userID}
        placeholder="Credenciales..."
        onChange={(e) => setUserID(e.target.value)}
        autoFocus
      />
    </Container>
  );
};

InputCheckin.propTypes = {
  setTheme: PropTypes.func.isRequired,
};

export default InputCheckin;
