import { observer } from 'mobx-react-lite';
import  { FC, MouseEventHandler, useRef, useState } from 'react';

import { userStore } from '../../store/userStore';
import Avatar from '../ui/Avatar';
import Popover from '../ui/Popover';
import classes from './UserMenu.module.scss';

const UserMenu: FC = observer(() => {
  const { user, logout } = userStore;
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const handleToggle: MouseEventHandler = (e) => {
    e.stopPropagation();
    setIsOpen((prev) => !prev);
  };

  const menu = (
    <ul className={classes.menu}>
      <li className={classes.menuItem}>Профиль</li>
      <li className={classes.menuItem}>Ещё что-то</li>
      <li className={classes.menuItem} onClick={logout}>Выйти</li>
    </ul>
  );

  return (
    <div>
      <Avatar ref={ref} user={user} onClick={handleToggle} />
      {isOpen && (
        <Popover
          container={ref}
          content={menu}
          onClose={() => setIsOpen(false)}
          position="bottom-right"
        />
      )}
    </div>
  );
});

export default UserMenu;
