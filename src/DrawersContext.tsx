import React, { CSSProperties } from 'react';

const createContext = <T extends unknown | null>(displayName: string) => {
  const Context = React.createContext<T | undefined>(undefined);
  Context.displayName = displayName;
  // no upfront default value, not having to check for undefined all the time.
  const useContext = () => {
    const context = React.useContext(Context);
    if (context === undefined)
      throw new Error(`useContext must be inside a Provider with a value (missing: ${displayName})`);
    return context;
  };
  // no upfront default value, but having to check for undefined all the time.
  const useContextStrict = () => {
    const context = React.useContext(Context);
    return context;
  };
  return [Context, useContext, useContextStrict] as const;
};

export interface DrawersContextInterface {
  activeDrawersIds: Array<string>;
}

export const [DrawersContext, useDrawersContext] = createContext<DrawersContextInterface>('DrawersContext');

export interface DrawersContextInterface2 {
  addActiveDrawerId(id: string): void;
  closeActiveDrawer(): void;
  drawerClassName?: string;
  drawerItemClassName?: string;
  drawerItemStyle?: CSSProperties;
  drawerStyle?: CSSProperties;
  removeDrawerId(id: string): void;
}

export const [DrawersContext2, useDrawersContext2] = createContext<DrawersContextInterface2>('DrawersContext2');
