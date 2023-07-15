import './App.scss';

import { DrawerBackItem } from './DrawerBackItem';
import { DrawerItem } from './DrawerItem';
import { Drawers } from './Drawers';
import { DrawerTriggerItem } from './DrawerTriggerItem';

export const App = () => {
  return (
    <div style={{ backgroundColor: 'white', height: '100vh', margin: 'auto', position: 'relative', width: 500 }}>
      <Drawers drawerItemStyle={{ borderBottom: 'solid 1px #ccc', padding: 5 }}>
        <X index={0} parent="" />
      </Drawers>
    </div>
  );
};

const X = ({ index, parent }: { index: number; parent: string }) => (
  <>
    {index < 4 ? (
      <>
        {index > 0 && (
          <DrawerBackItem>
            <DrawerItem height={30} justifyContent="start" start={{ center: '< back' }} />
          </DrawerBackItem>
        )}
        {[...Array(4)].map((_i, row) => (
          <DrawerTriggerItem
            // eslint-disable-next-line react/no-array-index-key
            key={row}
            newDrawer={<X index={index + 1} parent={`${parent}${row + 1}-`} />}
          >
            <DrawerItem
              end={{ center: '>' }}
              justifyContent="space-between"
              start={{ center: `${parent}${row + 1}` }}
            />
          </DrawerTriggerItem>
        ))}
      </>
    ) : (
      <>
        <DrawerBackItem>
          <DrawerItem height={30} justifyContent="start" start={{ center: '< back' }} />
        </DrawerBackItem>
        <DrawerItem justifyContent="start" start={{ center: `${parent}1` }} />
      </>
    )}
  </>
);
