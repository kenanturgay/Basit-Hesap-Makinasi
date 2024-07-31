import {
  CE,
  APPLY_NUMBER,
  CHANGE_OPERATION,
  EQUALS,
  ADD_ONE,
  MEMORY_ADD,
  MEMORY_CLEAR,
  MEMORY_RECALL,
  TYPE_ON_SCREEN,
} from './actions.jsx';

export const initialState = {
  displayValue: 0,
  operation: '+',
  memory: 0,
  accumulator: 0,
};

const calculateResult = (num1, num2, operation) => {
  console.log(
    'temp: ' + num1 + 'displayValue: ' + num2 + ' operation: ' + operation
  );
  switch (operation) {
    case '+':
      return num1 + num2;
    case '*':
      return num1 * num2;
    case '-':
      return num1 - num2;
    case '/':
      return num1 / num2;
    default:
      return;
  }
};

const reducer = (state, action) => {
  switch (action.type) {
    case APPLY_NUMBER:
      return {
        ...state,
        displayValue: calculateResult(
          state.displayValue,
          action.payload,
          state.operation
        ),
      };

    case CHANGE_OPERATION:
      return {
        ...state,
        operation: action.payload,
        accumulator:
          state.accumulator === 0 ? state.displayValue : state.accumulator,
        displayValue: initialState.displayValue,
      };

    case TYPE_ON_SCREEN:
      return {
        ...state,
        displayValue:
          state.displayValue === 0
            ? action.payload
            : state.displayValue.toString() + action.payload.toString(),
      };

    case ADD_ONE:
      return {
        ...state,
        displayValue: calculateResult(
          state.displayValue,
          action.payload,
          state.operation
        ),
      };

    case EQUALS:
      return {
        ...state,
        displayValue: calculateResult(
          Number(state.accumulator),
          Number(state.displayValue),
          state.operation
        ),
        accumulator: initialState.accumulator,
        operation: '+',
      };

    case CE:
      return {
        ...state,
        displayValue: initialState.displayValue,
        accumulator: initialState.accumulator,
      };

    case MEMORY_ADD:
      return {
        ...state,
        memory: state.displayValue,
      };

    case MEMORY_RECALL:
      return {
        ...state,
        displayValue: state.memory,
      };

    case MEMORY_CLEAR:
      return {
        ...state,
        memory: initialState.memory,
      };

    default:
      return state;
  }
};

export default reducer;
