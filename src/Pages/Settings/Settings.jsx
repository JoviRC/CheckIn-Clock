/* eslint-disable react/destructuring-assignment */
import NavBar from 'Components/NavBar';
import { Route, Routes, Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';
import Dashboard from 'Pages/Dashboard';
import DashboardTable from 'Pages/Dashboard/Table/DashboardTable';
import { Container, Box, BoxNav } from './Settings.style';

const Settings = () => {
  return (
    <>
      <Container>
        <NavBar />
        <Box>
          <Outlet />
        </Box>
      </Container>
    </>
  );
};

export default Settings;
