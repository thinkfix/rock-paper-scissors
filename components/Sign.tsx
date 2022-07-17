import { ActivityIndicator, Text } from 'react-native';
import React, { FC } from 'react';
import { CLICK_TIMES } from '../helpers/constants';
import { ISign } from '../helpers/interfaces';

const Sign: FC<ISign> = ({ sign, loading }) => {
  if (loading) {
    return <ActivityIndicator size="small" animating={loading} />;
  }
  if (sign) {
    return <Text>You show: {sign}</Text>;
  }
  return <Text>Press {CLICK_TIMES} times</Text>;
};

export default Sign;
