import { TANG, GIAM, RESET, TANG2, GIAM2 } from "./action";


const initialState = {
    number: 0
  };
  const reducerCounter = (state = initialState, action: any) => {
    switch (action.type) {
      case TANG:
        return {
          ...state,
          number: state.number + 1
        };
      case GIAM:
        return {
          ...state,
          number: state.number - 1
        };
      case RESET:
        return {
          ...state,
          number: (state.number = 0)
        };
      case TANG2:
          return {
            ...state,
            number: state.number += action.payload
          };
      case GIAM2:
          return {
            ...state,
            number: state.number -= action.payload
          };
      default:
        return state;
    }
  };
  export default reducerCounter;
