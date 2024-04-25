import clsx from 'clsx';
import { FC } from 'react';

import classes from './Spinner.module.scss';

type Props = {
  color?: string;
};

const Spinner: FC<Props> = (props) => {
  const { color } = props;

  return (
    <span className={clsx('material-symbols-rounded', classes.spinner)} style={color ? { color } : {}}>
      progress_activity
    </span>
  );
};

export default Spinner;
