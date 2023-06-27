import './Drawers.scss';

import classnames from 'classnames';
import React, { CSSProperties } from 'react';

import { Drawer } from './Drawer';
import {
  DrawersContext,
  DrawersContextInterface,
  DrawersStaticContext,
  DrawersStaticContextInterface,
} from './DrawersContext';
import { createUUID } from './util';

export interface DrawersProps {
  children: React.ReactNode | ((context: DrawersContextInterface) => React.ReactNode);
  className?: string;
  drawerClassName?: string;
  drawerItemClassName?: string;
  drawerItemStyle?: CSSProperties;
  drawerStyle?: CSSProperties;
}

export const Drawers = ({
  children,
  className,
  drawerClassName,
  drawerItemClassName,
  drawerItemStyle,
  drawerStyle,
}: DrawersProps) => {
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

  const drawersContext: DrawersContextInterface = React.useMemo(
    () => ({
      activeDrawersIds,
    }),
    [activeDrawersIds]
  );

  const drawersContext2: DrawersStaticContextInterface = React.useMemo<DrawersStaticContextInterface>(
    () => ({
      addActiveDrawerId,
      closeActiveDrawer,
      drawerClassName,
      drawerItemClassName,
      drawerItemStyle,
      drawerStyle,
      removeDrawerId,
    }),
    [
      addActiveDrawerId,
      closeActiveDrawer,
      drawerClassName,
      drawerItemClassName,
      drawerItemStyle,
      drawerStyle,
      removeDrawerId,
    ]
  );

  const entryDrawerId = React.useMemo(() => createUUID(), []);

  return (
    <div className={classnames('react-drawers_drawers', className)}>
      <DrawersContext.Provider value={drawersContext}>
        <DrawersStaticContext.Provider value={drawersContext2}>
          <Drawer entryDrawer id={entryDrawerId}>
            {typeof children === 'function' ? children(drawersContext) : children}
          </Drawer>
        </DrawersStaticContext.Provider>
      </DrawersContext.Provider>
    </div>
  );
};
