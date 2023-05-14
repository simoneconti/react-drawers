import React from 'react';

import { Drawer } from './Drawer';
import { DrawerButtonItem } from './DrawerButtonItem';
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
      <DrawerButtonItem onClick={handleClick}>{children}</DrawerButtonItem>
      <Drawer id={id}>{newDrawer}</Drawer>
    </>
  );
};
