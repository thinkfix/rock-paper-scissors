import React from 'react';

import StartScreen from './StartScreen';
import PlayScreen from './PlayScreen';

import { IActiveScreen } from '../helpers/interfaces';

const ActiveScreen = ({ activeMode }: IActiveScreen) => {
  if (activeMode !== null) {
    return <PlayScreen />;
  }
  return <StartScreen />;
};

export default ActiveScreen;
