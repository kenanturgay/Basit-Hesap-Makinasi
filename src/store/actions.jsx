export const APPLY_NUMBER = 'APPLY_NUMBER';
export const CHANGE_OPERATION = 'CHANGE_OPERATION';
export const CE = 'CE';
export const EQUALS = 'EQUALS';
export const MEMORY_ADD = 'MEMORY_ADD'; // hafızaya at
export const MEMORY_RECALL = 'MEMORY_RECALL'; // hafızadan totale al
export const MEMORY_CLEAR = 'MEMORY_CLEAR'; // hafızayı temizle
export const ADD_ONE = 'ADD_ONE';
export const TYPE_ON_SCREEN = 'TYPE_ON_SCREEN';

export const typeOnScreen = (number) => {
  return { type: TYPE_ON_SCREEN, payload: number.toString() };
};

export const applyNumber = (number) => {
  return { type: APPLY_NUMBER, payload: Number(number) };
};

export const changeOperation = (operation) => {
  return { type: CHANGE_OPERATION, payload: operation };
};
