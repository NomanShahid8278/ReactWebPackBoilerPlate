export const ACTION_ONE = 'ACTION_ONE';
export const ACTION_TWO = 'ACTION_TWO';

export const actionOne = (data) => {
        return {
            type: ACTION_ONE,
            payload: data
        };
};

export const actionTwo = (data) => {
        return {
           type: ACTION_TWO,
           payload: data
        };
};