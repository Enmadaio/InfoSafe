import {GET_TOKEN_BALANCE} from "../constants/action-types";

const initialState = {
    tokenBalance: 0
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_TOKEN_BALANCE:
            return {
                ...state,
                tokenBalance: [...state.tokenBalance, action.payload]
            };
        default:
            return state;
    }
};

export default rootReducer;