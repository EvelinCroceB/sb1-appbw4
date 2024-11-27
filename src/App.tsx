import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './components/Layout/MainLayout';
import { useAuthStore } from './store/authStore';

const Dashboard = React.lazy(() => import('./pages/Dashboard'));
const Books = React.lazy(() => import('./pages/Books'));
const Users = React.lazy(() => import('./pages/Users'));
const Loans = React.lazy(() => import('./pages/Loans'));
const Events = React.lazy(() => import('./pages/Events'));
const Login = React.lazy(() => import('./pages/Login'));

function App() {
  const { isAuthenticated } = useAuthStore();

  if (!isAuthenticated) {
    return (
      <React.Suspense fallback={<div>Loading...</div>}>
        <Login />
      </React.Suspense>
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Navigate to="/dashboard" replace />} />
          <Route
            path="dashboard"
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <Dashboard />
              </React.Suspense>
            }
          />
          <Route
            path="books"
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <Books />
              </React.Suspense>
            }
          />
          <Route
            path="users"
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <Users />
              </React.Suspense>
            }
          />
          <Route
            path="loans"
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <Loans />
              </React.Suspense>
            }
          />
          <Route
            path="events"
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <Events />
              </React.Suspense>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;