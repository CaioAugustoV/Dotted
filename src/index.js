import React from 'react';
import { Root } from 'native-base';

import AppNavigator from './navigation';
// import AlertContainer from './compoments/AlertContainer';

export default () => (
    <Root>
      <AppNavigator />
      {/* <AlertContainer
        ref={node => {
          if (!AlertContainer.alertInstance)
            AlertContainer.alertInstance = node;
        }}
      /> */}
    </Root>
);
