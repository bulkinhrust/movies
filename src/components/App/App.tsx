import { FC, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';

import { userStore } from '../../store';
import AppRoutes from '../AppRoutes';
import Header from '../Header';
import classes from './App.module.scss';

const App: FC = () => {
  const [searchParams] = useSearchParams();
  const params = Object.fromEntries(searchParams.entries());
  const { checkAuth, getUser, getSession, getRequestToken } = userStore;
  const isMounted = useRef(false);

  const checkUser = async () => {
    const isAuth = await checkAuth();
    if (!isAuth && params.approved) {
      const hasSession = await getSession(params.request_token);

      if (!hasSession) {
        const token = await getRequestToken();
        if (token) {
          window.location.replace(`https://www.themoviedb.org/authenticate/${token}?redirect_to=${window.location.href}`);
        }
      }

      return;
    }

    if (isAuth) {
      getUser();
    }
  };

  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
      checkUser();
    }
  }, []); // eslint-disable-line

  return (
    <div className={classes.component}>
      <Header />
      <AppRoutes />
    </div>
  );
};

export default App;
