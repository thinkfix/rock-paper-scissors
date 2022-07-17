import React, { Dispatch, SetStateAction } from 'react';
import modes from '../helpers/data';

interface IContext {
  mode: null | number;
  switchMode: Dispatch<SetStateAction<number | null>>;
}

const ModeContext = React.createContext<IContext>({
  mode: modes.onePlayerMode,
  switchMode: () => {},
});

export default ModeContext;
