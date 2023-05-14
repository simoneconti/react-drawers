import './Drawers.scss';

import classnames from 'classnames';
import React from 'react';

import { Drawer } from './Drawer';
import { DrawersContext, DrawersContextInterface } from './DrawersContext';
import { createUUID } from './util';

export interface DrawersProps {
  children: React.ReactNode | ((context: DrawersContextInterface) => React.ReactNode);
  className?: string;
  drawerClassName?: string;
  itemsClassName?: string;
}

export const Drawers = ({ children, className, drawerClassName, itemsClassName }: DrawersProps) => {
  const [activeDrawersId, setActiveDrawersId] = React.useState<Array<string>>([]);

  const addActiveDrawerId = React.useCallback((drawerId: string) => {
    setActiveDrawersId((prevState) => [...prevState, drawerId]);
  }, []);

  const closeActiveDrawer = React.useCallback(() => {
    setActiveDrawersId((prevState) => prevState.slice(0, -1));
  }, []);

  const drawersContext: DrawersContextInterface = {
    activeDrawersId,
    addActiveDrawerId,
    closeActiveDrawer,
    drawerClassName,
    itemsClassName,
  };

  const entryDrawerId = React.useMemo(() => createUUID(), []);

  return (
    <div className={classnames('react-drawers_drawers', className)}>
      <DrawersContext.Provider value={drawersContext}>
        <Drawer entryDrawer id={entryDrawerId}>
          {typeof children === 'function' ? children(drawersContext) : children}
        </Drawer>
      </DrawersContext.Provider>
    </div>
  );
};
