import './App.scss';

import { DrawerBackItem } from './DrawerBackItem';
import { DrawerItem } from './DrawerItem';
import { Drawers } from './Drawers';
import { DrawerTriggerItem } from './DrawerTriggerItem';

export const App = () => {
  return (
    <div style={{ backgroundColor: 'white', height: '100%', margin: 'auto', position: 'relative', width: 500 }}>
      <Drawers drawerItemStyle={{ borderBottom: 'solid 1px #ccc', padding: 5 }}>
        <X index={0} />
      </Drawers>
    </div>
  );
};

const X = ({ index }: { index: number }) => (
  <>
    {index < 5 ? (
      <>
        {index > 0 && (
          <DrawerBackItem>
            <DrawerItem height={30} justifyContent="start" start={{ center: 'back' }} />
          </DrawerBackItem>
        )}
        <DrawerTriggerItem newDrawer={<X index={index + 1} />}>
          <DrawerItem height={50} justifyContent="start" start={{ center: `Livello ${index}` }} />
        </DrawerTriggerItem>
        <DrawerTriggerItem newDrawer={<X index={index + 1} />}>
          <DrawerItem height={50} justifyContent="start" start={{ center: `Livello ${index}` }} />
        </DrawerTriggerItem>
        <DrawerTriggerItem newDrawer={<X index={index + 1} />}>
          <DrawerItem height={50} justifyContent="start" start={{ center: `Livello ${index}` }} />
        </DrawerTriggerItem>
        <DrawerTriggerItem newDrawer={<X index={index + 1} />}>
          <DrawerItem height={50} justifyContent="start" start={{ center: `Livello ${index}` }} />
        </DrawerTriggerItem>
      </>
    ) : (
      <>
        <DrawerBackItem>
          <DrawerItem height={30} justifyContent="start" start={{ center: 'back' }} />
        </DrawerBackItem>
        <DrawerItem height={50} justifyContent="start" start={{ center: `Livello ${index}` }} />
      </>
    )}
  </>
);
