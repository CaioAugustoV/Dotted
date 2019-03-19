// Borrowed from https://github.com/react-native-training/react-native-elements/blob/master/src/config/statusBar.js

import { Dimensions, Platform, StatusBar } from 'react-native';

function isIphoneX() {
  const dimen = Dimensions.get('window');
  return (
    Platform.OS === 'ios' &&
    !Platform.isPad &&
    !Platform.isTVOS &&
    (dimen.height === 812 || dimen.width === 812)
  );
}

function ifIphoneX(iphoneXStyle, regularStyle) {
  if (isIphoneX()) {
    return iphoneXStyle;
  }
  return regularStyle;
}

export function getStatusBarHeight(skipAndroid = false) {
  if (Platform.OS === 'ios') {
    return ifIphoneX(44, 20);
  }

  if (skipAndroid) {
    return 0;
  }

  return StatusBar.currentHeight;
}
