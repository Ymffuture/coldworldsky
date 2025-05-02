import { useLocation } from 'react-router-dom';

const Layout = ({ children }) => {
  const location = useLocation();
  const hideLayout = /^\/(404|500|error)/.test(location.pathname);

  const hideLayout = hideLayoutOn.includes(location.pathname);

  return (
    <>
      {!hideLayout && <Sidebar />}
      
      <main>{children}</main>

      {!hideLayout && <Footer />}
    </>
  );
};

export default Layout;

