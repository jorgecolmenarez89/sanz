import { Calc } from './models/calc.model';

export interface AppState {
  readonly calcs: Calc[];
}