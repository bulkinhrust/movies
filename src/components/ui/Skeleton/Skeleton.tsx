import { FC } from 'react';

import classes from './Skeleton.module.scss';

type Props = {
  width: string;
  height: string;
};

const Skeleton: FC<Props> = (props) => {
  const { width, height } = props;

  return (
    <div
      className={classes.skeleton}
      style={{ width, height }}
    />
  );
};

export default Skeleton;
