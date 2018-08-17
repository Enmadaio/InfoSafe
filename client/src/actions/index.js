import {GET_TOKEN_BALANCE} from "../constants/action-types";

export const getTokenBalance = tokenBalance => ({
    type: GET_TOKEN_BALANCE,
    payload: tokenBalance
});