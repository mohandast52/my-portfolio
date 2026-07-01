import type { ReactNode } from 'react';
// import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => (
  <div>
    <div>{children}</div>
    {/* <Footer /> */}
  </div>
);

export default Layout;
