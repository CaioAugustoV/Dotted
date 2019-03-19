import React from 'react';
import { SafeAreaView, createStackNavigator, createSwitchNavigator, createAppContainer } from 'react-navigation';
import { Platform } from 'react-native';
import screens from '../screens';

  // We already have a status bar from expo
  if (Platform.OS === 'android') {
    SafeAreaView.setStatusBarHeight(0);
  }
  
  const defaultStack = createSwitchNavigator(
    {
      AppInitial: {
        screen: screens.AppInitialScreen, // 0
      },
    },
    {
      initialRouteName: 'AppInitial',
    }
  );
  
  const HomeScreenRouter = createAppContainer(defaultStack);
  
export default HomeScreenRouter;
  