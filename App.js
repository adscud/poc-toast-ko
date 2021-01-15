/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, Button, StatusBar, Platform} from 'react-native';
import Toast from 'react-native-toast-message';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';

const BASE_OFFSET_TOP = 16;
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
      <Toast ref={(ref) => Toast.setRef(ref)} />
    </>
  );
};
export default App;
