import Web3 from 'web3';

const web3=new Web3(new Web3.providers.HttpProvider("http://localhost:7545"));
let dxpABI=[
    {
      "constant": true,
      "inputs": [],
      "name": "name",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_spender",
          "type": "address"
        },
        {
          "name": "_value",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [
        {
          "name": "success",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "totalSupply",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_from",
          "type": "address"
        },
        {
          "name": "_to",
          "type": "address"
        },
        {
          "name": "_value",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [
        {
          "name": "success",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "decimals",
      "outputs": [
        {
          "name": "",
          "type": "uint8"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_value",
      ],
      "name": "burn",
      "outputs": [
        {
          "name": "success",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "target",
          "type": "address"
        },
        {
          "name": "mintedAmount",
          "type": "uint256"
        }
      ],
      "name": "mintToken",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_from",
          "type": "address"
        },
        {
          "name": "_value",
          "type": "uint256"
        }
      ],
      "name": "burnFrom",
      "outputs": [
        {
          "name": "success",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "symbol",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_to",
          "type": "address"
        },
        {
          "name": "_value",
          "type": "uint256"
        }
      ],
      "name": "transfer",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "name": "frozenAccount",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_spender",
          "type": "address"
        },
        {
          "name": "_value",
          "type": "uint256"
        },
        {
          "name": "_extraData",
          "type": "bytes"
        }
      ],
      "name": "approveAndCall",
      "outputs": [
        {
          "name": "success",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "address"
        },
        {
          "name": "",
          "type": "address"
        }
      ],
      "name": "allowance",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "target",
          "type": "address"
        },
        {
          "name": "freeze",
          "type": "bool"
        }
      ],
      "name": "freezeAccount",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "name": "initialSupply",
          "type": "uint256"
        },
        {
          "name": "tokenName",
          "type": "string"
        },
        {
          "name": "tokenSymbol",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "target",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "frozen",
          "type": "bool"
        }
      ],
      "name": "FrozenFunds",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "from",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Burn",
      "type": "event"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "bytecode": "0x60606040526012600360006101000a81548160ff021916908360ff16021790555034156200002c57600080fd5b604051620017233803806200172383398101604052808051906020019091908051820191906020018051820191905050828282336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600360009054906101000a900460ff1660ff16600a0a8302600481905550600454600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555081600190805190602001906200011b92919062000141565b5080600290805190602001906200013492919062000141565b50505050505050620001f0565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200018457805160ff1916838001178555620001b5565b82800160010185558215620001b5579182015b82811115620001b457825182559160200191906001019062000197565b5b509050620001c49190620001c8565b5090565b620001ed91905b80821115620001e9576000816000905550600101620001cf565b5090565b90565b61152380620002006000396000f3006060604052600436106100f1576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806306fdde03146100f6578063095ea7b31461018457806318160ddd146101de57806323b872dd14610207578063313ce5671461028057806342966c68146102af57806370a08231146102ea57806379c650681461033757806379cc6790146103795780638da5cb5b146103d357806395d89b4114610428578063a9059cbb146104b6578063b414d4b6146104f8578063cae9ca5114610549578063dd62ed3e146105e6578063e724529c14610652578063f2fde38b14610696575b600080fd5b341561010157600080fd5b6101096106cf565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561014957808201518184015260208101905061012e565b50505050905090810190601f1680156101765780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561018f57600080fd5b6101c4600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803590602001909190505061076d565b604051808215151515815260200191505060405180910390f35b34156101e957600080fd5b6101f16107fa565b6040518082815260200191505060405180910390f35b341561021257600080fd5b610266600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610800565b604051808215151515815260200191505060405180910390f35b341561028b57600080fd5b61029361092d565b604051808260ff1660ff16815260200191505060405180910390f35b34156102ba57600080fd5b6102d06004808035906020019091905050610940565b604051808215151515815260200191505060405180910390f35b34156102f557600080fd5b610321600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610a44565b6040518082815260200191505060405180910390f35b341561034257600080fd5b610377600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610a5c565b005b341561038457600080fd5b6103b9600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610bcd565b604051808215151515815260200191505060405180910390f35b34156103de57600080fd5b6103e6610de7565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561043357600080fd5b61043b610e0c565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561047b578082015181840152602081019050610460565b50505050905090810190601f1680156104a85780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34156104c157600080fd5b6104f6600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610eaa565b005b341561050357600080fd5b61052f600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610eb9565b604051808215151515815260200191505060405180910390f35b341561055457600080fd5b6105cc600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803590602001909190803590602001908201803590602001908080601f01602080910402602001604051908101604052809392919081815260200183838082843782019150505050505091905050610ed9565b604051808215151515815260200191505060405180910390f35b34156105f157600080fd5b61063c600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050611057565b6040518082815260200191505060405180910390f35b341561065d57600080fd5b610694600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035151590602001909190505061107c565b005b34156106a157600080fd5b6106cd600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919050506111a1565b005b60018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156107655780601f1061073a57610100808354040283529160200191610765565b820191906000526020600020905b81548152906001019060200180831161074857829003601f168201915b505050505081565b600081600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506001905092915050565b60045481565b6000600660008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054821115151561088d57600080fd5b81600660008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254039250508190555061092284848461123f565b600190509392505050565b600360009054906101000a900460ff1681565b600081600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541015151561099057600080fd5b81600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540392505081905550816004600082825403925050819055503373ffffffffffffffffffffffffffffffffffffffff167fcc16f5dbb4873280815c1ee09dbd06736cffcc184412cf7a71a0fdb75d397ca5836040518082815260200191505060405180910390a260019050919050565b60056020528060005260406000206000915090505481565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610ab757600080fd5b80600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540192505081905550806004600082825401925050819055503073ffffffffffffffffffffffffffffffffffffffff1660007fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a38173ffffffffffffffffffffffffffffffffffffffff163073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a35050565b600081600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205410151515610c1d57600080fd5b600660008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020548211151515610ca857600080fd5b81600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254039250508190555081600660008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540392505081905550816004600082825403925050819055508273ffffffffffffffffffffffffffffffffffffffff167fcc16f5dbb4873280815c1ee09dbd06736cffcc184412cf7a71a0fdb75d397ca5836040518082815260200191505060405180910390a26001905092915050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60028054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610ea25780601f10610e7757610100808354040283529160200191610ea2565b820191906000526020600020905b815481529060010190602001808311610e8557829003601f168201915b505050505081565b610eb533838361123f565b5050565b60076020528060005260406000206000915054906101000a900460ff1681565b600080849050610ee9858561076d565b1561104e578073ffffffffffffffffffffffffffffffffffffffff16638f4ffcb1338630876040518563ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018481526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200180602001828103825283818151815260200191508051906020019080838360005b83811015610fe3578082015181840152602081019050610fc8565b50505050905090810190601f1680156110105780820380516001836020036101000a031916815260200191505b5095505050505050600060405180830381600087803b151561103157600080fd5b6102c65a03f1151561104257600080fd5b5050506001915061104f565b5b509392505050565b6006602052816000526040600020602052806000526040600020600091509150505481565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156110d757600080fd5b80600760008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055507f48335238b4855f35377ed80f164e8c6f3c366e54ac00b96a6402d4a9814a03a58282604051808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001821515151581526020019250505060405180910390a15050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156111fc57600080fd5b806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b60008273ffffffffffffffffffffffffffffffffffffffff161415151561126557600080fd5b80600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054101515156112b357600080fd5b600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205481600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020540111151561134157600080fd5b600760008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1615151561139a57600080fd5b600760008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff161515156113f357600080fd5b80600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254039250508190555080600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a35050505600a165627a7a72305820201d3f2d1d8e6dca17491fe885fba224bf2a276053651dc896855a0e30f3f2090029",
  "deployedBytecode": "0x6060604052600436106100f1576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806306fdde03146100f6578063095ea7b31461018457806318160ddd146101de57806323b872dd14610207578063313ce5671461028057806342966c68146102af57806370a08231146102ea57806379c650681461033757806379cc6790146103795780638da5cb5b146103d357806395d89b4114610428578063a9059cbb146104b6578063b414d4b6146104f8578063cae9ca5114610549578063dd62ed3e146105e6578063e724529c14610652578063f2fde38b14610696575b600080fd5b341561010157600080fd5b6101096106cf565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561014957808201518184015260208101905061012e565b50505050905090810190601f1680156101765780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561018f57600080fd5b6101c4600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803590602001909190505061076d565b604051808215151515815260200191505060405180910390f35b34156101e957600080fd5b6101f16107fa565b6040518082815260200191505060405180910390f35b341561021257600080fd5b610266600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610800565b604051808215151515815260200191505060405180910390f35b341561028b57600080fd5b61029361092d565b604051808260ff1660ff16815260200191505060405180910390f35b34156102ba57600080fd5b6102d06004808035906020019091905050610940565b604051808215151515815260200191505060405180910390f35b34156102f557600080fd5b610321600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610a44565b6040518082815260200191505060405180910390f35b341561034257600080fd5b610377600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610a5c565b005b341561038457600080fd5b6103b9600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610bcd565b604051808215151515815260200191505060405180910390f35b34156103de57600080fd5b6103e6610de7565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561043357600080fd5b61043b610e0c565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561047b578082015181840152602081019050610460565b50505050905090810190601f1680156104a85780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34156104c157600080fd5b6104f6600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610eaa565b005b341561050357600080fd5b61052f600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610eb9565b604051808215151515815260200191505060405180910390f35b341561055457600080fd5b6105cc600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803590602001909190803590602001908201803590602001908080601f01602080910402602001604051908101604052809392919081815260200183838082843782019150505050505091905050610ed9565b604051808215151515815260200191505060405180910390f35b34156105f157600080fd5b61063c600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050611057565b6040518082815260200191505060405180910390f35b341561065d57600080fd5b610694600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035151590602001909190505061107c565b005b34156106a157600080fd5b6106cd600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919050506111a1565b005b60018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156107655780601f1061073a57610100808354040283529160200191610765565b820191906000526020600020905b81548152906001019060200180831161074857829003601f168201915b505050505081565b600081600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506001905092915050565b60045481565b6000600660008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054821115151561088d57600080fd5b81600660008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254039250508190555061092284848461123f565b600190509392505050565b600360009054906101000a900460ff1681565b600081600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541015151561099057600080fd5b81600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540392505081905550816004600082825403925050819055503373ffffffffffffffffffffffffffffffffffffffff167fcc16f5dbb4873280815c1ee09dbd06736cffcc184412cf7a71a0fdb75d397ca5836040518082815260200191505060405180910390a260019050919050565b60056020528060005260406000206000915090505481565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610ab757600080fd5b80600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540192505081905550806004600082825401925050819055503073ffffffffffffffffffffffffffffffffffffffff1660007fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a38173ffffffffffffffffffffffffffffffffffffffff163073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a35050565b600081600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205410151515610c1d57600080fd5b600660008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020548211151515610ca857600080fd5b81600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254039250508190555081600660008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540392505081905550816004600082825403925050819055508273ffffffffffffffffffffffffffffffffffffffff167fcc16f5dbb4873280815c1ee09dbd06736cffcc184412cf7a71a0fdb75d397ca5836040518082815260200191505060405180910390a26001905092915050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60028054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610ea25780601f10610e7757610100808354040283529160200191610ea2565b820191906000526020600020905b815481529060010190602001808311610e8557829003601f168201915b505050505081565b610eb533838361123f565b5050565b60076020528060005260406000206000915054906101000a900460ff1681565b600080849050610ee9858561076d565b1561104e578073ffffffffffffffffffffffffffffffffffffffff16638f4ffcb1338630876040518563ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018481526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200180602001828103825283818151815260200191508051906020019080838360005b83811015610fe3578082015181840152602081019050610fc8565b50505050905090810190601f1680156110105780820380516001836020036101000a031916815260200191505b5095505050505050600060405180830381600087803b151561103157600080fd5b6102c65a03f1151561104257600080fd5b5050506001915061104f565b5b509392505050565b6006602052816000526040600020602052806000526040600020600091509150505481565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156110d757600080fd5b80600760008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055507f48335238b4855f35377ed80f164e8c6f3c366e54ac00b96a6402d4a9814a03a58282604051808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001821515151581526020019250505060405180910390a15050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156111fc57600080fd5b806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b60008273ffffffffffffffffffffffffffffffffffffffff161415151561126557600080fd5b80600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054101515156112b357600080fd5b600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205481600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020540111151561134157600080fd5b600760008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1615151561139a57600080fd5b600760008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff161515156113f357600080fd5b80600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254039250508190555080600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a35050505600a165627a7a72305820201d3f2d1d8e6dca17491fe885fba224bf2a276053651dc896855a0e30f3f2090029",
  "sourceMap": "6420:2170:1:-;;;611:2;587:26;;;;;;;;;;;;;;;;;;;;6761:181;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;6894:13;6909:9;6920:11;124:10;116:5;;:18;;;;;;;;;;;;;;;;;;1491:8;;;;;;;;;;;1483:17;;1477:2;:23;1461:13;:39;1447:11;:53;;;;1583:11;;1559:9;:21;1569:10;1559:21;;;;;;;;;;;;;;;:35;;;;1666:9;1659:4;:16;;;;;;;;;;;;:::i;:::-;;1766:11;1757:6;:20;;;;;;;;;;;;:::i;:::-;;1314:540;;;6761:181;;;6420:2170;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;",
  "deployedSourceMap": "6420:2170:1:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;535:18;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:2;8:100;;;99:1;94:3;90;84:5;80:1;75:3;71;64:6;52:2;49:1;45:3;40:15;;8:100;;;12:14;3:109;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3943:171:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;693:26;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3378:296;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;587:26;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5035:369;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;776:45;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;7990:253;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5667:606;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;52:20;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;560;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:2;8:100;;;99:1;94:3;90;84:5;80:1;75:3;71;64:6;52:2;49:1;45:3;40:15;;8:100;;;12:14;3:109;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2991:107:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;6477:46;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4513:347;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;828:66;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8429:156;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;236:97;;;;;;;;;;;;;;;;;;;;;;;;;;;;535:18;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;3943:171::-;4019:12;4078:6;4044:9;:21;4054:10;4044:21;;;;;;;;;;;;;;;:31;4066:8;4044:31;;;;;;;;;;;;;;;:40;;;;4102:4;4095:11;;3943:171;;;;:::o;693:26::-;;;;:::o;3378:296::-;3460:12;3503:9;:16;3513:5;3503:16;;;;;;;;;;;;;;;:28;3520:10;3503:28;;;;;;;;;;;;;;;;3493:6;:38;;3485:47;;;;;;;;3598:6;3566:9;:16;3576:5;3566:16;;;;;;;;;;;;;;;:28;3583:10;3566:28;;;;;;;;;;;;;;;;:38;;;;;;;;;;;3615:29;3625:5;3632:3;3637:6;3615:9;:29::i;:::-;3662:4;3655:11;;3378:296;;;;;:::o;587:26::-;;;;;;;;;;;;;:::o;5035:369::-;5081:12;5139:6;5114:9;:21;5124:10;5114:21;;;;;;;;;;;;;;;;:31;;5106:40;;;;;;;;5218:6;5193:9;:21;5203:10;5193:21;;;;;;;;;;;;;;;;:31;;;;;;;;;;;5289:6;5274:11;;:21;;;;;;;;;;;5355:10;5350:24;;;5367:6;5350:24;;;;;;;;;;;;;;;;;;5392:4;5385:11;;5035:369;;;:::o;776:45::-;;;;;;;;;;;;;;;;;:::o;7990:253::-;202:5;;;;;;;;;;;188:19;;:10;:19;;;180:28;;;;;;;;8096:12;8075:9;:17;8085:6;8075:17;;;;;;;;;;;;;;;;:33;;;;;;;;;;;8134:12;8119:11;;:27;;;;;;;;;;;8169:4;8157:31;;8166:1;8157:31;8175:12;8157:31;;;;;;;;;;;;;;;;;;8214:6;8199:36;;8208:4;8199:36;;;8222:12;8199:36;;;;;;;;;;;;;;;;;;7990:253;;:::o;5667:606::-;5732:12;5785:6;5765:9;:16;5775:5;5765:16;;;;;;;;;;;;;;;;:26;;5757:35;;;;;;;;5879:9;:16;5889:5;5879:16;;;;;;;;;;;;;;;:28;5896:10;5879:28;;;;;;;;;;;;;;;;5869:6;:38;;5861:47;;;;;;;;5961:6;5941:9;:16;5951:5;5941:16;;;;;;;;;;;;;;;;:26;;;;;;;;;;;6072:6;6040:9;:16;6050:5;6040:16;;;;;;;;;;;;;;;:28;6057:10;6040:28;;;;;;;;;;;;;;;;:38;;;;;;;;;;;6156:6;6141:11;;:21;;;;;;;;;;;6229:5;6224:19;;;6236:6;6224:19;;;;;;;;;;;;;;;;;;6261:4;6254:11;;5667:606;;;;:::o;52:20::-;;;;;;;;;;;;;:::o;560:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;2991:107::-;3056:34;3066:10;3078:3;3083:6;3056:9;:34::i;:::-;2991:107;;:::o;6477:46::-;;;;;;;;;;;;;;;;;;;;;;:::o;4513:347::-;4623:12;4648:22;4688:8;4648:49;;4712:25;4720:8;4730:6;4712:7;:25::i;:::-;4708:145;;;4754:7;:23;;;4778:10;4790:6;4798:4;4804:10;4754:61;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:2;8:100;;;99:1;94:3;90;84:5;80:1;75:3;71;64:6;52:2;49:1;45:3;40:15;;8:100;;;12:14;3:109;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4837:4:1;4830:11;;;;4708:145;4513:347;;;;;;;:::o;828:66::-;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;8429:156::-;202:5;;;;;;;;;;;188:19;;:10;:19;;;180:28;;;;;;;;8533:6;8509:13;:21;8523:6;8509:21;;;;;;;;;;;;;;;;:30;;;;;;;;;;;;;;;;;;8550:27;8562:6;8570;8550:27;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8429:156;;:::o;236:97::-;202:5;;;;;;;;;;;188:19;;:10;:19;;;180:28;;;;;;;;317:8;309:5;;:16;;;;;;;;;;;;;;;;;;236:97;:::o;7016:777::-;7112:3;7105;:10;;;;7096:20;;;;;;;;7241:6;7221:9;:16;7231:5;7221:16;;;;;;;;;;;;;;;;:26;;7212:36;;;;;;;;7342:9;:14;7352:3;7342:14;;;;;;;;;;;;;;;;7333:6;7316:9;:14;7326:3;7316:14;;;;;;;;;;;;;;;;:23;:40;7307:50;;;;;;;;7400:13;:20;7414:5;7400:20;;;;;;;;;;;;;;;;;;;;;;;;;7399:21;7391:30;;;;;;;;7490:13;:18;7504:3;7490:18;;;;;;;;;;;;;;;;;;;;;;;;;7489:19;7481:28;;;;;;;;7594:6;7574:9;:16;7584:5;7574:16;;;;;;;;;;;;;;;;:26;;;;;;;;;;;7681:6;7663:9;:14;7673:3;7663:14;;;;;;;;;;;;;;;;:24;;;;;;;;;;;7773:3;7757:28;;7766:5;7757:28;;;7778:6;7757:28;;;;;;;;;;;;;;;;;;7016:777;;;:::o",
  "source": "\r\npragma solidity ^0.4.16;\r\n\r\ncontract owned {\r\n    address public owner;\r\n\r\n    function owned() public {\r\n        owner = msg.sender;\r\n    }\r\n\r\n    modifier onlyOwner {\r\n        require(msg.sender == owner);\r\n        _;\r\n    }\r\n\r\n    function transferOwnership(address newOwner) onlyOwner public {\r\n        owner = newOwner;\r\n    }\r\n}\r\n\r\ninterface tokenRecipient { function receiveApproval(address _from, uint256 _value, address _token, bytes _extraData) public; }\r\n\r\ncontract TokenERC20 {\r\n    // Public variables of the token\r\n    string public name;\r\n    string public symbol;\r\n    uint8 public decimals = 18;\r\n    // 18 decimals is the strongly suggested default, avoid changing it\r\n    uint256 public totalSupply;\r\n\r\n    // This creates an array with all balances\r\n    mapping (address => uint256) public balanceOf;\r\n    mapping (address => mapping (address => uint256)) public allowance;\r\n\r\n    // This generates a public event on the blockchain that will notify clients\r\n    event Transfer(address indexed from, address indexed to, uint256 value);\r\n\r\n    // This notifies clients about the amount burnt\r\n    event Burn(address indexed from, uint256 value);\r\n\r\n    /**\r\n     * Constrctor function\r\n     *\r\n     * Initializes contract with initial supply tokens to the creator of the contract\r\n     */\r\n    function TokenERC20(\r\n        uint256 initialSupply,\r\n        string tokenName,\r\n        string tokenSymbol\r\n    ) public {\r\n        totalSupply = initialSupply * 10 ** uint256(decimals);  // Update total supply with the decimal amount\r\n        balanceOf[msg.sender] = totalSupply;                // Give the creator all initial tokens\r\n        name = tokenName;                                   // Set the name for display purposes\r\n        symbol = tokenSymbol;                               // Set the symbol for display purposes\r\n    }\r\n\r\n    /**\r\n     * Internal transfer, only can be called by this contract\r\n     */\r\n    function _transfer(address _from, address _to, uint _value) internal {\r\n        // Prevent transfer to 0x0 address. Use burn() instead\r\n        require(_to != 0x0);\r\n        // Check if the sender has enough\r\n        require(balanceOf[_from] >= _value);\r\n        // Check for overflows\r\n        require(balanceOf[_to] + _value > balanceOf[_to]);\r\n        // Save this for an assertion in the future\r\n        uint previousBalances = balanceOf[_from] + balanceOf[_to];\r\n        // Subtract from the sender\r\n        balanceOf[_from] -= _value;\r\n        // Add the same to the recipient\r\n        balanceOf[_to] += _value;\r\n        Transfer(_from, _to, _value);\r\n        // Asserts are used to use static analysis to find bugs in your code. They should never fail\r\n        assert(balanceOf[_from] + balanceOf[_to] == previousBalances);\r\n    }\r\n\r\n    /**\r\n     * Transfer tokens\r\n     *\r\n     * Send `_value` tokens to `_to` from your account\r\n     *\r\n     * @param _to The address of the recipient\r\n     * @param _value the amount to send\r\n     */\r\n    function transfer(address _to, uint256 _value) public {\r\n        _transfer(msg.sender, _to, _value);\r\n    }\r\n\r\n    /**\r\n     * Transfer tokens from other address\r\n     *\r\n     * Send `_value` tokens to `_to` in behalf of `_from`\r\n     *\r\n     * @param _from The address of the sender\r\n     * @param _to The address of the recipient\r\n     * @param _value the amount to send\r\n     */\r\n    function transferFrom(address _from, address _to, uint256 _value) public returns (bool success) {\r\n        require(_value <= allowance[_from][msg.sender]);     // Check allowance\r\n        allowance[_from][msg.sender] -= _value;\r\n        _transfer(_from, _to, _value);\r\n        return true;\r\n    }\r\n\r\n    /**\r\n     * Set allowance for other address\r\n     *\r\n     * Allows `_spender` to spend no more than `_value` tokens in your behalf\r\n     *\r\n     * @param _spender The address authorized to spend\r\n     * @param _value the max amount they can spend\r\n     */\r\n    function approve(address _spender, uint256 _value) public\r\n        returns (bool success) {\r\n        allowance[msg.sender][_spender] = _value;\r\n        return true;\r\n    }\r\n\r\n    /**\r\n     * Set allowance for other address and notify\r\n     *\r\n     * Allows `_spender` to spend no more than `_value` tokens in your behalf, and then ping the contract about it\r\n     *\r\n     * @param _spender The address authorized to spend\r\n     * @param _value the max amount they can spend\r\n     * @param _extraData some extra information to send to the approved contract\r\n     */\r\n    function approveAndCall(address _spender, uint256 _value, bytes _extraData)\r\n        public\r\n        returns (bool success) {\r\n        tokenRecipient spender = tokenRecipient(_spender);\r\n        if (approve(_spender, _value)) {\r\n            spender.receiveApproval(msg.sender, _value, this, _extraData);\r\n            return true;\r\n        }\r\n    }\r\n\r\n    /**\r\n     * Destroy tokens\r\n     *\r\n     * Remove `_value` tokens from the system irreversibly\r\n     *\r\n     * @param _value the amount of money to burn\r\n     */\r\n    function burn(uint256 _value) public returns (bool success) {\r\n        require(balanceOf[msg.sender] >= _value);   // Check if the sender has enough\r\n        balanceOf[msg.sender] -= _value;            // Subtract from the sender\r\n        totalSupply -= _value;                      // Updates totalSupply\r\n        Burn(msg.sender, _value);\r\n        return true;\r\n    }\r\n\r\n    /**\r\n     * Destroy tokens from other account\r\n     *\r\n     * Remove `_value` tokens from the system irreversibly on behalf of `_from`.\r\n     *\r\n     * @param _from the address of the sender\r\n     * @param _value the amount of money to burn\r\n     */\r\n    function burnFrom(address _from, uint256 _value) public returns (bool success) {\r\n        require(balanceOf[_from] >= _value);                // Check if the targeted balance is enough\r\n        require(_value <= allowance[_from][msg.sender]);    // Check allowance\r\n        balanceOf[_from] -= _value;                         // Subtract from the targeted balance\r\n        allowance[_from][msg.sender] -= _value;             // Subtract from the sender's allowance\r\n        totalSupply -= _value;                              // Update totalSupply\r\n        Burn(_from, _value);\r\n        return true;\r\n    }\r\n}\r\n\r\n/******************************************/\r\n/*       ADVANCED TOKEN STARTS HERE       */\r\n/******************************************/\r\n\r\ncontract DiagnosisProtocol is owned, TokenERC20 {\r\n\r\n    mapping (address => bool) public frozenAccount;\r\n\r\n    /* This generates a public event on the blockchain that will notify clients */\r\n    event FrozenFunds(address target, bool frozen);\r\n\r\n    /* Initializes contract with initial supply tokens to the creator of the contract */\r\n    function DiagnosisProtocol(\r\n        uint256 initialSupply,\r\n        string tokenName,\r\n        string tokenSymbol\r\n    ) TokenERC20(initialSupply, tokenName, tokenSymbol) public {}\r\n\r\n    /* Internal transfer, only can be called by this contract */\r\n    function _transfer(address _from, address _to, uint _value) internal {\r\n        require (_to != 0x0);                               // Prevent transfer to 0x0 address. Use burn() instead\r\n        require (balanceOf[_from] >= _value);               // Check if the sender has enough\r\n        require (balanceOf[_to] + _value > balanceOf[_to]); // Check for overflows\r\n        require(!frozenAccount[_from]);                     // Check if sender is frozen\r\n        require(!frozenAccount[_to]);                       // Check if recipient is frozen\r\n        balanceOf[_from] -= _value;                         // Subtract from the sender\r\n        balanceOf[_to] += _value;                           // Add the same to the recipient\r\n        Transfer(_from, _to, _value);\r\n    }\r\n\r\n    /// @notice Create `mintedAmount` tokens and send it to `target`\r\n    /// @param target Address to receive the tokens\r\n    /// @param mintedAmount the amount of tokens it will receive\r\n    function mintToken(address target, uint256 mintedAmount) onlyOwner public {\r\n        balanceOf[target] += mintedAmount;\r\n        totalSupply += mintedAmount;\r\n        Transfer(0, this, mintedAmount);\r\n        Transfer(this, target, mintedAmount);\r\n    }\r\n\r\n    /// @notice `freeze? Prevent | Allow` `target` from sending & receiving tokens\r\n    /// @param target Address to be frozen\r\n    /// @param freeze either to freeze it or not\r\n    function freezeAccount(address target, bool freeze) onlyOwner public {\r\n        frozenAccount[target] = freeze;\r\n        FrozenFunds(target, freeze);\r\n    }\r\n\r\n}",
  "sourcePath": "C:\\Users\\Pat Doyle\\Documents\\Projects\\devannotation\\blockchain\\contracts\\dxpTokenContract.sol",
  "ast": {
    "attributes": {
      "absolutePath": "/C/Users/Pat Doyle/Documents/Projects/devannotation/blockchain/contracts/dxpTokenContract.sol",
      "exportedSymbols": {
        "DiagnosisProtocol": [
          604
        ],
        "TokenERC20": [
          453
        ],
        "owned": [
          93
        ],
        "tokenRecipient": [
          105
        ]
      }
    },
    "children": [
      {
        "attributes": {
          "literals": [
            "solidity",
            "^",
            "0.4",
            ".16"
          ]
        },
        "id": 58,
        "name": "PragmaDirective",
        "src": "2:24:1"
      },
      {
        "attributes": {
          "baseContracts": [
            null
          ],
          "contractDependencies": [
            null
          ],
          "contractKind": "contract",
          "documentation": null,
          "fullyImplemented": true,
          "linearizedBaseContracts": [
            93
          ],
          "name": "owned",
          "scope": 605
        },
        "children": [
          {
            "attributes": {
              "constant": false,
              "name": "owner",
              "scope": 93,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "address",
              "value": null,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "name": "address",
                  "type": "address"
                },
                "id": 59,
                "name": "ElementaryTypeName",
                "src": "52:7:1"
              }
            ],
            "id": 60,
            "name": "VariableDeclaration",
            "src": "52:20:1"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": true,
              "modifiers": [
                null
              ],
              "name": "owned",
              "payable": false,
              "scope": 93,
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 61,
                "name": "ParameterList",
                "src": "95:2:1"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 62,
                "name": "ParameterList",
                "src": "105:0:1"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "address"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 60,
                              "type": "address",
                              "value": "owner"
                            },
                            "id": 63,
                            "name": "Identifier",
                            "src": "116:5:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "sender",
                              "referencedDeclaration": null,
                              "type": "address"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 616,
                                  "type": "msg",
                                  "value": "msg"
                                },
                                "id": 64,
                                "name": "Identifier",
                                "src": "124:3:1"
                              }
                            ],
                            "id": 65,
                            "name": "MemberAccess",
                            "src": "124:10:1"
                          }
                        ],
                        "id": 66,
                        "name": "Assignment",
                        "src": "116:18:1"
                      }
                    ],
                    "id": 67,
                    "name": "ExpressionStatement",
                    "src": "116:18:1"
                  }
                ],
                "id": 68,
                "name": "Block",
                "src": "105:37:1"
              }
            ],
            "id": 69,
            "name": "FunctionDefinition",
            "src": "81:61:1"
          },
          {
            "attributes": {
              "name": "onlyOwner",
              "visibility": "internal"
            },
            "children": [
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 70,
                "name": "ParameterList",
                "src": "169:0:1"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 619,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 71,
                            "name": "Identifier",
                            "src": "180:7:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "==",
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "sender",
                                  "referencedDeclaration": null,
                                  "type": "address"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 616,
                                      "type": "msg",
                                      "value": "msg"
                                    },
                                    "id": 72,
                                    "name": "Identifier",
                                    "src": "188:3:1"
                                  }
                                ],
                                "id": 73,
                                "name": "MemberAccess",
                                "src": "188:10:1"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 60,
                                  "type": "address",
                                  "value": "owner"
                                },
                                "id": 74,
                                "name": "Identifier",
                                "src": "202:5:1"
                              }
                            ],
                            "id": 75,
                            "name": "BinaryOperation",
                            "src": "188:19:1"
                          }
                        ],
                        "id": 76,
                        "name": "FunctionCall",
                        "src": "180:28:1"
                      }
                    ],
                    "id": 77,
                    "name": "ExpressionStatement",
                    "src": "180:28:1"
                  },
                  {
                    "id": 78,
                    "name": "PlaceholderStatement",
                    "src": "219:1:1"
                  }
                ],
                "id": 79,
                "name": "Block",
                "src": "169:59:1"
              }
            ],
            "id": 80,
            "name": "ModifierDefinition",
            "src": "150:78:1"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "name": "transferOwnership",
              "payable": false,
              "scope": 93,
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "newOwner",
                      "scope": 92,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 81,
                        "name": "ElementaryTypeName",
                        "src": "263:7:1"
                      }
                    ],
                    "id": 82,
                    "name": "VariableDeclaration",
                    "src": "263:16:1"
                  }
                ],
                "id": 83,
                "name": "ParameterList",
                "src": "262:18:1"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 86,
                "name": "ParameterList",
                "src": "298:0:1"
              },
              {
                "attributes": {
                  "arguments": [
                    null
                  ]
                },
                "children": [
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 80,
                      "type": "modifier ()",
                      "value": "onlyOwner"
                    },
                    "id": 84,
                    "name": "Identifier",
                    "src": "281:9:1"
                  }
                ],
                "id": 85,
                "name": "ModifierInvocation",
                "src": "281:9:1"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "address"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 60,
                              "type": "address",
                              "value": "owner"
                            },
                            "id": 87,
                            "name": "Identifier",
                            "src": "309:5:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 82,
                              "type": "address",
                              "value": "newOwner"
                            },
                            "id": 88,
                            "name": "Identifier",
                            "src": "317:8:1"
                          }
                        ],
                        "id": 89,
                        "name": "Assignment",
                        "src": "309:16:1"
                      }
                    ],
                    "id": 90,
                    "name": "ExpressionStatement",
                    "src": "309:16:1"
                  }
                ],
                "id": 91,
                "name": "Block",
                "src": "298:35:1"
              }
            ],
            "id": 92,
            "name": "FunctionDefinition",
            "src": "236:97:1"
          }
        ],
        "id": 93,
        "name": "ContractDefinition",
        "src": "30:306:1"
      },
      {
        "attributes": {
          "baseContracts": [
            null
          ],
          "contractDependencies": [
            null
          ],
          "contractKind": "interface",
          "documentation": null,
          "fullyImplemented": false,
          "linearizedBaseContracts": [
            105
          ],
          "name": "tokenRecipient",
          "scope": 605
        },
        "children": [
          {
            "attributes": {
              "body": null,
              "constant": false,
              "implemented": false,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "receiveApproval",
              "payable": false,
              "scope": 105,
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_from",
                      "scope": 104,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 94,
                        "name": "ElementaryTypeName",
                        "src": "392:7:1"
                      }
                    ],
                    "id": 95,
                    "name": "VariableDeclaration",
                    "src": "392:13:1"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_value",
                      "scope": 104,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 96,
                        "name": "ElementaryTypeName",
                        "src": "407:7:1"
                      }
                    ],
                    "id": 97,
                    "name": "VariableDeclaration",
                    "src": "407:14:1"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_token",
                      "scope": 104,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 98,
                        "name": "ElementaryTypeName",
                        "src": "423:7:1"
                      }
                    ],
                    "id": 99,
                    "name": "VariableDeclaration",
                    "src": "423:14:1"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_extraData",
                      "scope": 104,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bytes memory",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bytes",
                          "type": "bytes storage pointer"
                        },
                        "id": 100,
                        "name": "ElementaryTypeName",
                        "src": "439:5:1"
                      }
                    ],
                    "id": 101,
                    "name": "VariableDeclaration",
                    "src": "439:16:1"
                  }
                ],
                "id": 102,
                "name": "ParameterList",
                "src": "391:65:1"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 103,
                "name": "ParameterList",
                "src": "463:0:1"
              }
            ],
            "id": 104,
            "name": "FunctionDefinition",
            "src": "367:97:1"
          }
        ],
        "id": 105,
        "name": "ContractDefinition",
        "src": "340:126:1"
      },
      {
        "attributes": {
          "baseContracts": [
            null
          ],
          "contractDependencies": [
            null
          ],
          "contractKind": "contract",
          "documentation": null,
          "fullyImplemented": true,
          "linearizedBaseContracts": [
            453
          ],
          "name": "TokenERC20",
          "scope": 605
        },
        "children": [
          {
            "attributes": {
              "constant": false,
              "name": "name",
              "scope": 453,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "string storage ref",
              "value": null,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "name": "string",
                  "type": "string storage pointer"
                },
                "id": 106,
                "name": "ElementaryTypeName",
                "src": "535:6:1"
              }
            ],
            "id": 107,
            "name": "VariableDeclaration",
            "src": "535:18:1"
          },
          {
            "attributes": {
              "constant": false,
              "name": "symbol",
              "scope": 453,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "string storage ref",
              "value": null,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "name": "string",
                  "type": "string storage pointer"
                },
                "id": 108,
                "name": "ElementaryTypeName",
                "src": "560:6:1"
              }
            ],
            "id": 109,
            "name": "VariableDeclaration",
            "src": "560:20:1"
          },
          {
            "attributes": {
              "constant": false,
              "name": "decimals",
              "scope": 453,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "uint8",
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "name": "uint8",
                  "type": "uint8"
                },
                "id": 110,
                "name": "ElementaryTypeName",
                "src": "587:5:1"
              },
              {
                "attributes": {
                  "argumentTypes": null,
                  "hexvalue": "3138",
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "lValueRequested": false,
                  "subdenomination": null,
                  "token": "number",
                  "type": "int_const 18",
                  "value": "18"
                },
                "id": 111,
                "name": "Literal",
                "src": "611:2:1"
              }
            ],
            "id": 112,
            "name": "VariableDeclaration",
            "src": "587:26:1"
          },
          {
            "attributes": {
              "constant": false,
              "name": "totalSupply",
              "scope": 453,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "uint256",
              "value": null,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "name": "uint256",
                  "type": "uint256"
                },
                "id": 113,
                "name": "ElementaryTypeName",
                "src": "693:7:1"
              }
            ],
            "id": 114,
            "name": "VariableDeclaration",
            "src": "693:26:1"
          },
          {
            "attributes": {
              "constant": false,
              "name": "balanceOf",
              "scope": 453,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "mapping(address => uint256)",
              "value": null,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "type": "mapping(address => uint256)"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "address",
                      "type": "address"
                    },
                    "id": 115,
                    "name": "ElementaryTypeName",
                    "src": "785:7:1"
                  },
                  {
                    "attributes": {
                      "name": "uint256",
                      "type": "uint256"
                    },
                    "id": 116,
                    "name": "ElementaryTypeName",
                    "src": "796:7:1"
                  }
                ],
                "id": 117,
                "name": "Mapping",
                "src": "776:28:1"
              }
            ],
            "id": 118,
            "name": "VariableDeclaration",
            "src": "776:45:1"
          },
          {
            "attributes": {
              "constant": false,
              "name": "allowance",
              "scope": 453,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "mapping(address => mapping(address => uint256))",
              "value": null,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "type": "mapping(address => mapping(address => uint256))"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "address",
                      "type": "address"
                    },
                    "id": 119,
                    "name": "ElementaryTypeName",
                    "src": "837:7:1"
                  },
                  {
                    "attributes": {
                      "type": "mapping(address => uint256)"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 120,
                        "name": "ElementaryTypeName",
                        "src": "857:7:1"
                      },
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 121,
                        "name": "ElementaryTypeName",
                        "src": "868:7:1"
                      }
                    ],
                    "id": 122,
                    "name": "Mapping",
                    "src": "848:28:1"
                  }
                ],
                "id": 123,
                "name": "Mapping",
                "src": "828:49:1"
              }
            ],
            "id": 124,
            "name": "VariableDeclaration",
            "src": "828:66:1"
          },
          {
            "attributes": {
              "anonymous": false,
              "name": "Transfer"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": true,
                      "name": "from",
                      "scope": 132,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 125,
                        "name": "ElementaryTypeName",
                        "src": "999:7:1"
                      }
                    ],
                    "id": 126,
                    "name": "VariableDeclaration",
                    "src": "999:20:1"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": true,
                      "name": "to",
                      "scope": 132,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 127,
                        "name": "ElementaryTypeName",
                        "src": "1021:7:1"
                      }
                    ],
                    "id": 128,
                    "name": "VariableDeclaration",
                    "src": "1021:18:1"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": false,
                      "name": "value",
                      "scope": 132,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 129,
                        "name": "ElementaryTypeName",
                        "src": "1041:7:1"
                      }
                    ],
                    "id": 130,
                    "name": "VariableDeclaration",
                    "src": "1041:13:1"
                  }
                ],
                "id": 131,
                "name": "ParameterList",
                "src": "998:57:1"
              }
            ],
            "id": 132,
            "name": "EventDefinition",
            "src": "984:72:1"
          },
          {
            "attributes": {
              "anonymous": false,
              "name": "Burn"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": true,
                      "name": "from",
                      "scope": 138,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 133,
                        "name": "ElementaryTypeName",
                        "src": "1128:7:1"
                      }
                    ],
                    "id": 134,
                    "name": "VariableDeclaration",
                    "src": "1128:20:1"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": false,
                      "name": "value",
                      "scope": 138,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 135,
                        "name": "ElementaryTypeName",
                        "src": "1150:7:1"
                      }
                    ],
                    "id": 136,
                    "name": "VariableDeclaration",
                    "src": "1150:13:1"
                  }
                ],
                "id": 137,
                "name": "ParameterList",
                "src": "1127:37:1"
              }
            ],
            "id": 138,
            "name": "EventDefinition",
            "src": "1117:48:1"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": true,
              "modifiers": [
                null
              ],
              "name": "TokenERC20",
              "payable": false,
              "scope": 453,
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "initialSupply",
                      "scope": 173,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 139,
                        "name": "ElementaryTypeName",
                        "src": "1344:7:1"
                      }
                    ],
                    "id": 140,
                    "name": "VariableDeclaration",
                    "src": "1344:21:1"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "tokenName",
                      "scope": 173,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "string memory",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "string",
                          "type": "string storage pointer"
                        },
                        "id": 141,
                        "name": "ElementaryTypeName",
                        "src": "1376:6:1"
                      }
                    ],
                    "id": 142,
                    "name": "VariableDeclaration",
                    "src": "1376:16:1"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "tokenSymbol",
                      "scope": 173,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "string memory",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "string",
                          "type": "string storage pointer"
                        },
                        "id": 143,
                        "name": "ElementaryTypeName",
                        "src": "1403:6:1"
                      }
                    ],
                    "id": 144,
                    "name": "VariableDeclaration",
                    "src": "1403:18:1"
                  }
                ],
                "id": 145,
                "name": "ParameterList",
                "src": "1333:95:1"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 146,
                "name": "ParameterList",
                "src": "1436:0:1"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "uint256"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 114,
                              "type": "uint256",
                              "value": "totalSupply"
                            },
                            "id": 147,
                            "name": "Identifier",
                            "src": "1447:11:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "*",
                              "type": "uint256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 140,
                                  "type": "uint256",
                                  "value": "initialSupply"
                                },
                                "id": 148,
                                "name": "Identifier",
                                "src": "1461:13:1"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "commonType": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  },
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "operator": "**",
                                  "type": "uint256"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "hexvalue": "3130",
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "subdenomination": null,
                                      "token": "number",
                                      "type": "int_const 10",
                                      "value": "10"
                                    },
                                    "id": 149,
                                    "name": "Literal",
                                    "src": "1477:2:1"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "isStructConstructorCall": false,
                                      "lValueRequested": false,
                                      "names": [
                                        null
                                      ],
                                      "type": "uint256",
                                      "type_conversion": true
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": [
                                            {
                                              "typeIdentifier": "t_uint8",
                                              "typeString": "uint8"
                                            }
                                          ],
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": true,
                                          "lValueRequested": false,
                                          "type": "type(uint256)",
                                          "value": "uint256"
                                        },
                                        "id": 150,
                                        "name": "ElementaryTypeNameExpression",
                                        "src": "1483:7:1"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 112,
                                          "type": "uint8",
                                          "value": "decimals"
                                        },
                                        "id": 151,
                                        "name": "Identifier",
                                        "src": "1491:8:1"
                                      }
                                    ],
                                    "id": 152,
                                    "name": "FunctionCall",
                                    "src": "1483:17:1"
                                  }
                                ],
                                "id": 153,
                                "name": "BinaryOperation",
                                "src": "1477:23:1"
                              }
                            ],
                            "id": 154,
                            "name": "BinaryOperation",
                            "src": "1461:39:1"
                          }
                        ],
                        "id": 155,
                        "name": "Assignment",
                        "src": "1447:53:1"
                      }
                    ],
                    "id": 156,
                    "name": "ExpressionStatement",
                    "src": "1447:53:1"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "uint256"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": true,
                              "type": "uint256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 118,
                                  "type": "mapping(address => uint256)",
                                  "value": "balanceOf"
                                },
                                "id": 157,
                                "name": "Identifier",
                                "src": "1559:9:1"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "sender",
                                  "referencedDeclaration": null,
                                  "type": "address"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 616,
                                      "type": "msg",
                                      "value": "msg"
                                    },
                                    "id": 158,
                                    "name": "Identifier",
                                    "src": "1569:3:1"
                                  }
                                ],
                                "id": 159,
                                "name": "MemberAccess",
                                "src": "1569:10:1"
                              }
                            ],
                            "id": 160,
                            "name": "IndexAccess",
                            "src": "1559:21:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 114,
                              "type": "uint256",
                              "value": "totalSupply"
                            },
                            "id": 161,
                            "name": "Identifier",
                            "src": "1583:11:1"
                          }
                        ],
                        "id": 162,
                        "name": "Assignment",
                        "src": "1559:35:1"
                      }
                    ],
                    "id": 163,
                    "name": "ExpressionStatement",
                    "src": "1559:35:1"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "string storage ref"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 107,
                              "type": "string storage ref",
                              "value": "name"
                            },
                            "id": 164,
                            "name": "Identifier",
                            "src": "1659:4:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 142,
                              "type": "string memory",
                              "value": "tokenName"
                            },
                            "id": 165,
                            "name": "Identifier",
                            "src": "1666:9:1"
                          }
                        ],
                        "id": 166,
                        "name": "Assignment",
                        "src": "1659:16:1"
                      }
                    ],
                    "id": 167,
                    "name": "ExpressionStatement",
                    "src": "1659:16:1"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "string storage ref"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 109,
                              "type": "string storage ref",
                              "value": "symbol"
                            },
                            "id": 168,
                            "name": "Identifier",
                            "src": "1757:6:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 144,
                              "type": "string memory",
                              "value": "tokenSymbol"
                            },
                            "id": 169,
                            "name": "Identifier",
                            "src": "1766:11:1"
                          }
                        ],
                        "id": 170,
                        "name": "Assignment",
                        "src": "1757:20:1"
                      }
                    ],
                    "id": 171,
                    "name": "ExpressionStatement",
                    "src": "1757:20:1"
                  }
                ],
                "id": 172,
                "name": "Block",
                "src": "1436:418:1"
              }
            ],
            "id": 173,
            "name": "FunctionDefinition",
            "src": "1314:540:1"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "_transfer",
              "payable": false,
              "scope": 453,
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "internal"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_from",
                      "scope": 249,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 174,
                        "name": "ElementaryTypeName",
                        "src": "1962:7:1"
                      }
                    ],
                    "id": 175,
                    "name": "VariableDeclaration",
                    "src": "1962:13:1"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_to",
                      "scope": 249,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 176,
                        "name": "ElementaryTypeName",
                        "src": "1977:7:1"
                      }
                    ],
                    "id": 177,
                    "name": "VariableDeclaration",
                    "src": "1977:11:1"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_value",
                      "scope": 249,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint",
                          "type": "uint256"
                        },
                        "id": 178,
                        "name": "ElementaryTypeName",
                        "src": "1990:4:1"
                      }
                    ],
                    "id": 179,
                    "name": "VariableDeclaration",
                    "src": "1990:11:1"
                  }
                ],
                "id": 180,
                "name": "ParameterList",
                "src": "1961:41:1"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 181,
                "name": "ParameterList",
                "src": "2012:0:1"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 619,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 182,
                            "name": "Identifier",
                            "src": "2087:7:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "!=",
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 177,
                                  "type": "address",
                                  "value": "_to"
                                },
                                "id": 183,
                                "name": "Identifier",
                                "src": "2095:3:1"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "hexvalue": "307830",
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "subdenomination": null,
                                  "token": "number",
                                  "type": "int_const 0",
                                  "value": "0x0"
                                },
                                "id": 184,
                                "name": "Literal",
                                "src": "2102:3:1"
                              }
                            ],
                            "id": 185,
                            "name": "BinaryOperation",
                            "src": "2095:10:1"
                          }
                        ],
                        "id": 186,
                        "name": "FunctionCall",
                        "src": "2087:19:1"
                      }
                    ],
                    "id": 187,
                    "name": "ExpressionStatement",
                    "src": "2087:19:1"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 619,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 188,
                            "name": "Identifier",
                            "src": "2160:7:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": ">=",
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "type": "uint256"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 118,
                                      "type": "mapping(address => uint256)",
                                      "value": "balanceOf"
                                    },
                                    "id": 189,
                                    "name": "Identifier",
                                    "src": "2168:9:1"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 175,
                                      "type": "address",
                                      "value": "_from"
                                    },
                                    "id": 190,
                                    "name": "Identifier",
                                    "src": "2178:5:1"
                                  }
                                ],
                                "id": 191,
                                "name": "IndexAccess",
                                "src": "2168:16:1"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 179,
                                  "type": "uint256",
                                  "value": "_value"
                                },
                                "id": 192,
                                "name": "Identifier",
                                "src": "2188:6:1"
                              }
                            ],
                            "id": 193,
                            "name": "BinaryOperation",
                            "src": "2168:26:1"
                          }
                        ],
                        "id": 194,
                        "name": "FunctionCall",
                        "src": "2160:35:1"
                      }
                    ],
                    "id": 195,
                    "name": "ExpressionStatement",
                    "src": "2160:35:1"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 619,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 196,
                            "name": "Identifier",
                            "src": "2238:7:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": ">",
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "commonType": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  },
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "operator": "+",
                                  "type": "uint256"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "type": "uint256"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 118,
                                          "type": "mapping(address => uint256)",
                                          "value": "balanceOf"
                                        },
                                        "id": 197,
                                        "name": "Identifier",
                                        "src": "2246:9:1"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 177,
                                          "type": "address",
                                          "value": "_to"
                                        },
                                        "id": 198,
                                        "name": "Identifier",
                                        "src": "2256:3:1"
                                      }
                                    ],
                                    "id": 199,
                                    "name": "IndexAccess",
                                    "src": "2246:14:1"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 179,
                                      "type": "uint256",
                                      "value": "_value"
                                    },
                                    "id": 200,
                                    "name": "Identifier",
                                    "src": "2263:6:1"
                                  }
                                ],
                                "id": 201,
                                "name": "BinaryOperation",
                                "src": "2246:23:1"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "type": "uint256"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 118,
                                      "type": "mapping(address => uint256)",
                                      "value": "balanceOf"
                                    },
                                    "id": 202,
                                    "name": "Identifier",
                                    "src": "2272:9:1"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 177,
                                      "type": "address",
                                      "value": "_to"
                                    },
                                    "id": 203,
                                    "name": "Identifier",
                                    "src": "2282:3:1"
                                  }
                                ],
                                "id": 204,
                                "name": "IndexAccess",
                                "src": "2272:14:1"
                              }
                            ],
                            "id": 205,
                            "name": "BinaryOperation",
                            "src": "2246:40:1"
                          }
                        ],
                        "id": 206,
                        "name": "FunctionCall",
                        "src": "2238:49:1"
                      }
                    ],
                    "id": 207,
                    "name": "ExpressionStatement",
                    "src": "2238:49:1"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        209
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "previousBalances",
                          "scope": 249,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "uint256",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "uint",
                              "type": "uint256"
                            },
                            "id": 208,
                            "name": "ElementaryTypeName",
                            "src": "2351:4:1"
                          }
                        ],
                        "id": 209,
                        "name": "VariableDeclaration",
                        "src": "2351:21:1"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "+",
                          "type": "uint256"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "type": "uint256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 118,
                                  "type": "mapping(address => uint256)",
                                  "value": "balanceOf"
                                },
                                "id": 210,
                                "name": "Identifier",
                                "src": "2375:9:1"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 175,
                                  "type": "address",
                                  "value": "_from"
                                },
                                "id": 211,
                                "name": "Identifier",
                                "src": "2385:5:1"
                              }
                            ],
                            "id": 212,
                            "name": "IndexAccess",
                            "src": "2375:16:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "type": "uint256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 118,
                                  "type": "mapping(address => uint256)",
                                  "value": "balanceOf"
                                },
                                "id": 213,
                                "name": "Identifier",
                                "src": "2394:9:1"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 177,
                                  "type": "address",
                                  "value": "_to"
                                },
                                "id": 214,
                                "name": "Identifier",
                                "src": "2404:3:1"
                              }
                            ],
                            "id": 215,
                            "name": "IndexAccess",
                            "src": "2394:14:1"
                          }
                        ],
                        "id": 216,
                        "name": "BinaryOperation",
                        "src": "2375:33:1"
                      }
                    ],
                    "id": 217,
                    "name": "VariableDeclarationStatement",
                    "src": "2351:57:1"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "-=",
                          "type": "uint256"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": true,
                              "type": "uint256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 118,
                                  "type": "mapping(address => uint256)",
                                  "value": "balanceOf"
                                },
                                "id": 218,
                                "name": "Identifier",
                                "src": "2456:9:1"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 175,
                                  "type": "address",
                                  "value": "_from"
                                },
                                "id": 219,
                                "name": "Identifier",
                                "src": "2466:5:1"
                              }
                            ],
                            "id": 220,
                            "name": "IndexAccess",
                            "src": "2456:16:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 179,
                              "type": "uint256",
                              "value": "_value"
                            },
                            "id": 221,
                            "name": "Identifier",
                            "src": "2476:6:1"
                          }
                        ],
                        "id": 222,
                        "name": "Assignment",
                        "src": "2456:26:1"
                      }
                    ],
                    "id": 223,
                    "name": "ExpressionStatement",
                    "src": "2456:26:1"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "+=",
                          "type": "uint256"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": true,
                              "type": "uint256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 118,
                                  "type": "mapping(address => uint256)",
                                  "value": "balanceOf"
                                },
                                "id": 224,
                                "name": "Identifier",
                                "src": "2535:9:1"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 177,
                                  "type": "address",
                                  "value": "_to"
                                },
                                "id": 225,
                                "name": "Identifier",
                                "src": "2545:3:1"
                              }
                            ],
                            "id": 226,
                            "name": "IndexAccess",
                            "src": "2535:14:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 179,
                              "type": "uint256",
                              "value": "_value"
                            },
                            "id": 227,
                            "name": "Identifier",
                            "src": "2553:6:1"
                          }
                        ],
                        "id": 228,
                        "name": "Assignment",
                        "src": "2535:24:1"
                      }
                    ],
                    "id": 229,
                    "name": "ExpressionStatement",
                    "src": "2535:24:1"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 132,
                              "type": "function (address,address,uint256)",
                              "value": "Transfer"
                            },
                            "id": 230,
                            "name": "Identifier",
                            "src": "2570:8:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 175,
                              "type": "address",
                              "value": "_from"
                            },
                            "id": 231,
                            "name": "Identifier",
                            "src": "2579:5:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 177,
                              "type": "address",
                              "value": "_to"
                            },
                            "id": 232,
                            "name": "Identifier",
                            "src": "2586:3:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 179,
                              "type": "uint256",
                              "value": "_value"
                            },
                            "id": 233,
                            "name": "Identifier",
                            "src": "2591:6:1"
                          }
                        ],
                        "id": 234,
                        "name": "FunctionCall",
                        "src": "2570:28:1"
                      }
                    ],
                    "id": 235,
                    "name": "ExpressionStatement",
                    "src": "2570:28:1"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 607,
                              "type": "function (bool) pure",
                              "value": "assert"
                            },
                            "id": 236,
                            "name": "Identifier",
                            "src": "2711:6:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "==",
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "commonType": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  },
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "operator": "+",
                                  "type": "uint256"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "type": "uint256"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 118,
                                          "type": "mapping(address => uint256)",
                                          "value": "balanceOf"
                                        },
                                        "id": 237,
                                        "name": "Identifier",
                                        "src": "2718:9:1"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 175,
                                          "type": "address",
                                          "value": "_from"
                                        },
                                        "id": 238,
                                        "name": "Identifier",
                                        "src": "2728:5:1"
                                      }
                                    ],
                                    "id": 239,
                                    "name": "IndexAccess",
                                    "src": "2718:16:1"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "type": "uint256"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 118,
                                          "type": "mapping(address => uint256)",
                                          "value": "balanceOf"
                                        },
                                        "id": 240,
                                        "name": "Identifier",
                                        "src": "2737:9:1"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 177,
                                          "type": "address",
                                          "value": "_to"
                                        },
                                        "id": 241,
                                        "name": "Identifier",
                                        "src": "2747:3:1"
                                      }
                                    ],
                                    "id": 242,
                                    "name": "IndexAccess",
                                    "src": "2737:14:1"
                                  }
                                ],
                                "id": 243,
                                "name": "BinaryOperation",
                                "src": "2718:33:1"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 209,
                                  "type": "uint256",
                                  "value": "previousBalances"
                                },
                                "id": 244,
                                "name": "Identifier",
                                "src": "2755:16:1"
                              }
                            ],
                            "id": 245,
                            "name": "BinaryOperation",
                            "src": "2718:53:1"
                          }
                        ],
                        "id": 246,
                        "name": "FunctionCall",
                        "src": "2711:61:1"
                      }
                    ],
                    "id": 247,
                    "name": "ExpressionStatement",
                    "src": "2711:61:1"
                  }
                ],
                "id": 248,
                "name": "Block",
                "src": "2012:768:1"
              }
            ],
            "id": 249,
            "name": "FunctionDefinition",
            "src": "1943:837:1"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "transfer",
              "payable": false,
              "scope": 453,
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_to",
                      "scope": 264,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 250,
                        "name": "ElementaryTypeName",
                        "src": "3009:7:1"
                      }
                    ],
                    "id": 251,
                    "name": "VariableDeclaration",
                    "src": "3009:11:1"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_value",
                      "scope": 264,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 252,
                        "name": "ElementaryTypeName",
                        "src": "3022:7:1"
                      }
                    ],
                    "id": 253,
                    "name": "VariableDeclaration",
                    "src": "3022:14:1"
                  }
                ],
                "id": 254,
                "name": "ParameterList",
                "src": "3008:29:1"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 255,
                "name": "ParameterList",
                "src": "3045:0:1"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 249,
                              "type": "function (address,address,uint256)",
                              "value": "_transfer"
                            },
                            "id": 256,
                            "name": "Identifier",
                            "src": "3056:9:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "sender",
                              "referencedDeclaration": null,
                              "type": "address"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 616,
                                  "type": "msg",
                                  "value": "msg"
                                },
                                "id": 257,
                                "name": "Identifier",
                                "src": "3066:3:1"
                              }
                            ],
                            "id": 258,
                            "name": "MemberAccess",
                            "src": "3066:10:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 251,
                              "type": "address",
                              "value": "_to"
                            },
                            "id": 259,
                            "name": "Identifier",
                            "src": "3078:3:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 253,
                              "type": "uint256",
                              "value": "_value"
                            },
                            "id": 260,
                            "name": "Identifier",
                            "src": "3083:6:1"
                          }
                        ],
                        "id": 261,
                        "name": "FunctionCall",
                        "src": "3056:34:1"
                      }
                    ],
                    "id": 262,
                    "name": "ExpressionStatement",
                    "src": "3056:34:1"
                  }
                ],
                "id": 263,
                "name": "Block",
                "src": "3045:53:1"
              }
            ],
            "id": 264,
            "name": "FunctionDefinition",
            "src": "2991:107:1"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "transferFrom",
              "payable": false,
              "scope": 453,
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_from",
                      "scope": 304,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 265,
                        "name": "ElementaryTypeName",
                        "src": "3400:7:1"
                      }
                    ],
                    "id": 266,
                    "name": "VariableDeclaration",
                    "src": "3400:13:1"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_to",
                      "scope": 304,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 267,
                        "name": "ElementaryTypeName",
                        "src": "3415:7:1"
                      }
                    ],
                    "id": 268,
                    "name": "VariableDeclaration",
                    "src": "3415:11:1"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_value",
                      "scope": 304,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 269,
                        "name": "ElementaryTypeName",
                        "src": "3428:7:1"
                      }
                    ],
                    "id": 270,
                    "name": "VariableDeclaration",
                    "src": "3428:14:1"
                  }
                ],
                "id": 271,
                "name": "ParameterList",
                "src": "3399:44:1"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "success",
                      "scope": 304,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bool",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bool",
                          "type": "bool"
                        },
                        "id": 272,
                        "name": "ElementaryTypeName",
                        "src": "3460:4:1"
                      }
                    ],
                    "id": 273,
                    "name": "VariableDeclaration",
                    "src": "3460:12:1"
                  }
                ],
                "id": 274,
                "name": "ParameterList",
                "src": "3459:14:1"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 619,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 275,
                            "name": "Identifier",
                            "src": "3485:7:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "<=",
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 270,
                                  "type": "uint256",
                                  "value": "_value"
                                },
                                "id": 276,
                                "name": "Identifier",
                                "src": "3493:6:1"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "type": "uint256"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "type": "mapping(address => uint256)"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 124,
                                          "type": "mapping(address => mapping(address => uint256))",
                                          "value": "allowance"
                                        },
                                        "id": 277,
                                        "name": "Identifier",
                                        "src": "3503:9:1"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 266,
                                          "type": "address",
                                          "value": "_from"
                                        },
                                        "id": 278,
                                        "name": "Identifier",
                                        "src": "3513:5:1"
                                      }
                                    ],
                                    "id": 279,
                                    "name": "IndexAccess",
                                    "src": "3503:16:1"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "member_name": "sender",
                                      "referencedDeclaration": null,
                                      "type": "address"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 616,
                                          "type": "msg",
                                          "value": "msg"
                                        },
                                        "id": 280,
                                        "name": "Identifier",
                                        "src": "3520:3:1"
                                      }
                                    ],
                                    "id": 281,
                                    "name": "MemberAccess",
                                    "src": "3520:10:1"
                                  }
                                ],
                                "id": 282,
                                "name": "IndexAccess",
                                "src": "3503:28:1"
                              }
                            ],
                            "id": 283,
                            "name": "BinaryOperation",
                            "src": "3493:38:1"
                          }
                        ],
                        "id": 284,
                        "name": "FunctionCall",
                        "src": "3485:47:1"
                      }
                    ],
                    "id": 285,
                    "name": "ExpressionStatement",
                    "src": "3485:47:1"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "-=",
                          "type": "uint256"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": true,
                              "type": "uint256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "type": "mapping(address => uint256)"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 124,
                                      "type": "mapping(address => mapping(address => uint256))",
                                      "value": "allowance"
                                    },
                                    "id": 286,
                                    "name": "Identifier",
                                    "src": "3566:9:1"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 266,
                                      "type": "address",
                                      "value": "_from"
                                    },
                                    "id": 287,
                                    "name": "Identifier",
                                    "src": "3576:5:1"
                                  }
                                ],
                                "id": 290,
                                "name": "IndexAccess",
                                "src": "3566:16:1"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "sender",
                                  "referencedDeclaration": null,
                                  "type": "address"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 616,
                                      "type": "msg",
                                      "value": "msg"
                                    },
                                    "id": 288,
                                    "name": "Identifier",
                                    "src": "3583:3:1"
                                  }
                                ],
                                "id": 289,
                                "name": "MemberAccess",
                                "src": "3583:10:1"
                              }
                            ],
                            "id": 291,
                            "name": "IndexAccess",
                            "src": "3566:28:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 270,
                              "type": "uint256",
                              "value": "_value"
                            },
                            "id": 292,
                            "name": "Identifier",
                            "src": "3598:6:1"
                          }
                        ],
                        "id": 293,
                        "name": "Assignment",
                        "src": "3566:38:1"
                      }
                    ],
                    "id": 294,
                    "name": "ExpressionStatement",
                    "src": "3566:38:1"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 249,
                              "type": "function (address,address,uint256)",
                              "value": "_transfer"
                            },
                            "id": 295,
                            "name": "Identifier",
                            "src": "3615:9:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 266,
                              "type": "address",
                              "value": "_from"
                            },
                            "id": 296,
                            "name": "Identifier",
                            "src": "3625:5:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 268,
                              "type": "address",
                              "value": "_to"
                            },
                            "id": 297,
                            "name": "Identifier",
                            "src": "3632:3:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 270,
                              "type": "uint256",
                              "value": "_value"
                            },
                            "id": 298,
                            "name": "Identifier",
                            "src": "3637:6:1"
                          }
                        ],
                        "id": 299,
                        "name": "FunctionCall",
                        "src": "3615:29:1"
                      }
                    ],
                    "id": 300,
                    "name": "ExpressionStatement",
                    "src": "3615:29:1"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 274
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "hexvalue": "74727565",
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "subdenomination": null,
                          "token": "bool",
                          "type": "bool",
                          "value": "true"
                        },
                        "id": 301,
                        "name": "Literal",
                        "src": "3662:4:1"
                      }
                    ],
                    "id": 302,
                    "name": "Return",
                    "src": "3655:11:1"
                  }
                ],
                "id": 303,
                "name": "Block",
                "src": "3474:200:1"
              }
            ],
            "id": 304,
            "name": "FunctionDefinition",
            "src": "3378:296:1"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "approve",
              "payable": false,
              "scope": 453,
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_spender",
                      "scope": 325,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 305,
                        "name": "ElementaryTypeName",
                        "src": "3960:7:1"
                      }
                    ],
                    "id": 306,
                    "name": "VariableDeclaration",
                    "src": "3960:16:1"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_value",
                      "scope": 325,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 307,
                        "name": "ElementaryTypeName",
                        "src": "3978:7:1"
                      }
                    ],
                    "id": 308,
                    "name": "VariableDeclaration",
                    "src": "3978:14:1"
                  }
                ],
                "id": 309,
                "name": "ParameterList",
                "src": "3959:34:1"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "success",
                      "scope": 325,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bool",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bool",
                          "type": "bool"
                        },
                        "id": 310,
                        "name": "ElementaryTypeName",
                        "src": "4019:4:1"
                      }
                    ],
                    "id": 311,
                    "name": "VariableDeclaration",
                    "src": "4019:12:1"
                  }
                ],
                "id": 312,
                "name": "ParameterList",
                "src": "4018:14:1"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "uint256"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": true,
                              "type": "uint256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "type": "mapping(address => uint256)"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 124,
                                      "type": "mapping(address => mapping(address => uint256))",
                                      "value": "allowance"
                                    },
                                    "id": 313,
                                    "name": "Identifier",
                                    "src": "4044:9:1"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "member_name": "sender",
                                      "referencedDeclaration": null,
                                      "type": "address"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 616,
                                          "type": "msg",
                                          "value": "msg"
                                        },
                                        "id": 314,
                                        "name": "Identifier",
                                        "src": "4054:3:1"
                                      }
                                    ],
                                    "id": 315,
                                    "name": "MemberAccess",
                                    "src": "4054:10:1"
                                  }
                                ],
                                "id": 317,
                                "name": "IndexAccess",
                                "src": "4044:21:1"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 306,
                                  "type": "address",
                                  "value": "_spender"
                                },
                                "id": 316,
                                "name": "Identifier",
                                "src": "4066:8:1"
                              }
                            ],
                            "id": 318,
                            "name": "IndexAccess",
                            "src": "4044:31:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 308,
                              "type": "uint256",
                              "value": "_value"
                            },
                            "id": 319,
                            "name": "Identifier",
                            "src": "4078:6:1"
                          }
                        ],
                        "id": 320,
                        "name": "Assignment",
                        "src": "4044:40:1"
                      }
                    ],
                    "id": 321,
                    "name": "ExpressionStatement",
                    "src": "4044:40:1"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 312
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "hexvalue": "74727565",
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "subdenomination": null,
                          "token": "bool",
                          "type": "bool",
                          "value": "true"
                        },
                        "id": 322,
                        "name": "Literal",
                        "src": "4102:4:1"
                      }
                    ],
                    "id": 323,
                    "name": "Return",
                    "src": "4095:11:1"
                  }
                ],
                "id": 324,
                "name": "Block",
                "src": "4033:81:1"
              }
            ],
            "id": 325,
            "name": "FunctionDefinition",
            "src": "3943:171:1"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "approveAndCall",
              "payable": false,
              "scope": 453,
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_spender",
                      "scope": 361,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 326,
                        "name": "ElementaryTypeName",
                        "src": "4537:7:1"
                      }
                    ],
                    "id": 327,
                    "name": "VariableDeclaration",
                    "src": "4537:16:1"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_value",
                      "scope": 361,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 328,
                        "name": "ElementaryTypeName",
                        "src": "4555:7:1"
                      }
                    ],
                    "id": 329,
                    "name": "VariableDeclaration",
                    "src": "4555:14:1"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_extraData",
                      "scope": 361,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bytes memory",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bytes",
                          "type": "bytes storage pointer"
                        },
                        "id": 330,
                        "name": "ElementaryTypeName",
                        "src": "4571:5:1"
                      }
                    ],
                    "id": 331,
                    "name": "VariableDeclaration",
                    "src": "4571:16:1"
                  }
                ],
                "id": 332,
                "name": "ParameterList",
                "src": "4536:52:1"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "success",
                      "scope": 361,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bool",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bool",
                          "type": "bool"
                        },
                        "id": 333,
                        "name": "ElementaryTypeName",
                        "src": "4623:4:1"
                      }
                    ],
                    "id": 334,
                    "name": "VariableDeclaration",
                    "src": "4623:12:1"
                  }
                ],
                "id": 335,
                "name": "ParameterList",
                "src": "4622:14:1"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "assignments": [
                        337
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "spender",
                          "scope": 361,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "contract tokenRecipient",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "contractScope": null,
                              "name": "tokenRecipient",
                              "referencedDeclaration": 105,
                              "type": "contract tokenRecipient"
                            },
                            "id": 336,
                            "name": "UserDefinedTypeName",
                            "src": "4648:14:1"
                          }
                        ],
                        "id": 337,
                        "name": "VariableDeclaration",
                        "src": "4648:22:1"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "contract tokenRecipient",
                          "type_conversion": true
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 105,
                              "type": "type(contract tokenRecipient)",
                              "value": "tokenRecipient"
                            },
                            "id": 338,
                            "name": "Identifier",
                            "src": "4673:14:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 327,
                              "type": "address",
                              "value": "_spender"
                            },
                            "id": 339,
                            "name": "Identifier",
                            "src": "4688:8:1"
                          }
                        ],
                        "id": 340,
                        "name": "FunctionCall",
                        "src": "4673:24:1"
                      }
                    ],
                    "id": 341,
                    "name": "VariableDeclarationStatement",
                    "src": "4648:49:1"
                  },
                  {
                    "attributes": {
                      "falseBody": null
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "bool",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 325,
                              "type": "function (address,uint256) returns (bool)",
                              "value": "approve"
                            },
                            "id": 342,
                            "name": "Identifier",
                            "src": "4712:7:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 327,
                              "type": "address",
                              "value": "_spender"
                            },
                            "id": 343,
                            "name": "Identifier",
                            "src": "4720:8:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 329,
                              "type": "uint256",
                              "value": "_value"
                            },
                            "id": 344,
                            "name": "Identifier",
                            "src": "4730:6:1"
                          }
                        ],
                        "id": 345,
                        "name": "FunctionCall",
                        "src": "4712:25:1"
                      },
                      {
                        "children": [
                          {
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "isStructConstructorCall": false,
                                  "lValueRequested": false,
                                  "names": [
                                    null
                                  ],
                                  "type": "tuple()",
                                  "type_conversion": false
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": [
                                        {
                                          "typeIdentifier": "t_address",
                                          "typeString": "address"
                                        },
                                        {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        },
                                        {
                                          "typeIdentifier": "t_contract$_TokenERC20_$453",
                                          "typeString": "contract TokenERC20"
                                        },
                                        {
                                          "typeIdentifier": "t_bytes_memory_ptr",
                                          "typeString": "bytes memory"
                                        }
                                      ],
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "member_name": "receiveApproval",
                                      "referencedDeclaration": 104,
                                      "type": "function (address,uint256,address,bytes memory) external"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 337,
                                          "type": "contract tokenRecipient",
                                          "value": "spender"
                                        },
                                        "id": 346,
                                        "name": "Identifier",
                                        "src": "4754:7:1"
                                      }
                                    ],
                                    "id": 348,
                                    "name": "MemberAccess",
                                    "src": "4754:23:1"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "member_name": "sender",
                                      "referencedDeclaration": null,
                                      "type": "address"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 616,
                                          "type": "msg",
                                          "value": "msg"
                                        },
                                        "id": 349,
                                        "name": "Identifier",
                                        "src": "4778:3:1"
                                      }
                                    ],
                                    "id": 350,
                                    "name": "MemberAccess",
                                    "src": "4778:10:1"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 329,
                                      "type": "uint256",
                                      "value": "_value"
                                    },
                                    "id": 351,
                                    "name": "Identifier",
                                    "src": "4790:6:1"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 633,
                                      "type": "contract TokenERC20",
                                      "value": "this"
                                    },
                                    "id": 352,
                                    "name": "Identifier",
                                    "src": "4798:4:1"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 331,
                                      "type": "bytes memory",
                                      "value": "_extraData"
                                    },
                                    "id": 353,
                                    "name": "Identifier",
                                    "src": "4804:10:1"
                                  }
                                ],
                                "id": 354,
                                "name": "FunctionCall",
                                "src": "4754:61:1"
                              }
                            ],
                            "id": 355,
                            "name": "ExpressionStatement",
                            "src": "4754:61:1"
                          },
                          {
                            "attributes": {
                              "functionReturnParameters": 335
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "hexvalue": "74727565",
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "subdenomination": null,
                                  "token": "bool",
                                  "type": "bool",
                                  "value": "true"
                                },
                                "id": 356,
                                "name": "Literal",
                                "src": "4837:4:1"
                              }
                            ],
                            "id": 357,
                            "name": "Return",
                            "src": "4830:11:1"
                          }
                        ],
                        "id": 358,
                        "name": "Block",
                        "src": "4739:114:1"
                      }
                    ],
                    "id": 359,
                    "name": "IfStatement",
                    "src": "4708:145:1"
                  }
                ],
                "id": 360,
                "name": "Block",
                "src": "4637:223:1"
              }
            ],
            "id": 361,
            "name": "FunctionDefinition",
            "src": "4513:347:1"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "burn",
              "payable": false,
              "scope": 453,
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_value",
                      "scope": 397,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 362,
                        "name": "ElementaryTypeName",
                        "src": "5049:7:1"
                      }
                    ],
                    "id": 363,
                    "name": "VariableDeclaration",
                    "src": "5049:14:1"
                  }
                ],
                "id": 364,
                "name": "ParameterList",
                "src": "5048:16:1"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "success",
                      "scope": 397,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bool",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bool",
                          "type": "bool"
                        },
                        "id": 365,
                        "name": "ElementaryTypeName",
                        "src": "5081:4:1"
                      }
                    ],
                    "id": 366,
                    "name": "VariableDeclaration",
                    "src": "5081:12:1"
                  }
                ],
                "id": 367,
                "name": "ParameterList",
                "src": "5080:14:1"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 619,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 368,
                            "name": "Identifier",
                            "src": "5106:7:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": ">=",
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "type": "uint256"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 118,
                                      "type": "mapping(address => uint256)",
                                      "value": "balanceOf"
                                    },
                                    "id": 369,
                                    "name": "Identifier",
                                    "src": "5114:9:1"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "member_name": "sender",
                                      "referencedDeclaration": null,
                                      "type": "address"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 616,
                                          "type": "msg",
                                          "value": "msg"
                                        },
                                        "id": 370,
                                        "name": "Identifier",
                                        "src": "5124:3:1"
                                      }
                                    ],
                                    "id": 371,
                                    "name": "MemberAccess",
                                    "src": "5124:10:1"
                                  }
                                ],
                                "id": 372,
                                "name": "IndexAccess",
                                "src": "5114:21:1"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 363,
                                  "type": "uint256",
                                  "value": "_value"
                                },
                                "id": 373,
                                "name": "Identifier",
                                "src": "5139:6:1"
                              }
                            ],
                            "id": 374,
                            "name": "BinaryOperation",
                            "src": "5114:31:1"
                          }
                        ],
                        "id": 375,
                        "name": "FunctionCall",
                        "src": "5106:40:1"
                      }
                    ],
                    "id": 376,
                    "name": "ExpressionStatement",
                    "src": "5106:40:1"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "-=",
                          "type": "uint256"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": true,
                              "type": "uint256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 118,
                                  "type": "mapping(address => uint256)",
                                  "value": "balanceOf"
                                },
                                "id": 377,
                                "name": "Identifier",
                                "src": "5193:9:1"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "sender",
                                  "referencedDeclaration": null,
                                  "type": "address"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 616,
                                      "type": "msg",
                                      "value": "msg"
                                    },
                                    "id": 378,
                                    "name": "Identifier",
                                    "src": "5203:3:1"
                                  }
                                ],
                                "id": 379,
                                "name": "MemberAccess",
                                "src": "5203:10:1"
                              }
                            ],
                            "id": 380,
                            "name": "IndexAccess",
                            "src": "5193:21:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 363,
                              "type": "uint256",
                              "value": "_value"
                            },
                            "id": 381,
                            "name": "Identifier",
                            "src": "5218:6:1"
                          }
                        ],
                        "id": 382,
                        "name": "Assignment",
                        "src": "5193:31:1"
                      }
                    ],
                    "id": 383,
                    "name": "ExpressionStatement",
                    "src": "5193:31:1"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "-=",
                          "type": "uint256"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 114,
                              "type": "uint256",
                              "value": "totalSupply"
                            },
                            "id": 384,
                            "name": "Identifier",
                            "src": "5274:11:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 363,
                              "type": "uint256",
                              "value": "_value"
                            },
                            "id": 385,
                            "name": "Identifier",
                            "src": "5289:6:1"
                          }
                        ],
                        "id": 386,
                        "name": "Assignment",
                        "src": "5274:21:1"
                      }
                    ],
                    "id": 387,
                    "name": "ExpressionStatement",
                    "src": "5274:21:1"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 138,
                              "type": "function (address,uint256)",
                              "value": "Burn"
                            },
                            "id": 388,
                            "name": "Identifier",
                            "src": "5350:4:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "sender",
                              "referencedDeclaration": null,
                              "type": "address"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 616,
                                  "type": "msg",
                                  "value": "msg"
                                },
                                "id": 389,
                                "name": "Identifier",
                                "src": "5355:3:1"
                              }
                            ],
                            "id": 390,
                            "name": "MemberAccess",
                            "src": "5355:10:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 363,
                              "type": "uint256",
                              "value": "_value"
                            },
                            "id": 391,
                            "name": "Identifier",
                            "src": "5367:6:1"
                          }
                        ],
                        "id": 392,
                        "name": "FunctionCall",
                        "src": "5350:24:1"
                      }
                    ],
                    "id": 393,
                    "name": "ExpressionStatement",
                    "src": "5350:24:1"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 367
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "hexvalue": "74727565",
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "subdenomination": null,
                          "token": "bool",
                          "type": "bool",
                          "value": "true"
                        },
                        "id": 394,
                        "name": "Literal",
                        "src": "5392:4:1"
                      }
                    ],
                    "id": 395,
                    "name": "Return",
                    "src": "5385:11:1"
                  }
                ],
                "id": 396,
                "name": "Block",
                "src": "5095:309:1"
              }
            ],
            "id": 397,
            "name": "FunctionDefinition",
            "src": "5035:369:1"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "burnFrom",
              "payable": false,
              "scope": 453,
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_from",
                      "scope": 452,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 398,
                        "name": "ElementaryTypeName",
                        "src": "5685:7:1"
                      }
                    ],
                    "id": 399,
                    "name": "VariableDeclaration",
                    "src": "5685:13:1"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_value",
                      "scope": 452,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 400,
                        "name": "ElementaryTypeName",
                        "src": "5700:7:1"
                      }
                    ],
                    "id": 401,
                    "name": "VariableDeclaration",
                    "src": "5700:14:1"
                  }
                ],
                "id": 402,
                "name": "ParameterList",
                "src": "5684:31:1"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "success",
                      "scope": 452,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bool",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bool",
                          "type": "bool"
                        },
                        "id": 403,
                        "name": "ElementaryTypeName",
                        "src": "5732:4:1"
                      }
                    ],
                    "id": 404,
                    "name": "VariableDeclaration",
                    "src": "5732:12:1"
                  }
                ],
                "id": 405,
                "name": "ParameterList",
                "src": "5731:14:1"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 619,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 406,
                            "name": "Identifier",
                            "src": "5757:7:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": ">=",
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "type": "uint256"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 118,
                                      "type": "mapping(address => uint256)",
                                      "value": "balanceOf"
                                    },
                                    "id": 407,
                                    "name": "Identifier",
                                    "src": "5765:9:1"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 399,
                                      "type": "address",
                                      "value": "_from"
                                    },
                                    "id": 408,
                                    "name": "Identifier",
                                    "src": "5775:5:1"
                                  }
                                ],
                                "id": 409,
                                "name": "IndexAccess",
                                "src": "5765:16:1"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 401,
                                  "type": "uint256",
                                  "value": "_value"
                                },
                                "id": 410,
                                "name": "Identifier",
                                "src": "5785:6:1"
                              }
                            ],
                            "id": 411,
                            "name": "BinaryOperation",
                            "src": "5765:26:1"
                          }
                        ],
                        "id": 412,
                        "name": "FunctionCall",
                        "src": "5757:35:1"
                      }
                    ],
                    "id": 413,
                    "name": "ExpressionStatement",
                    "src": "5757:35:1"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 619,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 414,
                            "name": "Identifier",
                            "src": "5861:7:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "<=",
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 401,
                                  "type": "uint256",
                                  "value": "_value"
                                },
                                "id": 415,
                                "name": "Identifier",
                                "src": "5869:6:1"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "type": "uint256"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "type": "mapping(address => uint256)"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 124,
                                          "type": "mapping(address => mapping(address => uint256))",
                                          "value": "allowance"
                                        },
                                        "id": 416,
                                        "name": "Identifier",
                                        "src": "5879:9:1"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 399,
                                          "type": "address",
                                          "value": "_from"
                                        },
                                        "id": 417,
                                        "name": "Identifier",
                                        "src": "5889:5:1"
                                      }
                                    ],
                                    "id": 418,
                                    "name": "IndexAccess",
                                    "src": "5879:16:1"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "member_name": "sender",
                                      "referencedDeclaration": null,
                                      "type": "address"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 616,
                                          "type": "msg",
                                          "value": "msg"
                                        },
                                        "id": 419,
                                        "name": "Identifier",
                                        "src": "5896:3:1"
                                      }
                                    ],
                                    "id": 420,
                                    "name": "MemberAccess",
                                    "src": "5896:10:1"
                                  }
                                ],
                                "id": 421,
                                "name": "IndexAccess",
                                "src": "5879:28:1"
                              }
                            ],
                            "id": 422,
                            "name": "BinaryOperation",
                            "src": "5869:38:1"
                          }
                        ],
                        "id": 423,
                        "name": "FunctionCall",
                        "src": "5861:47:1"
                      }
                    ],
                    "id": 424,
                    "name": "ExpressionStatement",
                    "src": "5861:47:1"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "-=",
                          "type": "uint256"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": true,
                              "type": "uint256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 118,
                                  "type": "mapping(address => uint256)",
                                  "value": "balanceOf"
                                },
                                "id": 425,
                                "name": "Identifier",
                                "src": "5941:9:1"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 399,
                                  "type": "address",
                                  "value": "_from"
                                },
                                "id": 426,
                                "name": "Identifier",
                                "src": "5951:5:1"
                              }
                            ],
                            "id": 427,
                            "name": "IndexAccess",
                            "src": "5941:16:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 401,
                              "type": "uint256",
                              "value": "_value"
                            },
                            "id": 428,
                            "name": "Identifier",
                            "src": "5961:6:1"
                          }
                        ],
                        "id": 429,
                        "name": "Assignment",
                        "src": "5941:26:1"
                      }
                    ],
                    "id": 430,
                    "name": "ExpressionStatement",
                    "src": "5941:26:1"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "-=",
                          "type": "uint256"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": true,
                              "type": "uint256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "type": "mapping(address => uint256)"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 124,
                                      "type": "mapping(address => mapping(address => uint256))",
                                      "value": "allowance"
                                    },
                                    "id": 431,
                                    "name": "Identifier",
                                    "src": "6040:9:1"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 399,
                                      "type": "address",
                                      "value": "_from"
                                    },
                                    "id": 432,
                                    "name": "Identifier",
                                    "src": "6050:5:1"
                                  }
                                ],
                                "id": 435,
                                "name": "IndexAccess",
                                "src": "6040:16:1"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "sender",
                                  "referencedDeclaration": null,
                                  "type": "address"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 616,
                                      "type": "msg",
                                      "value": "msg"
                                    },
                                    "id": 433,
                                    "name": "Identifier",
                                    "src": "6057:3:1"
                                  }
                                ],
                                "id": 434,
                                "name": "MemberAccess",
                                "src": "6057:10:1"
                              }
                            ],
                            "id": 436,
                            "name": "IndexAccess",
                            "src": "6040:28:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 401,
                              "type": "uint256",
                              "value": "_value"
                            },
                            "id": 437,
                            "name": "Identifier",
                            "src": "6072:6:1"
                          }
                        ],
                        "id": 438,
                        "name": "Assignment",
                        "src": "6040:38:1"
                      }
                    ],
                    "id": 439,
                    "name": "ExpressionStatement",
                    "src": "6040:38:1"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "-=",
                          "type": "uint256"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 114,
                              "type": "uint256",
                              "value": "totalSupply"
                            },
                            "id": 440,
                            "name": "Identifier",
                            "src": "6141:11:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 401,
                              "type": "uint256",
                              "value": "_value"
                            },
                            "id": 441,
                            "name": "Identifier",
                            "src": "6156:6:1"
                          }
                        ],
                        "id": 442,
                        "name": "Assignment",
                        "src": "6141:21:1"
                      }
                    ],
                    "id": 443,
                    "name": "ExpressionStatement",
                    "src": "6141:21:1"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 138,
                              "type": "function (address,uint256)",
                              "value": "Burn"
                            },
                            "id": 444,
                            "name": "Identifier",
                            "src": "6224:4:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 399,
                              "type": "address",
                              "value": "_from"
                            },
                            "id": 445,
                            "name": "Identifier",
                            "src": "6229:5:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 401,
                              "type": "uint256",
                              "value": "_value"
                            },
                            "id": 446,
                            "name": "Identifier",
                            "src": "6236:6:1"
                          }
                        ],
                        "id": 447,
                        "name": "FunctionCall",
                        "src": "6224:19:1"
                      }
                    ],
                    "id": 448,
                    "name": "ExpressionStatement",
                    "src": "6224:19:1"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 405
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "hexvalue": "74727565",
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "subdenomination": null,
                          "token": "bool",
                          "type": "bool",
                          "value": "true"
                        },
                        "id": 449,
                        "name": "Literal",
                        "src": "6261:4:1"
                      }
                    ],
                    "id": 450,
                    "name": "Return",
                    "src": "6254:11:1"
                  }
                ],
                "id": 451,
                "name": "Block",
                "src": "5746:527:1"
              }
            ],
            "id": 452,
            "name": "FunctionDefinition",
            "src": "5667:606:1"
          }
        ],
        "id": 453,
        "name": "ContractDefinition",
        "src": "470:5806:1"
      },
      {
        "attributes": {
          "contractDependencies": [
            93,
            453
          ],
          "contractKind": "contract",
          "documentation": "***************************************",
          "fullyImplemented": true,
          "linearizedBaseContracts": [
            604,
            453,
            93
          ],
          "name": "DiagnosisProtocol",
          "scope": 605
        },
        "children": [
          {
            "attributes": {
              "arguments": [
                null
              ]
            },
            "children": [
              {
                "attributes": {
                  "contractScope": null,
                  "name": "owned",
                  "referencedDeclaration": 93,
                  "type": "contract owned"
                },
                "id": 454,
                "name": "UserDefinedTypeName",
                "src": "6450:5:1"
              }
            ],
            "id": 455,
            "name": "InheritanceSpecifier",
            "src": "6450:5:1"
          },
          {
            "attributes": {
              "arguments": [
                null
              ]
            },
            "children": [
              {
                "attributes": {
                  "contractScope": null,
                  "name": "TokenERC20",
                  "referencedDeclaration": 453,
                  "type": "contract TokenERC20"
                },
                "id": 456,
                "name": "UserDefinedTypeName",
                "src": "6457:10:1"
              }
            ],
            "id": 457,
            "name": "InheritanceSpecifier",
            "src": "6457:10:1"
          },
          {
            "attributes": {
              "constant": false,
              "name": "frozenAccount",
              "scope": 604,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "mapping(address => bool)",
              "value": null,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "type": "mapping(address => bool)"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "address",
                      "type": "address"
                    },
                    "id": 458,
                    "name": "ElementaryTypeName",
                    "src": "6486:7:1"
                  },
                  {
                    "attributes": {
                      "name": "bool",
                      "type": "bool"
                    },
                    "id": 459,
                    "name": "ElementaryTypeName",
                    "src": "6497:4:1"
                  }
                ],
                "id": 460,
                "name": "Mapping",
                "src": "6477:25:1"
              }
            ],
            "id": 461,
            "name": "VariableDeclaration",
            "src": "6477:46:1"
          },
          {
            "attributes": {
              "anonymous": false,
              "name": "FrozenFunds"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": false,
                      "name": "target",
                      "scope": 467,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 462,
                        "name": "ElementaryTypeName",
                        "src": "6634:7:1"
                      }
                    ],
                    "id": 463,
                    "name": "VariableDeclaration",
                    "src": "6634:14:1"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": false,
                      "name": "frozen",
                      "scope": 467,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bool",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bool",
                          "type": "bool"
                        },
                        "id": 464,
                        "name": "ElementaryTypeName",
                        "src": "6650:4:1"
                      }
                    ],
                    "id": 465,
                    "name": "VariableDeclaration",
                    "src": "6650:11:1"
                  }
                ],
                "id": 466,
                "name": "ParameterList",
                "src": "6633:29:1"
              }
            ],
            "id": 467,
            "name": "EventDefinition",
            "src": "6616:47:1"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": true,
              "name": "DiagnosisProtocol",
              "payable": false,
              "scope": 604,
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "initialSupply",
                      "scope": 482,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 468,
                        "name": "ElementaryTypeName",
                        "src": "6798:7:1"
                      }
                    ],
                    "id": 469,
                    "name": "VariableDeclaration",
                    "src": "6798:21:1"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "tokenName",
                      "scope": 482,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "string memory",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "string",
                          "type": "string storage pointer"
                        },
                        "id": 470,
                        "name": "ElementaryTypeName",
                        "src": "6830:6:1"
                      }
                    ],
                    "id": 471,
                    "name": "VariableDeclaration",
                    "src": "6830:16:1"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "tokenSymbol",
                      "scope": 482,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "string memory",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "string",
                          "type": "string storage pointer"
                        },
                        "id": 472,
                        "name": "ElementaryTypeName",
                        "src": "6857:6:1"
                      }
                    ],
                    "id": 473,
                    "name": "VariableDeclaration",
                    "src": "6857:18:1"
                  }
                ],
                "id": 474,
                "name": "ParameterList",
                "src": "6787:95:1"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 480,
                "name": "ParameterList",
                "src": "6940:0:1"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 453,
                      "type": "type(contract TokenERC20)",
                      "value": "TokenERC20"
                    },
                    "id": 475,
                    "name": "Identifier",
                    "src": "6883:10:1"
                  },
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 469,
                      "type": "uint256",
                      "value": "initialSupply"
                    },
                    "id": 476,
                    "name": "Identifier",
                    "src": "6894:13:1"
                  },
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 471,
                      "type": "string memory",
                      "value": "tokenName"
                    },
                    "id": 477,
                    "name": "Identifier",
                    "src": "6909:9:1"
                  },
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 473,
                      "type": "string memory",
                      "value": "tokenSymbol"
                    },
                    "id": 478,
                    "name": "Identifier",
                    "src": "6920:11:1"
                  }
                ],
                "id": 479,
                "name": "ModifierInvocation",
                "src": "6883:49:1"
              },
              {
                "attributes": {
                  "statements": [
                    null
                  ]
                },
                "children": [],
                "id": 481,
                "name": "Block",
                "src": "6940:2:1"
              }
            ],
            "id": 482,
            "name": "FunctionDefinition",
            "src": "6761:181:1"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "_transfer",
              "payable": false,
              "scope": 604,
              "stateMutability": "nonpayable",
              "superFunction": 249,
              "visibility": "internal"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_from",
                      "scope": 550,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 483,
                        "name": "ElementaryTypeName",
                        "src": "7035:7:1"
                      }
                    ],
                    "id": 484,
                    "name": "VariableDeclaration",
                    "src": "7035:13:1"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_to",
                      "scope": 550,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 485,
                        "name": "ElementaryTypeName",
                        "src": "7050:7:1"
                      }
                    ],
                    "id": 486,
                    "name": "VariableDeclaration",
                    "src": "7050:11:1"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_value",
                      "scope": 550,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint",
                          "type": "uint256"
                        },
                        "id": 487,
                        "name": "ElementaryTypeName",
                        "src": "7063:4:1"
                      }
                    ],
                    "id": 488,
                    "name": "VariableDeclaration",
                    "src": "7063:11:1"
                  }
                ],
                "id": 489,
                "name": "ParameterList",
                "src": "7034:41:1"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 490,
                "name": "ParameterList",
                "src": "7085:0:1"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 619,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 491,
                            "name": "Identifier",
                            "src": "7096:7:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "!=",
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 486,
                                  "type": "address",
                                  "value": "_to"
                                },
                                "id": 492,
                                "name": "Identifier",
                                "src": "7105:3:1"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "hexvalue": "307830",
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "subdenomination": null,
                                  "token": "number",
                                  "type": "int_const 0",
                                  "value": "0x0"
                                },
                                "id": 493,
                                "name": "Literal",
                                "src": "7112:3:1"
                              }
                            ],
                            "id": 494,
                            "name": "BinaryOperation",
                            "src": "7105:10:1"
                          }
                        ],
                        "id": 495,
                        "name": "FunctionCall",
                        "src": "7096:20:1"
                      }
                    ],
                    "id": 496,
                    "name": "ExpressionStatement",
                    "src": "7096:20:1"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 619,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 497,
                            "name": "Identifier",
                            "src": "7212:7:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": ">=",
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "type": "uint256"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 118,
                                      "type": "mapping(address => uint256)",
                                      "value": "balanceOf"
                                    },
                                    "id": 498,
                                    "name": "Identifier",
                                    "src": "7221:9:1"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 484,
                                      "type": "address",
                                      "value": "_from"
                                    },
                                    "id": 499,
                                    "name": "Identifier",
                                    "src": "7231:5:1"
                                  }
                                ],
                                "id": 500,
                                "name": "IndexAccess",
                                "src": "7221:16:1"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 488,
                                  "type": "uint256",
                                  "value": "_value"
                                },
                                "id": 501,
                                "name": "Identifier",
                                "src": "7241:6:1"
                              }
                            ],
                            "id": 502,
                            "name": "BinaryOperation",
                            "src": "7221:26:1"
                          }
                        ],
                        "id": 503,
                        "name": "FunctionCall",
                        "src": "7212:36:1"
                      }
                    ],
                    "id": 504,
                    "name": "ExpressionStatement",
                    "src": "7212:36:1"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 619,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 505,
                            "name": "Identifier",
                            "src": "7307:7:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": ">",
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "commonType": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  },
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "operator": "+",
                                  "type": "uint256"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "type": "uint256"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 118,
                                          "type": "mapping(address => uint256)",
                                          "value": "balanceOf"
                                        },
                                        "id": 506,
                                        "name": "Identifier",
                                        "src": "7316:9:1"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 486,
                                          "type": "address",
                                          "value": "_to"
                                        },
                                        "id": 507,
                                        "name": "Identifier",
                                        "src": "7326:3:1"
                                      }
                                    ],
                                    "id": 508,
                                    "name": "IndexAccess",
                                    "src": "7316:14:1"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 488,
                                      "type": "uint256",
                                      "value": "_value"
                                    },
                                    "id": 509,
                                    "name": "Identifier",
                                    "src": "7333:6:1"
                                  }
                                ],
                                "id": 510,
                                "name": "BinaryOperation",
                                "src": "7316:23:1"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "type": "uint256"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 118,
                                      "type": "mapping(address => uint256)",
                                      "value": "balanceOf"
                                    },
                                    "id": 511,
                                    "name": "Identifier",
                                    "src": "7342:9:1"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 486,
                                      "type": "address",
                                      "value": "_to"
                                    },
                                    "id": 512,
                                    "name": "Identifier",
                                    "src": "7352:3:1"
                                  }
                                ],
                                "id": 513,
                                "name": "IndexAccess",
                                "src": "7342:14:1"
                              }
                            ],
                            "id": 514,
                            "name": "BinaryOperation",
                            "src": "7316:40:1"
                          }
                        ],
                        "id": 515,
                        "name": "FunctionCall",
                        "src": "7307:50:1"
                      }
                    ],
                    "id": 516,
                    "name": "ExpressionStatement",
                    "src": "7307:50:1"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 619,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 517,
                            "name": "Identifier",
                            "src": "7391:7:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "!",
                              "prefix": true,
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "type": "bool"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 461,
                                      "type": "mapping(address => bool)",
                                      "value": "frozenAccount"
                                    },
                                    "id": 518,
                                    "name": "Identifier",
                                    "src": "7400:13:1"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 484,
                                      "type": "address",
                                      "value": "_from"
                                    },
                                    "id": 519,
                                    "name": "Identifier",
                                    "src": "7414:5:1"
                                  }
                                ],
                                "id": 520,
                                "name": "IndexAccess",
                                "src": "7400:20:1"
                              }
                            ],
                            "id": 521,
                            "name": "UnaryOperation",
                            "src": "7399:21:1"
                          }
                        ],
                        "id": 522,
                        "name": "FunctionCall",
                        "src": "7391:30:1"
                      }
                    ],
                    "id": 523,
                    "name": "ExpressionStatement",
                    "src": "7391:30:1"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 619,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 524,
                            "name": "Identifier",
                            "src": "7481:7:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "!",
                              "prefix": true,
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "type": "bool"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 461,
                                      "type": "mapping(address => bool)",
                                      "value": "frozenAccount"
                                    },
                                    "id": 525,
                                    "name": "Identifier",
                                    "src": "7490:13:1"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 486,
                                      "type": "address",
                                      "value": "_to"
                                    },
                                    "id": 526,
                                    "name": "Identifier",
                                    "src": "7504:3:1"
                                  }
                                ],
                                "id": 527,
                                "name": "IndexAccess",
                                "src": "7490:18:1"
                              }
                            ],
                            "id": 528,
                            "name": "UnaryOperation",
                            "src": "7489:19:1"
                          }
                        ],
                        "id": 529,
                        "name": "FunctionCall",
                        "src": "7481:28:1"
                      }
                    ],
                    "id": 530,
                    "name": "ExpressionStatement",
                    "src": "7481:28:1"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "-=",
                          "type": "uint256"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": true,
                              "type": "uint256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 118,
                                  "type": "mapping(address => uint256)",
                                  "value": "balanceOf"
                                },
                                "id": 531,
                                "name": "Identifier",
                                "src": "7574:9:1"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 484,
                                  "type": "address",
                                  "value": "_from"
                                },
                                "id": 532,
                                "name": "Identifier",
                                "src": "7584:5:1"
                              }
                            ],
                            "id": 533,
                            "name": "IndexAccess",
                            "src": "7574:16:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 488,
                              "type": "uint256",
                              "value": "_value"
                            },
                            "id": 534,
                            "name": "Identifier",
                            "src": "7594:6:1"
                          }
                        ],
                        "id": 535,
                        "name": "Assignment",
                        "src": "7574:26:1"
                      }
                    ],
                    "id": 536,
                    "name": "ExpressionStatement",
                    "src": "7574:26:1"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "+=",
                          "type": "uint256"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": true,
                              "type": "uint256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 118,
                                  "type": "mapping(address => uint256)",
                                  "value": "balanceOf"
                                },
                                "id": 537,
                                "name": "Identifier",
                                "src": "7663:9:1"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 486,
                                  "type": "address",
                                  "value": "_to"
                                },
                                "id": 538,
                                "name": "Identifier",
                                "src": "7673:3:1"
                              }
                            ],
                            "id": 539,
                            "name": "IndexAccess",
                            "src": "7663:14:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 488,
                              "type": "uint256",
                              "value": "_value"
                            },
                            "id": 540,
                            "name": "Identifier",
                            "src": "7681:6:1"
                          }
                        ],
                        "id": 541,
                        "name": "Assignment",
                        "src": "7663:24:1"
                      }
                    ],
                    "id": 542,
                    "name": "ExpressionStatement",
                    "src": "7663:24:1"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 132,
                              "type": "function (address,address,uint256)",
                              "value": "Transfer"
                            },
                            "id": 543,
                            "name": "Identifier",
                            "src": "7757:8:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 484,
                              "type": "address",
                              "value": "_from"
                            },
                            "id": 544,
                            "name": "Identifier",
                            "src": "7766:5:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 486,
                              "type": "address",
                              "value": "_to"
                            },
                            "id": 545,
                            "name": "Identifier",
                            "src": "7773:3:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 488,
                              "type": "uint256",
                              "value": "_value"
                            },
                            "id": 546,
                            "name": "Identifier",
                            "src": "7778:6:1"
                          }
                        ],
                        "id": 547,
                        "name": "FunctionCall",
                        "src": "7757:28:1"
                      }
                    ],
                    "id": 548,
                    "name": "ExpressionStatement",
                    "src": "7757:28:1"
                  }
                ],
                "id": 549,
                "name": "Block",
                "src": "7085:708:1"
              }
            ],
            "id": 550,
            "name": "FunctionDefinition",
            "src": "7016:777:1"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "name": "mintToken",
              "payable": false,
              "scope": 604,
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "target",
                      "scope": 582,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 551,
                        "name": "ElementaryTypeName",
                        "src": "8009:7:1"
                      }
                    ],
                    "id": 552,
                    "name": "VariableDeclaration",
                    "src": "8009:14:1"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "mintedAmount",
                      "scope": 582,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 553,
                        "name": "ElementaryTypeName",
                        "src": "8025:7:1"
                      }
                    ],
                    "id": 554,
                    "name": "VariableDeclaration",
                    "src": "8025:20:1"
                  }
                ],
                "id": 555,
                "name": "ParameterList",
                "src": "8008:38:1"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 558,
                "name": "ParameterList",
                "src": "8064:0:1"
              },
              {
                "attributes": {
                  "arguments": [
                    null
                  ]
                },
                "children": [
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 80,
                      "type": "modifier ()",
                      "value": "onlyOwner"
                    },
                    "id": 556,
                    "name": "Identifier",
                    "src": "8047:9:1"
                  }
                ],
                "id": 557,
                "name": "ModifierInvocation",
                "src": "8047:9:1"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "+=",
                          "type": "uint256"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": true,
                              "type": "uint256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 118,
                                  "type": "mapping(address => uint256)",
                                  "value": "balanceOf"
                                },
                                "id": 559,
                                "name": "Identifier",
                                "src": "8075:9:1"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 552,
                                  "type": "address",
                                  "value": "target"
                                },
                                "id": 560,
                                "name": "Identifier",
                                "src": "8085:6:1"
                              }
                            ],
                            "id": 561,
                            "name": "IndexAccess",
                            "src": "8075:17:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 554,
                              "type": "uint256",
                              "value": "mintedAmount"
                            },
                            "id": 562,
                            "name": "Identifier",
                            "src": "8096:12:1"
                          }
                        ],
                        "id": 563,
                        "name": "Assignment",
                        "src": "8075:33:1"
                      }
                    ],
                    "id": 564,
                    "name": "ExpressionStatement",
                    "src": "8075:33:1"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "+=",
                          "type": "uint256"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 114,
                              "type": "uint256",
                              "value": "totalSupply"
                            },
                            "id": 565,
                            "name": "Identifier",
                            "src": "8119:11:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 554,
                              "type": "uint256",
                              "value": "mintedAmount"
                            },
                            "id": 566,
                            "name": "Identifier",
                            "src": "8134:12:1"
                          }
                        ],
                        "id": 567,
                        "name": "Assignment",
                        "src": "8119:27:1"
                      }
                    ],
                    "id": 568,
                    "name": "ExpressionStatement",
                    "src": "8119:27:1"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_rational_0_by_1",
                                  "typeString": "int_const 0"
                                },
                                {
                                  "typeIdentifier": "t_contract$_DiagnosisProtocol_$604",
                                  "typeString": "contract DiagnosisProtocol"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 132,
                              "type": "function (address,address,uint256)",
                              "value": "Transfer"
                            },
                            "id": 569,
                            "name": "Identifier",
                            "src": "8157:8:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "30",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "number",
                              "type": "int_const 0",
                              "value": "0"
                            },
                            "id": 570,
                            "name": "Literal",
                            "src": "8166:1:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 635,
                              "type": "contract DiagnosisProtocol",
                              "value": "this"
                            },
                            "id": 571,
                            "name": "Identifier",
                            "src": "8169:4:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 554,
                              "type": "uint256",
                              "value": "mintedAmount"
                            },
                            "id": 572,
                            "name": "Identifier",
                            "src": "8175:12:1"
                          }
                        ],
                        "id": 573,
                        "name": "FunctionCall",
                        "src": "8157:31:1"
                      }
                    ],
                    "id": 574,
                    "name": "ExpressionStatement",
                    "src": "8157:31:1"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_contract$_DiagnosisProtocol_$604",
                                  "typeString": "contract DiagnosisProtocol"
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 132,
                              "type": "function (address,address,uint256)",
                              "value": "Transfer"
                            },
                            "id": 575,
                            "name": "Identifier",
                            "src": "8199:8:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 635,
                              "type": "contract DiagnosisProtocol",
                              "value": "this"
                            },
                            "id": 576,
                            "name": "Identifier",
                            "src": "8208:4:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 552,
                              "type": "address",
                              "value": "target"
                            },
                            "id": 577,
                            "name": "Identifier",
                            "src": "8214:6:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 554,
                              "type": "uint256",
                              "value": "mintedAmount"
                            },
                            "id": 578,
                            "name": "Identifier",
                            "src": "8222:12:1"
                          }
                        ],
                        "id": 579,
                        "name": "FunctionCall",
                        "src": "8199:36:1"
                      }
                    ],
                    "id": 580,
                    "name": "ExpressionStatement",
                    "src": "8199:36:1"
                  }
                ],
                "id": 581,
                "name": "Block",
                "src": "8064:179:1"
              }
            ],
            "id": 582,
            "name": "FunctionDefinition",
            "src": "7990:253:1"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "name": "freezeAccount",
              "payable": false,
              "scope": 604,
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "target",
                      "scope": 603,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 583,
                        "name": "ElementaryTypeName",
                        "src": "8452:7:1"
                      }
                    ],
                    "id": 584,
                    "name": "VariableDeclaration",
                    "src": "8452:14:1"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "freeze",
                      "scope": 603,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bool",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bool",
                          "type": "bool"
                        },
                        "id": 585,
                        "name": "ElementaryTypeName",
                        "src": "8468:4:1"
                      }
                    ],
                    "id": 586,
                    "name": "VariableDeclaration",
                    "src": "8468:11:1"
                  }
                ],
                "id": 587,
                "name": "ParameterList",
                "src": "8451:29:1"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 590,
                "name": "ParameterList",
                "src": "8498:0:1"
              },
              {
                "attributes": {
                  "arguments": [
                    null
                  ]
                },
                "children": [
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 80,
                      "type": "modifier ()",
                      "value": "onlyOwner"
                    },
                    "id": 588,
                    "name": "Identifier",
                    "src": "8481:9:1"
                  }
                ],
                "id": 589,
                "name": "ModifierInvocation",
                "src": "8481:9:1"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "bool"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": true,
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 461,
                                  "type": "mapping(address => bool)",
                                  "value": "frozenAccount"
                                },
                                "id": 591,
                                "name": "Identifier",
                                "src": "8509:13:1"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 584,
                                  "type": "address",
                                  "value": "target"
                                },
                                "id": 592,
                                "name": "Identifier",
                                "src": "8523:6:1"
                              }
                            ],
                            "id": 593,
                            "name": "IndexAccess",
                            "src": "8509:21:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 586,
                              "type": "bool",
                              "value": "freeze"
                            },
                            "id": 594,
                            "name": "Identifier",
                            "src": "8533:6:1"
                          }
                        ],
                        "id": 595,
                        "name": "Assignment",
                        "src": "8509:30:1"
                      }
                    ],
                    "id": 596,
                    "name": "ExpressionStatement",
                    "src": "8509:30:1"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 467,
                              "type": "function (address,bool)",
                              "value": "FrozenFunds"
                            },
                            "id": 597,
                            "name": "Identifier",
                            "src": "8550:11:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 584,
                              "type": "address",
                              "value": "target"
                            },
                            "id": 598,
                            "name": "Identifier",
                            "src": "8562:6:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 586,
                              "type": "bool",
                              "value": "freeze"
                            },
                            "id": 599,
                            "name": "Identifier",
                            "src": "8570:6:1"
                          }
                        ],
                        "id": 600,
                        "name": "FunctionCall",
                        "src": "8550:27:1"
                      }
                    ],
                    "id": 601,
                    "name": "ExpressionStatement",
                    "src": "8550:27:1"
                  }
                ],
                "id": 602,
                "name": "Block",
                "src": "8498:87:1"
              }
            ],
            "id": 603,
            "name": "FunctionDefinition",
            "src": "8429:156:1"
          }
        ],
        "id": 604,
        "name": "ContractDefinition",
        "src": "6420:2170:1"
      }
    ],
    "id": 605,
    "name": "SourceUnit",
    "src": "2:8588:1"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.19+commit.c4cbbb05.Emscripten.clang"
  },
  "networks": {
    "5777": {
      "events": {},
      "links": {},
      "address": "0x51fc52fd0b30fa0319d97893defe0201fed39c4c"
    }
  },
  "schemaVersion": "1.0.1",
  "updatedAt": "2018-07-06T01:38:31.612Z"
}]
let dxpAddress='0x51fc52fd0b30fa0319d97893defe0201fed39c4c';
web3.eth.defaultAccount = web3.eth.accounts[0]


const dxpContract=web3.eth.contract(dxpABI).at(dxpAddress);
export {dxpContract};