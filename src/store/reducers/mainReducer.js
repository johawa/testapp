import {
  ADD_NUMBER,
  DELETE_NUMBER  
} from "../actions/actionTypes";

const initialState = {
  sum: 0 
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NUMBER:
      return {
        ...state,
        sum: state.sum + action.value
      };    
    case DELETE_NUMBER:
      return {
        ...state,
        sum: state.sum + action.value
      };    
    default:
      return state;
  }
};

export default reducer;
