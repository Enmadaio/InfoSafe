import {GET_TOKEN_BALANCE} from "../constants/action-types";

const returnTokenBalance = (tokenBalance) => {
    return {
        type: GET_TOKEN_BALANCE,
        payload: tokenBalance
    }
};

const fetchTokenBalance = async (addr) => {
    let response = await fetch('http://127.0.0.1:3000/api/getTokenBalance', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            account: addr
        })
    });
    return await response.json();
};

export const getTokenBalance = (addr) => {
    return (dispatch) => {
        fetchTokenBalance(addr).then(tokenBalance => {
            dispatch(returnTokenBalance(tokenBalance));
        });
    }
};
