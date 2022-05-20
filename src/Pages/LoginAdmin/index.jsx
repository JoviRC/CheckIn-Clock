import React from 'react';
import InputSettings from 'Components/InputSettings';
import { Layout, Box, Title } from './LoginAdmin.style';

const LoginAdmin = () => {
  return (
    <Layout>
      <Box>
        <Title>Información</Title>
        <InputSettings />
      </Box>
    </Layout>
  );
};

export default LoginAdmin;
