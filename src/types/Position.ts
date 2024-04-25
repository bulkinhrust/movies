export const POSITIONS = {
  'top-left': 'top-left',
  top: 'top',
  'top-right': 'top-right',
  'right-top': 'right-top',
  right: 'right',
  'right-bottom': 'right-bottom',
  'bottom-right': 'bottom-right',
  bottom: 'bottom',
  'bottom-left': 'bottom-left',
  'left-bottom': 'left-bottom',
  left: 'left',
  'left-top': 'left-top',
} as const;

export type Position = keyof typeof POSITIONS;
