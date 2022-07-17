import React, { FC, useContext, useState } from 'react';
import { ActivityIndicator, Button, Text } from 'react-native';

import Action from './Action';
import ModeContext from './ModeContext';

const signData = ['paper', 'rock', 'scissors'];

const PlayScreen: FC = () => {
  const { switchMode } = useContext(ModeContext);
  const [isLoading, setIsLoading] = useState(false);
  const [sign, setSign] = useState<null | string>(null);
  const [counter, setCounter] = useState(0);

  const pressHandler = () => {
    setCounter(prev => prev + 1);
    if (counter % 2) {
      setIsLoading(true);
      const rand = Math.floor(Math.random() * 3);
      setTimeout(() => {
        setIsLoading(false);
        setSign(signData[rand]);
      }, 1000);
    }
  };
  return (
    <Action onAction={pressHandler}>
      <Button title="Back" onPress={() => switchMode(null)} />
      <Text>{sign ? `You show: ${sign}` : 'Press twice'}</Text>
      <ActivityIndicator size="small" animating={isLoading} />
    </Action>
  );
};

export default PlayScreen;
