import './App.scss';

import { DrawerBackItem } from './DrawerBackItem';
import { DrawerItem } from './DrawerItem';
import { Drawers } from './Drawers';
import { DrawerTriggerItem } from './DrawerTriggerItem';

export const App = () => {
  return (
    <div style={{ backgroundColor: 'white', height: '100vh', margin: 'auto', position: 'relative', width: 500 }}>
      <Drawers drawerItemStyle={{ borderBottom: 'solid 1px #ccc', padding: 5 }}>
        <X index={0} parent="root" />
      </Drawers>
    </div>
  );
};

const X = ({ index, parent }: { index: number; parent: string }) => (
  <>
    {index < 5 ? (
      <>
        {index > 0 && (
          <DrawerBackItem>
            <DrawerItem height={30} justifyContent="start" start={{ center: 'back' }} />
          </DrawerBackItem>
        )}
        <DrawerTriggerItem newDrawer={<X index={index + 1} parent={`${parent}-1`} />}>
          <DrawerItem justifyContent="start" start={{ center: `${parent}-1` }} />
        </DrawerTriggerItem>
        <DrawerTriggerItem newDrawer={<X index={index + 1} parent={`${parent}-2`} />}>
          <DrawerItem justifyContent="start" start={{ center: `${parent}-2` }} />
        </DrawerTriggerItem>
        <DrawerTriggerItem newDrawer={<X index={index + 1} parent={`${parent}-3`} />}>
          <DrawerItem justifyContent="start" start={{ center: `${parent}-3` }} />
        </DrawerTriggerItem>
        <DrawerTriggerItem newDrawer={<X index={index + 1} parent={`${parent}-4`} />}>
          <DrawerItem justifyContent="start" start={{ center: `${parent}-4` }} />
        </DrawerTriggerItem>
      </>
    ) : (
      <>
        <DrawerBackItem>
          <DrawerItem height={30} justifyContent="start" start={{ center: 'back' }} />
        </DrawerBackItem>
        <DrawerItem justifyContent="start" start={{ center: `${parent}-1` }} />
      </>
    )}
  </>
);
