import classnames from 'classnames';
import React from 'react';

import { useDrawersContext } from './DrawersContext';

export interface DrawerProps {
  children: React.ReactNode;
  entryDrawer?: boolean;
  id: string;
}

export const Drawer = ({ children, entryDrawer, id }: DrawerProps) => {
  const { activeDrawersId, addActiveDrawerId, drawerClassName } = useDrawersContext();

  React.useEffect(() => {
    if (entryDrawer) {
      addActiveDrawerId(id);
    }
  }, [addActiveDrawerId, entryDrawer, id]);

  return (
    <div
      className={classnames(
        'react-drawers_drawer',
        drawerClassName,
        { in: activeDrawersId.includes(id) },
        { out: !activeDrawersId.includes(id) },
        { active: activeDrawersId.slice(-1)[0] === id }, // quella attuale
        { 'child-active': activeDrawersId.slice(0, -1).includes(id) }, // quelle aperte ma coperte dall'attuale
        { 'direct-child-active': activeDrawersId.slice(-2, -1)[0] === id } // quella prima dell'attuale
      )}
    >
      <div className="react-drawers_drawer-content">{children}</div>
    </div>
  );
};
