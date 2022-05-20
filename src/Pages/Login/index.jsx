import Authentication from 'Auth/Auth';
import { Navigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { LOGIN_URL } from '../../lib/Constants';
import {
  Container,
  Layout,
  Title,
  InputBox,
  Button,
  Input,
} from './Login.style';

const Login = () => {
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  const [submit, setSubmit] = useState(false);
  const [error, setError] = useState(false);
  const [logDone, setLogDone] = useState(false);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (submit) {
      fetch(LOGIN_URL, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: user, password: pass }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.status !== 200) {
            setError(true);
            setLoading(false);
            setSubmit(false);
            setLogDone(false);
            return data.message;
          }
          localStorage.setItem('token', data.access_token);
          setError(false);
          setLoading(false);
          setSubmit(false);
          setLogDone(true);
          return data.message;
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [submit, pass, user]);

  if (loading) {
    return (
      <Container>
        <Layout>
          <Title>Cargando...</Title>
        </Layout>
      </Container>
    );
  }

  if (error) {
    setTimeout(() => {
      setError(false);
    }, 2000);
    return (
      <Container>
        <Layout>
          <Title>Usuario incorrecto</Title>
        </Layout>
      </Container>
    );
  }
  if (logDone) {
    return <Navigate to="/" replace />;
  }

  return (
    <Container>
      <Layout>
        <Title>Login</Title>
        <InputBox>
          <Input
            value={user}
            name="user"
            type="text"
            placeholder="ID"
            onChange={(e) => setUser(e.target.value)}
          />
        </InputBox>
        <InputBox>
          <Input
            value={pass}
            name="pass"
            type="text"
            placeholder="PIN"
            onChange={(e) => setPass(e.target.value)}
          />
        </InputBox>
        <Button onClick={() => setSubmit(true)}>Login</Button>
      </Layout>
    </Container>
  );
};

export default Login;
