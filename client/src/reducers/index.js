import {GET_TOKEN_BALANCE} from "../constants/action-types";

const initialState = {
    tokenBalance: 0
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_TOKEN_BALANCE:
            return {
                ...state,
                tokenBalance: 1
            };
        default:
            return state;
    }
};

const getTokenBalance = async () => {
    let response = await fetch('http://127.0.0.1:3000/api/getTokenBalance', {
        method: 'POST',
            headers: {
            'Accept': 'application/json',
                'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            account: '0x8a45A9916C1bf2118E1047ad20D8c4Ba776D9722'
        })
    });
    return await response.json();
};

export default rootReducer;