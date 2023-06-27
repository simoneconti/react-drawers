import classnames from 'classnames';
import React from 'react';

import { useDrawersContext } from './DrawersContext';

export interface DrawerProps {
  children: React.ReactNode;
  entryDrawer?: boolean;
  id: string;
}

export const Drawer = ({ children, entryDrawer, id }: DrawerProps) => {
  const { activeDrawersIds, addActiveDrawerId, drawerClassName, drawerStyle, removeDrawerId } = useDrawersContext();

  React.useEffect(() => {
    if (entryDrawer) {
      addActiveDrawerId(id);
    }
    return () => {
      removeDrawerId(id);
    };
  }, [addActiveDrawerId, entryDrawer, id, removeDrawerId]);

  return (
    <div
      className={classnames(
        'react-drawers_drawer',
        drawerClassName,
        { in: entryDrawer || activeDrawersIds.includes(id) },
        { out: !activeDrawersIds.includes(id) },
        { active: activeDrawersIds.slice(-1)[0] === id }, // quella attuale
        { next: false }, // Quelle subito dopo l'attuale
        { 'child-active': activeDrawersIds.slice(0, -1).includes(id) }, // quelle aperte ma coperte dall'attuale
        { 'direct-child-active': activeDrawersIds.slice(-2, -1)[0] === id } // quella prima dell'attuale
      )}
      style={drawerStyle}
    >
      <div className="react-drawers_drawer-content">{children}</div>
    </div>
  );
};
