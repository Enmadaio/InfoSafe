pragma solidity ^0.4.24;

import 'openzeppelin-solidity/contracts/token/ERC20/MintableToken.sol';

contract InfoSafeToken is MintableToken {
    string public constant name = 'InfoSafeToken';
    string public constant symbol = 'IST';
    uint8 public constant decimals = 18;

    uint256 public constant INITIAL_SUPPLY = 1000000;

    constructor() public {
        totalSupply_ = INITIAL_SUPPLY;
        balances[msg.sender] = totalSupply_;
        emit Transfer(address(0), msg.sender, INITIAL_SUPPLY);
    }
}