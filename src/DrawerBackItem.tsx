import React from 'react';

import { useDrawersStaticContext } from './DrawersContext';

export interface DrawerBackItemProps {
  children: React.ReactNode;
}

export const DrawerBackItem = ({ children }: DrawerBackItemProps) => {
  const { closeActiveDrawer } = useDrawersStaticContext();

  return (
    <>
      <div onClick={closeActiveDrawer} onKeyDown={closeActiveDrawer} role="button" tabIndex={0}>
        {children}
      </div>
    </>
  );
};
