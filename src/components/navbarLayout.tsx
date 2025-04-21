import React from 'react';
import Header from './Header';
import Footer from './Footer';

type NavbarLayoutProps = {
  children: React.ReactNode;
};

const NavbarLayout = ({ children }: NavbarLayoutProps) => {
  return (
    <div>
      <Header />
      <main style={{ minHeight: 'calc(100vh - 200px)' }}>{children}</main>
      <Footer />
    </div>
  );
};

export default NavbarLayout;