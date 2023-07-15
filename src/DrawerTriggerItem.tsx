import React from 'react';

import { Drawer } from './Drawer';
import { useDrawersStaticContext } from './DrawersContext';
import { createUUID } from './util';

export interface DrawerTriggerItemProps {
  children: React.ReactNode;
  newDrawer: React.ReactElement;
  onNewDrawerShown?(): void;
}

export const DrawerTriggerItem = ({ children, newDrawer, onNewDrawerShown }: DrawerTriggerItemProps) => {
  const [id] = React.useState<string>(createUUID());

  const { addActiveDrawerId, transitionDuration } = useDrawersStaticContext();

  const handleClick = React.useCallback(() => {
    addActiveDrawerId(id);
    if (onNewDrawerShown) {
      setTimeout(() => {
        onNewDrawerShown();
      }, transitionDuration);
    }
  }, [addActiveDrawerId, id, onNewDrawerShown, transitionDuration]);

  return (
    <>
      <div onClick={handleClick} onKeyDown={handleClick} role="button" tabIndex={0}>
        {children}
      </div>
      <Drawer id={id}>{newDrawer}</Drawer>
    </>
  );
};
