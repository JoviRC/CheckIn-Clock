import { useState, useEffect } from 'react';
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import NavBar from 'Components/NavBar';
import Dashboard from 'Pages/Dashboard';
import DashboardTable from '../Pages/Dashboard/Table/DashboardTable';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import Settings from '../Pages/Settings';
import LoginAdmin from '../Pages/LoginAdmin';
import { mainTheme } from '../lib/Theme';

import './App.css';

export default function App() {
  const [theme, setTheme] = useState(mainTheme);
  sessionStorage.setItem('theme', JSON.stringify(theme));
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route index element={<Home setTheme={setTheme} />} />
          <Route path="login" element={<Login />} />
          <Route path="loginadmin" element={<LoginAdmin />} />
          <Route path="settings" element={<Settings />}>
            <Route index element={<Dashboard />} />
            <Route path="table" element={<DashboardTable />} />
            <Route path="*" element={<Dashboard />} />
          </Route>
          <Route path="*" element={<Home setTheme={setTheme} />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}
