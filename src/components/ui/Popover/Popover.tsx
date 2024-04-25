import clsx from 'clsx';
import { FC, RefObject, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

import { useOutsideClick } from '../../../hooks/useOutsideClick';
import { Position } from '../../../types/Position';
import { getPopoverCoords } from '../../../utils/getPopoverCoords';
import classes from './Popover.module.scss';

type Props = {
  container?: RefObject<HTMLElement>;
  content: Element;
  onClose(): void;
  position?: Position;
};

const Popover: FC<Props> = (props) => {
  const { content, container, onClose, position } = props;
  const popoverRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState<{ top: number, left: number }>();
  useOutsideClick(popoverRef, onClose);

  useEffect(() => {
    setCoords(getPopoverCoords(popoverRef, container, position));

    return () => {
      setCoords(undefined);
    };
  }, []); // eslint-disable-line

  return (
    <>
      {createPortal(
        <div
          ref={popoverRef}
          style={{
            opacity: coords ? 1 : 0,
            ...coords || {},
          }}
          className={clsx(
            classes.popover,
            {
              [classes.modal]: !container,
            },
          )}
        >
          {content}
        </div>,
        document.body,
      )}
    </>
  );
};

export default Popover;
