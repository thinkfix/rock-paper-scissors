import { Pressable, StyleSheet } from 'react-native';
import React from 'react';

interface IAction {
  children: JSX.Element[];
  onAction: () => void;
}

const Action = ({ children, onAction }: IAction) => {
  return (
    <Pressable style={styles.press} onPress={onAction}>
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

export default Action;
