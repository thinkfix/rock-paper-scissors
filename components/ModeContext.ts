import React from 'react';
import { modes } from '../helpers/data';
import { IContext } from '../helpers/interfaces';

const ModeContext = React.createContext<IContext>({
  mode: modes.onePlayerMode,
  switchMode: () => {},
});

export default ModeContext;
