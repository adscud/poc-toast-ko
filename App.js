/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, Button, StatusBar, Platform} from 'react-native';
import Toast, {BaseToast} from 'react-native-toast-message';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';

const BASE_OFFSET_TOP = 16;
const SUCCESS_COLOR = '#00D68F';
const ERROR_COLOR = '#FF3D71';
const INFO_COLOR = '#0095FF';
const TEXT_1_STYLE = {
  fontSize: 16,
  fontWeight: '600',
};
const TEXT_2_STYLE = {
  fontSize: 12,
  fontWeight: '300',
};
const BASE_VISIBILITY_TIME = 4000;
const ACTIVE_OPACITY = 1;

const toastConfig = {
  success: (props) => (
    <BaseToast
      style={{borderLeftColor: SUCCESS_COLOR}}
      contentContainerStyle={{paddingHorizontal: 16}}
      trailingIcon={null}
      text1Style={TEXT_1_STYLE}
      text2Style={TEXT_2_STYLE}
      activeOpacity={ACTIVE_OPACITY}
      {...props}
    />
  ),
  error: (props) => (
    <BaseToast
      style={{borderLeftColor: ERROR_COLOR}}
      contentContainerStyle={{paddingHorizontal: 16}}
      trailingIcon={null}
      text1Style={TEXT_1_STYLE}
      text2Style={TEXT_2_STYLE}
      activeOpacity={ACTIVE_OPACITY}
      {...props}
    />
  ),
  info: (props) => (
    <BaseToast
      style={{borderLeftColor: INFO_COLOR}}
      contentContainerStyle={{paddingHorizontal: 16}}
      trailingIcon={null}
      text1Style={TEXT_1_STYLE}
      text2Style={TEXT_2_STYLE}
      activeOpacity={ACTIVE_OPACITY}
      {...props}
    />
  ),
};

const App: () => React$Node = () => {
  const _showToast = (type: string) => {
    Toast.show({
      type,
      text1: 'Hello',
      text2: 'This is some something 👋' + type,
      topOffset: Platform.select({
        ios: getStatusBarHeight() + BASE_OFFSET_TOP,
        android: BASE_OFFSET_TOP,
      }),
      visibilityTime:
        type === 'error' ? BASE_VISIBILITY_TIME * 2 : BASE_VISIBILITY_TIME,
      onPress: Toast.hide,
    });
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{paddingTop: 15, zIndex: -1}}>
        <Button title={'Show success'} onPress={() => _showToast('success')} />
        <Button title={'Show info'} onPress={() => _showToast('info')} />
        <Button title={'Show error'} onPress={() => _showToast('error')} />
      </SafeAreaView>
      <Toast config={toastConfig} ref={(ref) => Toast.setRef(ref)} />
    </>
  );
};
export default App;
