// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract MessageStore {
    string private message;

    event MessageUpdated(address indexed updater, string newMessage);

    constructor(string memory _initial) {
        message = _initial;
    }

    function setMessage(string calldata _msg) external {
        message = _msg;
        emit MessageUpdated(msg.sender, _msg);
    }

    function getMessage() external view returns (string memory) {
        return message;
    }
}
