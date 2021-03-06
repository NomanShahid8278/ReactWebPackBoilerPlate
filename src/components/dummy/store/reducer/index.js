import { ACTION_ONE, ACTION_TWO } from '../actions';

const INITIAL_STATE = {
   actionOne: 1,
   actionTwo: 2
};

const reducer = (state = INITIAL_STATE, {type,payload}) => {
        switch (type) {
            case ACTION_ONE:
               return {
                 ...state, actionOne: state.actionOne + 1,
               };
            case ACTION_TWO:
               return {
                  ...state, actionTwo: state.actionTwo + 1,
               };
            default: 
               return state;
        }
};

export default reducer;