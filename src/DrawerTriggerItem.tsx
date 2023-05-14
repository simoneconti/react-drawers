import React from 'react';

import { Drawer } from './Drawer';
import { useDrawersContext } from './DrawersContext';
import { createUUID } from './util';

export interface DrawerTriggerItemProps {
  children: React.ReactNode;
  newDrawer: React.ReactElement;
}

export const DrawerTriggerItem = ({ children, newDrawer }: DrawerTriggerItemProps) => {
  const [id] = React.useState<string>(createUUID());

  const { addActiveDrawerId } = useDrawersContext();

  const handleClick = React.useCallback(() => {
    addActiveDrawerId(id);
  }, [addActiveDrawerId, id]);

  return (
    <>
      <div onClick={handleClick} onKeyDown={handleClick} role="button" tabIndex={0}>
        {children}
      </div>
      <Drawer id={id}>{newDrawer}</Drawer>
    </>
  );
};
