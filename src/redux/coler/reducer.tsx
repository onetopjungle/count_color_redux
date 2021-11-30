import React from 'react'
import { GREEN, RED, YELLOW } from './action';


const initialState = {
    color: 'origin'
  };
  const reducerColer = (state = initialState, action: any) => {
    switch (action.type) {
      case GREEN:
        return {
          ...state,
          color: state.color = 'green'
        };
      case RED:
        return {
          ...state,
          color: state.color = 'red'
        };
      case YELLOW:
        return {
          ...state,
          color: state.color = 'yellow'
        };
      default:
        return state;
    }
  };
  export default reducerColer;
