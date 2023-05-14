import './App.scss';

import { DrawerItem } from './DrawerItem';
import { Drawers } from './Drawers';
import { DrawerTriggerItem } from './DrawerTriggerItem';

export const App = () => {
  return (
    <div style={{ border: 'solid 1px black', height: '100%', margin: 'auto', position: 'relative', width: 500 }}>
      <Drawers>
        <>ciaoo</>
        <DrawerTriggerItem newDrawer={<>newDrawer</>}>
          <DrawerItem height={50} justifyContent="start" start={{ center: 'Accedi/Registrati' }} />
        </DrawerTriggerItem>
        <DrawerItem height={50} justifyContent="start" start={{ center: 'Account' }} />
        <DrawerItem height={50} justifyContent="start" start={{ center: 'Account' }} />
        <DrawerItem height={50} justifyContent="start" start={{ center: 'Account' }} />
        {/* {[
          ...Array(10).map((_i, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <DrawerItem height={50} justifyContent="start" key={index} start={{ center: 'Account' }} />
          )),
        ]} */}
      </Drawers>
    </div>
  );
};
