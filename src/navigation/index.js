import React from 'react';
import { SafeAreaView, createSwitchNavigator, createAppContainer } from 'react-navigation';
import { Platform } from 'react-native';
import screens from '../screens';
import { FluidNavigator, Transition } from 'react-navigation-fluid-transitions';
  // We already have a status bar from expo
  if (Platform.OS === 'android') {
    SafeAreaView.setStatusBarHeight(0);
  }
  
  const defaultStack = FluidNavigator(
    {
      AppInitial: {
        screen: screens.AppInitialScreen,
      },
      Hash: {
        screen: screens.HashScreen,
      },
      FaseOne: {
        screen: screens.FaseOneScreen,
      },



      testFiduc: {
        screen: screens.testFiducScreen,
      },
      testFiducTwo: {
        screen: screens.testFiducTwoScreen,
      },


      // Share Element
      ShareLogoHeader: {
        screen: screens.ShareLogoHeaderScreen,
      },
    },
    {
      initialRouteName: 'testFiduc',
    }
  );
  
  const HomeScreenRouter = createAppContainer(defaultStack);
  
export default HomeScreenRouter;