import { Calc } from '../../models/calc.model'
import * as CalcActions from '../actions/cacl.actions'

// 2 - Estado inicial
const initialState: Calc = {
  numbers: '',
  result: 0,
  invalidData: ''
}

// 3 - Switch con las funciones puras
export function reducer(state: Calc[] = [], action: CalcActions.Actions) {
  switch (action.type) {
    case CalcActions.ADD_CALC:
      return [...state, action.payload];
    default:
      return state;
  }
}