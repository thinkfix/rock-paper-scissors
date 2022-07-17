import React, { FC, useContext, useState } from 'react';
import { Button } from 'react-native';

import Action from './Action';
import ModeContext from './ModeContext';
import Sign from './Sign';

const PlayScreen: FC = () => {
  const { switchMode } = useContext(ModeContext);
  const [sign, setSign] = useState<null | string>(null);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Action onAction={setSign} setLoading={setIsLoading}>
      <Sign sign={sign} loading={isLoading} />
      <Button title="Back" onPress={() => switchMode(null)} />
    </Action>
  );
};

export default PlayScreen;
