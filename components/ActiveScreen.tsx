import React from 'react';
import StartScreen from './StartScreen';
import PlayScreen from './PlayScreen';

interface IActiveScreen {
  activeMode: null | number;
}

const ActiveScreen = ({ activeMode }: IActiveScreen) => {
  if (activeMode !== null) {
    return <PlayScreen />;
  }
  return <StartScreen />;
};

export default ActiveScreen;
