import clsx from 'clsx';
import { FC, PropsWithChildren, MouseEventHandler } from 'react';

import classes from './Button.module.scss';

type Props = PropsWithChildren<{
  /**
   * Должна ли иконка быть заполненной.
   */
  fill?: boolean;
  /**
   * Реакция при наведении.
   */
  hover?: 'fill' | 'underline';
  /**
   * Всплывающая подсказка.
   */
  title?: string;
  /**
   * Иконка.
   */
  icon?: string;
  /**
   * Обработчик нажатия.
   */
  onClick?: MouseEventHandler<HTMLButtonElement>;
}>;

const Button: FC<Props> = (props) => {
  const {
    children,
    hover,
    fill,
    icon,
    onClick,
    title,
  } = props;

  return (
    <button
      title={title}
      onClick={onClick}
      className={clsx(
        classes.button,
        {
          [classes.icon]: !children,
          [classes.fill]: fill,
          [classes.hoverFill]: hover === 'fill',
          [classes.hoverUnderline]: hover === 'underline',
        },
      )}
    >
      {!!icon && <span className="material-symbols-rounded">
        {icon}
      </span>}
      {!!children && <span>{children}</span>}
    </button>
  );
};

export default Button;
