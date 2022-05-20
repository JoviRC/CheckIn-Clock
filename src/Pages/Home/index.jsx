import React from 'react';
import PropType from 'prop-types';
import Clock from 'Components/Clock';
import InputCheckin from 'Components/InputHome';
import { useLocation, Navigate } from 'react-router-dom';
import Authentication from 'Auth/Auth';
import AuthUserAdmin from 'Auth/AuthAdmin';
import Footer from 'Components/Footer';
import { Container } from './Home.style';

const Home = ({ setTheme }) => {
  const localToken = localStorage.getItem('token');
  const location = useLocation();
  if (localToken === null) {
    return <Navigate replace to="/login" state={{ from: location }} />;
  }
  if (Authentication() === false) {
    return <Navigate replace to="/login" state={{ from: location }} />;
  }
  if (AuthUserAdmin() === true) {
    return <Navigate replace to="/settings" state={{ from: location }} />;
  }
  return (
    <>
      <Container>
        <Clock />
        <InputCheckin setTheme={setTheme} />
      </Container>
      <Footer />
    </>
  );
};
Home.propTypes = {
  setTheme: PropType.func.isRequired,
};

export default Home;
