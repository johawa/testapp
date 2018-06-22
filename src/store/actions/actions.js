import { ADD_NUMBER, DELETE_NUMBER } from './actionTypes';

export const addNumber = (value) => {
    return {
        type: ADD_NUMBER,
        value: value
    };
}
;
export const deleteNumber = (value) => {
    return {
        type: DELETE_NUMBER,
        value: value
    };
};
