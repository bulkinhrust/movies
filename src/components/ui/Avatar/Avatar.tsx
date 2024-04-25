import { forwardRef, MouseEventHandler } from 'react';

import { User } from '../../../models/User';
import classes from './Avatar.module.scss';

type Props = {
  onClick?: MouseEventHandler<HTMLDivElement>;
  user?: User;
};

const Avatar = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { onClick, user } = props;

  return (
    <div ref={ref} className={classes.avatar} onClick={onClick}>
      {user?.avatarPath
        ? <img
          className={classes.image}
          alt={user.username}
          src={`https://media.themoviedb.org/t/p/w32_and_h32_face/${user.avatarPath}.jpg`}
        />
        : <span className="material-symbols-rounded">
          person
        </span>}
    </div>
  );
});

Avatar.displayName = 'Avatar';

export default Avatar;
