import React, { FC } from 'react';

import StartScreen from './StartScreen';
import PlayScreen from './PlayScreen';

import { IActiveScreen } from '../helpers/interfaces';

const ActiveScreen: FC<IActiveScreen> = ({ activeMode }) => {
  if (activeMode !== null) {
    return <PlayScreen />;
  }
  return <StartScreen />;
};

export default ActiveScreen;
