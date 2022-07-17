import { Dispatch, SetStateAction } from 'react';

type Mode = number | null;
type Sign = string | null;

export interface IAction {
  children: JSX.Element[];
  onAction: Dispatch<SetStateAction<Sign>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
}

export interface IContext {
  mode: Mode;
  switchMode: Dispatch<SetStateAction<Mode>>;
}

export interface IActiveScreen {
  activeMode: Mode;
}

export interface ISign {
  sign: Sign;
  loading: boolean;
}
