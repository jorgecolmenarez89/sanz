import { Action } from '@ngrx/store';
import { Calc } from '../../models/calc.model';

export const ADD_CALC = '[CALC] Add';
//export const GET_HISTORY = 'GET_HISTORY';

export class AddCalc implements Action {
    readonly type = ADD_CALC
    constructor(public payload: Calc) { }
}

export type Actions = AddCalc
