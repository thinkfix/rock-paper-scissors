import { Pressable, StyleSheet, Vibration } from 'react-native';
import React, { useState, FC } from 'react';
import { signData } from '../../helpers/data';
import { IAction } from '../../helpers/interfaces';
import { CLICK_TIMES, LOADER_TIMEOUT } from '../../helpers/constants';

const ActionPress: FC<IAction> = ({ children, onAction, setLoading }) => {
  const [counter, setCounter] = useState(1);

  const pressHandler = () => {
    if (counter % CLICK_TIMES === 0) {
      setLoading(true);
      const rand = Math.floor(Math.random() * signData.length);
      setTimeout(() => {
        setLoading(false);
        onAction(signData[rand]);
        Vibration.vibrate();
      }, LOADER_TIMEOUT);
    }
    setCounter(prev => prev + 1);
  };

  return (
    <Pressable style={styles.press} onPress={pressHandler}>
      {children}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  press: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ActionPress;
