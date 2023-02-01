// SPDX-License-Identifier: GPL-2.0-or-later
pragma solidity =0.7.6;
pragma abicoder v2;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Token is ERC20 {
    constructor(string memory _name, string memory _sybmol, uint256 amount, address mintTo) ERC20(_name, _sybmol) {
        _mint(mintTo, amount * 10**18);
    }
}
