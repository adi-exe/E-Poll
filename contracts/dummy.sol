pragma solidity 0.5.16;

contract Dummy{
    
    uint public count;

    constructor () public {
        count = 1;
    }
    event votedEvent (
        uint _candidateId
    );
    function increaseCount () public {
        count += 1;
    }
}

