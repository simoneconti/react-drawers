import classnames from 'classnames';
import React from 'react';

import { useDrawersContext, useDrawersStaticContext } from './DrawersContext';

export interface DrawerProps {
  children: React.ReactNode;
  entryDrawer?: boolean;
  id: string;
}

export const Drawer = ({ children, entryDrawer, id }: DrawerProps) => {
  const { activeDrawersIds } = useDrawersContext();
  const { addActiveDrawerId, drawerClassName, drawerStyle, removeDrawerId } = useDrawersStaticContext();

  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (entryDrawer) {
      addActiveDrawerId(id);
    }
    return () => {
      removeDrawerId(id);
    };
  }, [addActiveDrawerId, entryDrawer, id, removeDrawerId]);

  React.useEffect(() => {
    if (ref.current?.parentElement?.closest('.react-drawers_drawer')?.classList.contains('active')) {
      ref.current.classList.add('next');
    } else {
      ref.current?.classList.remove('next');
    }
  }, [activeDrawersIds]);

  return (
    <div
      className={classnames(
        'react-drawers_drawer',
        drawerClassName,
        { in: entryDrawer || activeDrawersIds.includes(id) },
        { out: !activeDrawersIds.includes(id) },
        { active: activeDrawersIds.slice(-1)[0] === id }, // quella attuale
        { 'child-active': activeDrawersIds.slice(0, -1).includes(id) }, // quelle aperte ma coperte dall'attuale
        { 'direct-child-active': activeDrawersIds.slice(-2, -1)[0] === id } // quella prima dell'attuale
      )}
      id={`react-drawers_drawer-${id}`}
      ref={ref}
      style={drawerStyle}
    >
      <div className="react-drawers_drawer-content">{children}</div>
    </div>
  );
};
