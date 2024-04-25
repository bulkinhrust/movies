import { observer } from 'mobx-react-lite';
import { FC } from 'react';
import { Link, NavLink } from 'react-router-dom';

import { userStore } from '../../store';
import Button from '../ui/Button';
import UserMenu from '../UserMenu';
import classes from './Header.module.scss';

const Header: FC = observer(() => {
  const { getRequestToken } = userStore;
  const { user } = userStore;

  const handleLogin = async () => {
    const token = await getRequestToken();
    if (token) {
      window.location.replace(`https://www.themoviedb.org/authenticate/${token}?redirect_to=${window.location.href}`);
    }
  };

  return (
    <div className={classes.component}>
      <Link to="/">
        <h2>BULKIN MOVIES</h2>
      </Link>
      <div className={classes.nav}>

        <NavLink
          to="/home"
          className={({ isActive }) =>
            isActive ? classes.active : ''
          }
        >
          Моё
        </NavLink>
        <NavLink
          to="/movies"
          className={({ isActive }) =>
            isActive ? classes.active : ''
          }
        >
          Фильмы
        </NavLink>
        <NavLink
          to="/series"
          className={({ isActive }) =>
            isActive ? classes.active : ''
          }
        >
          Сериалы
        </NavLink>
      </div>
      {user
        ? <UserMenu />
        : <Button title="Войти" icon="login" onClick={handleLogin} hover="fill" />}
    </div>
  );
});

export default Header;
