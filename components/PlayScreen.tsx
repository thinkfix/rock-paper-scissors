import React, { FC, useContext, useState } from 'react';
import { Button } from 'react-native';

import ActionPress from './Action/ActionPress';
import ModeContext from './ModeContext';
import Sign from './Sign';

const PlayScreen: FC = () => {
  const { switchMode } = useContext(ModeContext);
  const [sign, setSign] = useState<null | string>(null);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <ActionPress onAction={setSign} setLoading={setIsLoading}>
      <Sign sign={sign} loading={isLoading} />
      <Button title="Back" onPress={() => switchMode(null)} />
    </ActionPress>
  );
};

export default PlayScreen;
