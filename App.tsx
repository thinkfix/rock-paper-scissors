import React, { useState, useMemo } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import ActiveScreen from './components/ActiveScreen';
import ModeContext from './components/ModeContext';

export default function App() {
  const [mode, setMode] = useState<null | number>(null);

  return (
    <View style={styles.container}>
      <ModeContext.Provider
        value={useMemo(() => ({ mode, switchMode: setMode }), [mode])}
      >
        <ActiveScreen activeMode={mode} />
      </ModeContext.Provider>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
});
