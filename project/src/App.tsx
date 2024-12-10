import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Products } from './components/Products';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Admin } from './pages/Admin';
import { Login } from './pages/Login';

function App() {
  const isAdmin = window.location.pathname === '/admin';
  const isLogin = window.location.pathname === '/login';
  const isAuthenticated = localStorage.getItem('adminAuthenticated') === 'true';

  if (isLogin) {
    return <Login />;
  }

  if (isAdmin) {
    if (!isAuthenticated) {
      window.location.href = '/login';
      return null;
    }
    return <Admin />;
  }

  return (
    <div className="min-h-screen bg-green-50">
      <Header />
      <main>
        <Hero />
        <Products />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;