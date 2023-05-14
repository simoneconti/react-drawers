import classnames from 'classnames';

import { useDrawersContext } from './DrawersContext';

export interface DrawerItemProps {
  center?: {
    bottom?: string | React.ReactElement;
    center?: string | React.ReactElement;
    top?: string | React.ReactElement;
  };
  className?: string;
  end?: {
    bottom?: string | React.ReactElement;
    center?: string | React.ReactElement;
    top?: string | React.ReactElement;
  };
  height: number;
  justifyContent: 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly';
  start?: {
    bottom?: string | React.ReactElement;
    center?: string | React.ReactElement;
    top?: string | React.ReactElement;
  };
}

export const DrawerItem = ({ center, className, end, height, justifyContent, start }: DrawerItemProps) => {
  const { itemsClassName } = useDrawersContext();

  return (
    <div
      className={classnames(
        itemsClassName,
        className,
        'd-flex align-items-center',
        `justify-content-${justifyContent}`
      )}
      style={{ minHeight: height }}
    >
      {start && (
        <div className="d-flex flex-column align-items-start text-start">
          {start.top && start.top}
          {start.center && start.center}
          {start.bottom && start.bottom}
        </div>
      )}
      {center && (
        <div className="d-flex flex-column align-items-center text-center">
          {center.top && center.top}
          {center.center && center.center}
          {center.bottom && center.bottom}
        </div>
      )}
      {end && (
        <div className="d-flex flex-column align-items-end text-end">
          {end.top && end.top}
          {end.center && end.center}
          {end.bottom && end.bottom}
        </div>
      )}
    </div>
  );
};
