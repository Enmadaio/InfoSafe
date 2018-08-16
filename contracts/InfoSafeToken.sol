pragma solidity ^0.4.24;

import 'openzeppelin-solidity/contracts/token/ERC20/MintableToken.sol';

contract InfoSafeToken is MintableToken {
    string public constant name = 'InfoSafeToken';
    string public constant symbol = 'IST';
    uint8 public constant decimals = 18;
    uint public constant RATE = 1000;

    uint256 public constant INITIAL_SUPPLY = 0;

    function() public payable {
        mint(msg.sender, msg.value * RATE);
    }

    constructor() public {
        totalSupply_ = INITIAL_SUPPLY;
    }
}