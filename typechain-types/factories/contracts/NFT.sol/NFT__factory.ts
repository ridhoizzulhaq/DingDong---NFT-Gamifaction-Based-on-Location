/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type { NFT, NFTInterface } from "../../../contracts/NFT.sol/NFT";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "systemContractAddress",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "CallerNotOwnerNotApproved",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    name: "OnlySystemContract",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "bytes",
            name: "origin",
            type: "bytes",
          },
          {
            internalType: "address",
            name: "sender",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "chainID",
            type: "uint256",
          },
        ],
        internalType: "struct zContext",
        name: "context",
        type: "tuple",
      },
      {
        internalType: "address",
        name: "zrc20",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "message",
        type: "bytes",
      },
    ],
    name: "onCrossChainCall",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "systemContract",
    outputs: [
      {
        internalType: "contract SystemContract",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "tokenAmounts",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "tokenChains",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162002e1638038062002e168339818101604052810190620000379190620001ee565b6040518060400160405280600581526020017f4d794e46540000000000000000000000000000000000000000000000000000008152506040518060400160405280600481526020017f4d4e4654000000000000000000000000000000000000000000000000000000008152508160009080519060200190620000bb92919062000127565b508060019080519060200190620000d492919062000127565b50505080600660006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600060098190555050620002d8565b828054620001359062000254565b90600052602060002090601f016020900481019282620001595760008555620001a5565b82601f106200017457805160ff1916838001178555620001a5565b82800160010185558215620001a5579182015b82811115620001a457825182559160200191906001019062000187565b5b509050620001b49190620001b8565b5090565b5b80821115620001d3576000816000905550600101620001b9565b5090565b600081519050620001e881620002be565b92915050565b600060208284031215620002075762000206620002b9565b5b60006200021784828501620001d7565b91505092915050565b60006200022d8262000234565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600060028204905060018216806200026d57607f821691505b602082108114156200028457620002836200028a565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600080fd5b620002c98162000220565b8114620002d557600080fd5b50565b612b2e80620002e86000396000f3fe608060405234801561001057600080fd5b506004361061010b5760003560e01c806370a08231116100a2578063b88d4fde11610071578063b88d4fde146102dc578063bb88b769146102f8578063c87b56dd14610316578063de43156e14610346578063e985e9c5146103625761010b565b806370a082311461024257806395d89b41146102725780639ad280c014610290578063a22cb465146102c05761010b565b80630ba111c2116100de5780630ba111c2146101aa57806323b872dd146101da57806342842e0e146101f65780636352211e146102125761010b565b806301ffc9a71461011057806306fdde0314610140578063081812fc1461015e578063095ea7b31461018e575b600080fd5b61012a60048036038101906101259190611d6f565b610392565b60405161013791906121a8565b60405180910390f35b610148610474565b60405161015591906121de565b60405180910390f35b61017860048036038101906101739190611e6d565b610506565b6040516101859190612141565b60405180910390f35b6101a860048036038101906101a39190611d2f565b61054c565b005b6101c460048036038101906101bf9190611e6d565b610664565b6040516101d19190612380565b60405180910390f35b6101f460048036038101906101ef9190611c19565b61067c565b005b610210600480360381019061020b9190611c19565b6106dc565b005b61022c60048036038101906102279190611e6d565b6106fc565b6040516102399190612141565b60405180910390f35b61025c60048036038101906102579190611b7f565b610783565b6040516102699190612380565b60405180910390f35b61027a61083b565b60405161028791906121de565b60405180910390f35b6102aa60048036038101906102a59190611e6d565b6108cd565b6040516102b79190612380565b60405180910390f35b6102da60048036038101906102d59190611cef565b6108e5565b005b6102f660048036038101906102f19190611c6c565b6108fb565b005b61030061095d565b60405161030d91906121c3565b60405180910390f35b610330600480360381019061032b9190611e6d565b610983565b60405161033d91906121de565b60405180910390f35b610360600480360381019061035b9190611dc9565b6109eb565b005b61037c60048036038101906103779190611bd9565b610ac9565b60405161038991906121a8565b60405180910390f35b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061045d57507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b8061046d575061046c82610b5d565b5b9050919050565b606060008054610483906125c3565b80601f01602080910402602001604051908101604052809291908181526020018280546104af906125c3565b80156104fc5780601f106104d1576101008083540402835291602001916104fc565b820191906000526020600020905b8154815290600101906020018083116104df57829003601f168201915b5050505050905090565b600061051182610bc7565b6004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b6000610557826106fc565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156105c8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105bf90612340565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff166105e7610c12565b73ffffffffffffffffffffffffffffffffffffffff161480610616575061061581610610610c12565b610ac9565b5b610655576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161064c90612360565b60405180910390fd5b61065f8383610c1a565b505050565b60086020528060005260406000206000915090505481565b61068d610687610c12565b82610cd3565b6106cc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106c390612200565b60405180910390fd5b6106d7838383610d68565b505050565b6106f7838383604051806020016040528060008152506108fb565b505050565b60008061070883611062565b9050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141561077a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161077190612320565b60405180910390fd5b80915050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156107f4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107eb906122e0565b60405180910390fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60606001805461084a906125c3565b80601f0160208091040260200160405190810160405280929190818152602001828054610876906125c3565b80156108c35780601f10610898576101008083540402835291602001916108c3565b820191906000526020600020905b8154815290600101906020018083116108a657829003601f168201915b5050505050905090565b60076020528060005260406000206000915090505481565b6108f76108f0610c12565b838361109f565b5050565b61090c610906610c12565b83610cd3565b61094b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161094290612200565b60405180910390fd5b6109578484848461120c565b50505050565b600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b606061098e82610bc7565b6000610998611268565b905060008151116109b857604051806020016040528060008152506109e3565b806109c28461127f565b6040516020016109d392919061211d565b6040516020818303038152906040525b915050919050565b600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610a7c576040517f14c6658d000000000000000000000000000000000000000000000000000000008152600401610a7390612240565b60405180910390fd5b600061479c87604001351415610a9f57610a9884846000611357565b9050610ab1565b8383810190610aae9190611bac565b90505b610ac0818860400135876113cc565b50505050505050565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b610bd08161142b565b610c0f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c0690612320565b60405180910390fd5b50565b600033905090565b816004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16610c8d836106fc565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b600080610cdf836106fc565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161480610d215750610d208185610ac9565b5b80610d5f57508373ffffffffffffffffffffffffffffffffffffffff16610d4784610506565b73ffffffffffffffffffffffffffffffffffffffff16145b91505092915050565b8273ffffffffffffffffffffffffffffffffffffffff16610d88826106fc565b73ffffffffffffffffffffffffffffffffffffffff1614610dde576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610dd590612260565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610e4e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e45906122a0565b60405180910390fd5b610e5b838383600161146c565b8273ffffffffffffffffffffffffffffffffffffffff16610e7b826106fc565b73ffffffffffffffffffffffffffffffffffffffff1614610ed1576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ec890612260565b60405180910390fd5b6004600082815260200190815260200160002060006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556001600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825403925050819055506001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540192505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a461105d8383836001611472565b505050565b60006002600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141561110e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611105906122c0565b60405180910390fd5b80600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31836040516111ff91906121a8565b60405180910390a3505050565b611217848484610d68565b61122384848484611478565b611262576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161125990612220565b60405180910390fd5b50505050565b606060405180602001604052806000815250905090565b60606000600161128e8461160f565b01905060008167ffffffffffffffff8111156112ad576112ac6126fc565b5b6040519080825280601f01601f1916602001820160405280156112df5781602001600182028036833780820191505090505b509050600082602001820190505b60011561134c578080600190039150507f3031323334353637383961626364656600000000000000000000000000000000600a86061a8153600a85816113365761133561269e565b5b04945060008514156113475761134c565b6112ed565b819350505050919050565b6000808484849060148661136b919061246f565b9261137893929190612434565b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050905060148101519150509392505050565b600060095490506113dd8482611762565b8260086000838152602001908152602001600020819055508160076000838152602001908152602001600020819055506009600081548092919061142090612626565b919050555050505050565b60008073ffffffffffffffffffffffffffffffffffffffff1661144d83611062565b73ffffffffffffffffffffffffffffffffffffffff1614159050919050565b50505050565b50505050565b60006114998473ffffffffffffffffffffffffffffffffffffffff16611780565b15611602578373ffffffffffffffffffffffffffffffffffffffff1663150b7a026114c2610c12565b8786866040518563ffffffff1660e01b81526004016114e4949392919061215c565b602060405180830381600087803b1580156114fe57600080fd5b505af192505050801561152f57506040513d601f19601f8201168201806040525081019061152c9190611d9c565b60015b6115b2573d806000811461155f576040519150601f19603f3d011682016040523d82523d6000602084013e611564565b606091505b506000815114156115aa576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016115a190612220565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614915050611607565b600190505b949350505050565b600080600090507a184f03e93ff9f4daa797ed6e38ed64bf6a1f010000000000000000831061166d577a184f03e93ff9f4daa797ed6e38ed64bf6a1f01000000000000000083816116635761166261269e565b5b0492506040810190505b6d04ee2d6d415b85acef810000000083106116aa576d04ee2d6d415b85acef810000000083816116a05761169f61269e565b5b0492506020810190505b662386f26fc1000083106116d957662386f26fc1000083816116cf576116ce61269e565b5b0492506010810190505b6305f5e1008310611702576305f5e10083816116f8576116f761269e565b5b0492506008810190505b612710831061172757612710838161171d5761171c61269e565b5b0492506004810190505b6064831061174a57606483816117405761173f61269e565b5b0492506002810190505b600a8310611759576001810190505b80915050919050565b61177c8282604051806020016040528060008152506117a3565b5050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b6117ad83836117fe565b6117ba6000848484611478565b6117f9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016117f090612220565b60405180910390fd5b505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141561186e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161186590612300565b60405180910390fd5b6118778161142b565b156118b7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016118ae90612280565b60405180910390fd5b6118c560008383600161146c565b6118ce8161142b565b1561190e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161190590612280565b60405180910390fd5b6001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540192505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4611a18600083836001611472565b5050565b6000611a2f611a2a846123c0565b61239b565b905082815260208101848484011115611a4b57611a4a612749565b5b611a56848285612581565b509392505050565b600081359050611a6d81612a85565b92915050565b600081359050611a8281612a9c565b92915050565b600081359050611a9781612ab3565b92915050565b600081359050611aac81612aca565b92915050565b600081519050611ac181612aca565b92915050565b60008083601f840112611add57611adc612730565b5b8235905067ffffffffffffffff811115611afa57611af961272b565b5b602083019150836001820283011115611b1657611b15612744565b5b9250929050565b600082601f830112611b3257611b31612730565b5b8135611b42848260208601611a1c565b91505092915050565b600060608284031215611b6157611b60612735565b5b81905092915050565b600081359050611b7981612ae1565b92915050565b600060208284031215611b9557611b94612753565b5b6000611ba384828501611a5e565b91505092915050565b600060208284031215611bc257611bc1612753565b5b6000611bd084828501611a73565b91505092915050565b60008060408385031215611bf057611bef612753565b5b6000611bfe85828601611a5e565b9250506020611c0f85828601611a5e565b9150509250929050565b600080600060608486031215611c3257611c31612753565b5b6000611c4086828701611a5e565b9350506020611c5186828701611a5e565b9250506040611c6286828701611b6a565b9150509250925092565b60008060008060808587031215611c8657611c85612753565b5b6000611c9487828801611a5e565b9450506020611ca587828801611a5e565b9350506040611cb687828801611b6a565b925050606085013567ffffffffffffffff811115611cd757611cd661274e565b5b611ce387828801611b1d565b91505092959194509250565b60008060408385031215611d0657611d05612753565b5b6000611d1485828601611a5e565b9250506020611d2585828601611a88565b9150509250929050565b60008060408385031215611d4657611d45612753565b5b6000611d5485828601611a5e565b9250506020611d6585828601611b6a565b9150509250929050565b600060208284031215611d8557611d84612753565b5b6000611d9384828501611a9d565b91505092915050565b600060208284031215611db257611db1612753565b5b6000611dc084828501611ab2565b91505092915050565b600080600080600060808688031215611de557611de4612753565b5b600086013567ffffffffffffffff811115611e0357611e0261274e565b5b611e0f88828901611b4b565b9550506020611e2088828901611a5e565b9450506040611e3188828901611b6a565b935050606086013567ffffffffffffffff811115611e5257611e5161274e565b5b611e5e88828901611ac7565b92509250509295509295909350565b600060208284031215611e8357611e82612753565b5b6000611e9184828501611b6a565b91505092915050565b611ea3816124c5565b82525050565b611eb2816124e9565b82525050565b6000611ec3826123f1565b611ecd8185612407565b9350611edd818560208601612590565b611ee681612758565b840191505092915050565b611efa8161254b565b82525050565b6000611f0b826123fc565b611f158185612418565b9350611f25818560208601612590565b611f2e81612758565b840191505092915050565b6000611f44826123fc565b611f4e8185612429565b9350611f5e818560208601612590565b80840191505092915050565b6000611f77602d83612418565b9150611f8282612769565b604082019050919050565b6000611f9a603283612418565b9150611fa5826127b8565b604082019050919050565b6000611fbd602b83612418565b9150611fc882612807565b604082019050919050565b6000611fe0602583612418565b9150611feb82612856565b604082019050919050565b6000612003601c83612418565b915061200e826128a5565b602082019050919050565b6000612026602483612418565b9150612031826128ce565b604082019050919050565b6000612049601983612418565b91506120548261291d565b602082019050919050565b600061206c602983612418565b915061207782612946565b604082019050919050565b600061208f602083612418565b915061209a82612995565b602082019050919050565b60006120b2601883612418565b91506120bd826129be565b602082019050919050565b60006120d5602183612418565b91506120e0826129e7565b604082019050919050565b60006120f8603d83612418565b915061210382612a36565b604082019050919050565b61211781612541565b82525050565b60006121298285611f39565b91506121358284611f39565b91508190509392505050565b60006020820190506121566000830184611e9a565b92915050565b60006080820190506121716000830187611e9a565b61217e6020830186611e9a565b61218b604083018561210e565b818103606083015261219d8184611eb8565b905095945050505050565b60006020820190506121bd6000830184611ea9565b92915050565b60006020820190506121d86000830184611ef1565b92915050565b600060208201905081810360008301526121f88184611f00565b905092915050565b6000602082019050818103600083015261221981611f6a565b9050919050565b6000602082019050818103600083015261223981611f8d565b9050919050565b6000602082019050818103600083015261225981611fb0565b9050919050565b6000602082019050818103600083015261227981611fd3565b9050919050565b6000602082019050818103600083015261229981611ff6565b9050919050565b600060208201905081810360008301526122b981612019565b9050919050565b600060208201905081810360008301526122d98161203c565b9050919050565b600060208201905081810360008301526122f98161205f565b9050919050565b6000602082019050818103600083015261231981612082565b9050919050565b60006020820190508181036000830152612339816120a5565b9050919050565b60006020820190508181036000830152612359816120c8565b9050919050565b60006020820190508181036000830152612379816120eb565b9050919050565b6000602082019050612395600083018461210e565b92915050565b60006123a56123b6565b90506123b182826125f5565b919050565b6000604051905090565b600067ffffffffffffffff8211156123db576123da6126fc565b5b6123e482612758565b9050602081019050919050565b600081519050919050565b600081519050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600081905092915050565b600080858511156124485761244761273f565b5b838611156124595761245861273a565b5b6001850283019150848603905094509492505050565b600061247a82612541565b915061248583612541565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156124ba576124b961266f565b5b828201905092915050565b60006124d082612521565b9050919050565b60006124e282612521565b9050919050565b60008115159050919050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60006125568261255d565b9050919050565b60006125688261256f565b9050919050565b600061257a82612521565b9050919050565b82818337600083830152505050565b60005b838110156125ae578082015181840152602081019050612593565b838111156125bd576000848401525b50505050565b600060028204905060018216806125db57607f821691505b602082108114156125ef576125ee6126cd565b5b50919050565b6125fe82612758565b810181811067ffffffffffffffff8211171561261d5761261c6126fc565b5b80604052505050565b600061263182612541565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8214156126645761266361266f565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600080fd5b600080fd5b600080fd5b600080fd5b600080fd5b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560008201527f72206f7220617070726f76656400000000000000000000000000000000000000602082015250565b7f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560008201527f63656976657220696d706c656d656e7465720000000000000000000000000000602082015250565b7f4f6e6c792073797374656d20636f6e74726163742063616e2063616c6c20746860008201527f69732066756e6374696f6e000000000000000000000000000000000000000000602082015250565b7f4552433732313a207472616e736665722066726f6d20696e636f72726563742060008201527f6f776e6572000000000000000000000000000000000000000000000000000000602082015250565b7f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000600082015250565b7f4552433732313a207472616e7366657220746f20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b7f4552433732313a20617070726f766520746f2063616c6c657200000000000000600082015250565b7f4552433732313a2061646472657373207a65726f206973206e6f74206120766160008201527f6c6964206f776e65720000000000000000000000000000000000000000000000602082015250565b7f4552433732313a206d696e7420746f20746865207a65726f2061646472657373600082015250565b7f4552433732313a20696e76616c696420746f6b656e2049440000000000000000600082015250565b7f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560008201527f7200000000000000000000000000000000000000000000000000000000000000602082015250565b7f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60008201527f6b656e206f776e6572206f7220617070726f76656420666f7220616c6c000000602082015250565b612a8e816124c5565b8114612a9957600080fd5b50565b612aa5816124d7565b8114612ab057600080fd5b50565b612abc816124e9565b8114612ac757600080fd5b50565b612ad3816124f5565b8114612ade57600080fd5b50565b612aea81612541565b8114612af557600080fd5b5056fea264697066735822122060507dbb1dd20d2a5f893f4dafdfba943cd8ff83421afc0545ec91f0685065b864736f6c63430008070033";

type NFTConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: NFTConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class NFT__factory extends ContractFactory {
  constructor(...args: NFTConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    systemContractAddress: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<NFT> {
    return super.deploy(systemContractAddress, overrides || {}) as Promise<NFT>;
  }
  override getDeployTransaction(
    systemContractAddress: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(systemContractAddress, overrides || {});
  }
  override attach(address: string): NFT {
    return super.attach(address) as NFT;
  }
  override connect(signer: Signer): NFT__factory {
    return super.connect(signer) as NFT__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): NFTInterface {
    return new utils.Interface(_abi) as NFTInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): NFT {
    return new Contract(address, _abi, signerOrProvider) as NFT;
  }
}