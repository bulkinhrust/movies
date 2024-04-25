import { RefObject } from 'react';
import { Position } from '../types/Position';

const OFFSET = 8;

/**
 * Возвращает координаты всплывающего окна относительно контейнера-триггера.
 * @param position - направление открытия окна.
 * @param content - элемент всплывающего окна.
 * @param container - элемент контейнера триггера.
 */
export const getPopoverCoords = (
  content: RefObject<HTMLElement>,
  container?: RefObject<HTMLElement>,
  position: Position = 'bottom',
): { top: number, left: number } => {
  if (!content.current || !container) {
    return;
  }
  const coords = {
    top: 0,
    left: 0,
  };
  const containerDOMRect = (container.current as Element).getBoundingClientRect();
  const contentDOMRect = (content.current as Element).getBoundingClientRect();

  if (position === 'top') {
    coords.top = containerDOMRect.y - contentDOMRect.height - OFFSET;
    coords.left = containerDOMRect.x + containerDOMRect.width / 2 - contentDOMRect.width / 2;
  }
  if (position === 'bottom') {
    coords.top = containerDOMRect.y + containerDOMRect.height + OFFSET;
    coords.left = containerDOMRect.x + containerDOMRect.width / 2 - contentDOMRect.width / 2;
  }
  if (position === 'bottom-right') {
    coords.top = containerDOMRect.y + containerDOMRect.height + OFFSET;
    coords.left = containerDOMRect.x + containerDOMRect.width - contentDOMRect.width;
  }
  if (position === 'left') {
    coords.top = containerDOMRect.y + containerDOMRect.height / 2 - contentDOMRect.height / 2;
    coords.left = containerDOMRect.x - contentDOMRect.width - OFFSET;
  }
  if (position === 'right') {
    coords.top = containerDOMRect.y + containerDOMRect.height / 2 - contentDOMRect.height / 2;
    coords.left = containerDOMRect.x + containerDOMRect.width + OFFSET;
  }

  return coords;
};
