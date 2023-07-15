import classnames from 'classnames';

import { useDrawersStaticContext } from './DrawersContext';

export interface DrawerItemProps {
  center?: {
    bottom?: string | React.ReactElement;
    center?: string | React.ReactElement;
    top?: string | React.ReactElement;
  };
  children?: React.ReactNode;
  className?: string;
  end?: {
    bottom?: string | React.ReactElement;
    center?: string | React.ReactElement;
    top?: string | React.ReactElement;
  };
  height?: number;
  justifyContent: 'center' | 'start' | 'end' | 'space-between' | 'space-around' | 'space-evenly';
  start?: {
    bottom?: string | React.ReactElement;
    center?: string | React.ReactElement;
    top?: string | React.ReactElement;
  };
}

export const DrawerItem = ({ center, children, className, end, height, justifyContent, start }: DrawerItemProps) => {
  const { drawerItemClassName, drawerItemStyle } = useDrawersStaticContext();

  return (
    <div
      className={classnames('react-drawers_drawer-item', drawerItemClassName, className)}
      style={{
        justifyContent: justifyContent,
        minHeight: height,
        ...drawerItemStyle,
      }}
    >
      {start && (
        <div style={{ alignItems: 'start', display: 'flex', flexDirection: 'column', textAlign: 'start' }}>
          {start.top && start.top}
          {start.center && start.center}
          {start.bottom && start.bottom}
        </div>
      )}
      {center && (
        <div style={{ alignItems: 'center', display: 'flex', flexDirection: 'column', textAlign: 'center' }}>
          {center.top && center.top}
          {center.center && center.center}
          {center.bottom && center.bottom}
        </div>
      )}
      {end && (
        <div style={{ alignItems: 'end', display: 'flex', flexDirection: 'column', textAlign: 'end' }}>
          {end.top && end.top}
          {end.center && end.center}
          {end.bottom && end.bottom}
        </div>
      )}
      {children}
    </div>
  );
};
