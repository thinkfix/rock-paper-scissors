import React, { useContext } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

import modes from '../helpers/data';
import ModeContext from './ModeContext';

const StartScreen = () => {
  const { switchMode } = useContext(ModeContext);

  const onePlayerEnable = () => {
    switchMode(modes.onePlayerMode);
  };
  const multiPlayerEnable = () => {
    switchMode(modes.multiPlayerMode);
  };

  return (
    <View style={styles.start}>
      <Text>Press button to play</Text>
      <Button title="Start" onPress={onePlayerEnable} />
      <Button title="Play together" onPress={multiPlayerEnable} />
    </View>
  );
};

const styles = StyleSheet.create({
  start: {
    alignItems: 'center',
  },
});

export default StartScreen;
