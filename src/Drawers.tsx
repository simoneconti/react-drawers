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
  const [activeDrawersIds, setActiveDrawersIds] = React.useState<Array<string>>([]);

  const addActiveDrawerId = React.useCallback((drawerId: string) => {
    setActiveDrawersIds((prevState) => [...prevState, drawerId]);
  }, []);

  const removeDrawerId = React.useCallback((drawerId: string) => {
    setActiveDrawersIds((prevState) => prevState.filter((id) => id !== drawerId));
  }, []);

  const closeActiveDrawer = React.useCallback(() => {
    setActiveDrawersIds((prevState) => prevState.slice(0, -1));
  }, []);

  const drawersContext: DrawersContextInterface = {
    activeDrawersIds,
    addActiveDrawerId,
    closeActiveDrawer,
    drawerClassName,
    itemsClassName,
    removeDrawerId,
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
