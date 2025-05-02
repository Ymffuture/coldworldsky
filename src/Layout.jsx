



M
  import { useLocation } from 'react-router-dom';

const Layout = ({ children }) => {
  const location = useLocation();
  const hideLayoutOn = ['/not-found', '/status-500'];

  const hideLayout = hideLayoutOn.includes(location.pathname);

  return (
    <>
      {!hideLayout && <Navigation /> }
      
      <main>{children}</main>

      {!hideLayout && <Footer />}
    </>
  );
};

export default Layout;

