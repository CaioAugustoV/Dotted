import React from 'react';
import { SafeAreaView, createSwitchNavigator, createAppContainer } from 'react-navigation';
import { Platform } from 'react-native';
import screens from '../screens';

  // We already have a status bar from expo
  if (Platform.OS === 'android') {
    SafeAreaView.setStatusBarHeight(0);
  }
  
  const defaultStack = createSwitchNavigator(
    {
      AppInitial: {
        screen: screens.AppInitialScreen,
      },
      FaseOne: {
        screen: screens.FaseOneScreen,
      },
    },
    {
      initialRouteName: 'AppInitial',
    }
  );
  
  const HomeScreenRouter = createAppContainer(defaultStack);
  
export default HomeScreenRouter;
  