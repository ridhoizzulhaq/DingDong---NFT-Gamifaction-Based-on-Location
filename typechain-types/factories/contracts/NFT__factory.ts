/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { NFT, NFTInterface } from "../../contracts/NFT";

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
      {
        internalType: "bytes",
        name: "recipient",
        type: "bytes",
      },
    ],
    name: "burnNFT",
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
  "0x60806040523480156200001157600080fd5b506040516200344f3803806200344f8339818101604052810190620000379190620001ee565b6040518060400160405280600581526020017f4d794e46540000000000000000000000000000000000000000000000000000008152506040518060400160405280600481526020017f4d4e4654000000000000000000000000000000000000000000000000000000008152508160009080519060200190620000bb92919062000127565b508060019080519060200190620000d492919062000127565b50505080600660006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600060098190555050620002d8565b828054620001359062000254565b90600052602060002090601f016020900481019282620001595760008555620001a5565b82601f106200017457805160ff1916838001178555620001a5565b82800160010185558215620001a5579182015b82811115620001a457825182559160200191906001019062000187565b5b509050620001b49190620001b8565b5090565b5b80821115620001d3576000816000905550600101620001b9565b5090565b600081519050620001e881620002be565b92915050565b600060208284031215620002075762000206620002b9565b5b60006200021784828501620001d7565b91505092915050565b60006200022d8262000234565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600060028204905060018216806200026d57607f821691505b602082108114156200028457620002836200028a565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600080fd5b620002c98162000220565b8114620002d557600080fd5b50565b61316780620002e86000396000f3fe608060405234801561001057600080fd5b50600436106101165760003560e01c806395d89b41116100a2578063bb88b76911610071578063bb88b76914610303578063c87b56dd14610321578063d6b40e2714610351578063de43156e1461036d578063e985e9c51461038957610116565b806395d89b411461027d5780639ad280c01461029b578063a22cb465146102cb578063b88d4fde146102e757610116565b80630ba111c2116100e95780630ba111c2146101b557806323b872dd146101e557806342842e0e146102015780636352211e1461021d57806370a082311461024d57610116565b806301ffc9a71461011b57806306fdde031461014b578063081812fc14610169578063095ea7b314610199575b600080fd5b610135600480360381019061013091906122bf565b6103b9565b604051610142919061277d565b60405180910390f35b61015361049b565b60405161016091906127e3565b60405180910390f35b610183600480360381019061017e91906123bd565b61052d565b60405161019091906126ed565b60405180910390f35b6101b360048036038101906101ae9190612212565b610573565b005b6101cf60048036038101906101ca91906123bd565b61068b565b6040516101dc9190612985565b60405180910390f35b6101ff60048036038101906101fa91906120fc565b6106a3565b005b61021b600480360381019061021691906120fc565b610703565b005b610237600480360381019061023291906123bd565b610723565b60405161024491906126ed565b60405180910390f35b61026760048036038101906102629190612035565b6107aa565b6040516102749190612985565b60405180910390f35b610285610862565b60405161029291906127e3565b60405180910390f35b6102b560048036038101906102b091906123bd565b6108f4565b6040516102c29190612985565b60405180910390f35b6102e560048036038101906102e091906121d2565b61090c565b005b61030160048036038101906102fc919061214f565b610922565b005b61030b610984565b60405161031891906127c8565b60405180910390f35b61033b600480360381019061033691906123bd565b6109aa565b60405161034891906127e3565b60405180910390f35b61036b600480360381019061036691906123ea565b610a12565b005b61038760048036038101906103829190612319565b610d14565b005b6103a3600480360381019061039e91906120bc565b610df2565b6040516103b0919061277d565b60405180910390f35b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061048457507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b80610494575061049382610e86565b5b9050919050565b6060600080546104aa90612bfc565b80601f01602080910402602001604051908101604052809291908181526020018280546104d690612bfc565b80156105235780601f106104f857610100808354040283529160200191610523565b820191906000526020600020905b81548152906001019060200180831161050657829003601f168201915b5050505050905090565b600061053882610ef0565b6004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b600061057e82610723565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156105ef576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105e690612945565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff1661060e610f3b565b73ffffffffffffffffffffffffffffffffffffffff16148061063d575061063c81610637610f3b565b610df2565b5b61067c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161067390612965565b60405180910390fd5b6106868383610f43565b505050565b60086020528060005260406000206000915090505481565b6106b46106ae610f3b565b82610ffc565b6106f3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106ea90612805565b60405180910390fd5b6106fe838383611091565b505050565b61071e83838360405180602001604052806000815250610922565b505050565b60008061072f8361138b565b9050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156107a1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161079890612925565b60405180910390fd5b80915050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141561081b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610812906128e5565b60405180910390fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60606001805461087190612bfc565b80601f016020809104026020016040519081016040528092919081815260200182805461089d90612bfc565b80156108ea5780601f106108bf576101008083540402835291602001916108ea565b820191906000526020600020905b8154815290600101906020018083116108cd57829003601f168201915b5050505050905090565b60076020528060005260406000206000915090505481565b61091e610917610f3b565b83836113c8565b5050565b61093361092d610f3b565b83610ffc565b610972576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161096990612805565b60405180910390fd5b61097e84848484611535565b50505050565b600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60606109b582610ef0565b60006109bf611591565b905060008151116109df5760405180602001604052806000815250610a0a565b806109e9846115a8565b6040516020016109fa9291906126c9565b6040516020818303038152906040525b915050919050565b610a23610a1d610f3b565b83610ffc565b610a59576040517fcdf9253f00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16630be1554760086000868152602001908152602001600020546040518263ffffffff1660e01b8152600401610ac99190612985565b60206040518083038186803b158015610ae157600080fd5b505afa158015610af5573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b199190612062565b905060008173ffffffffffffffffffffffffffffffffffffffff1663d9eeebed6040518163ffffffff1660e01b8152600401604080518083038186803b158015610b6257600080fd5b505afa158015610b76573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b9a9190612252565b9150508173ffffffffffffffffffffffffffffffffffffffff1663095ea7b383836040518363ffffffff1660e01b8152600401610bd8929190612754565b602060405180830381600087803b158015610bf257600080fd5b505af1158015610c06573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c2a9190612292565b508173ffffffffffffffffffffffffffffffffffffffff1663c701262684836007600089815260200190815260200160002054610c679190612aca565b6040518363ffffffff1660e01b8152600401610c84929190612798565b602060405180830381600087803b158015610c9e57600080fd5b505af1158015610cb2573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610cd69190612292565b50610ce084611680565b6007600085815260200190815260200160002060009055600860008581526020019081526020016000206000905550505050565b600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610da5576040517f14c6658d000000000000000000000000000000000000000000000000000000008152600401610d9c90612845565b60405180910390fd5b600061479c87604001351415610dc857610dc1848460006117ce565b9050610dda565b8383810190610dd7919061208f565b90505b610de981886040013587611843565b50505050505050565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b610ef9816118a2565b610f38576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f2f90612925565b60405180910390fd5b50565b600033905090565b816004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16610fb683610723565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b60008061100883610723565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16148061104a57506110498185610df2565b5b8061108857508373ffffffffffffffffffffffffffffffffffffffff166110708461052d565b73ffffffffffffffffffffffffffffffffffffffff16145b91505092915050565b8273ffffffffffffffffffffffffffffffffffffffff166110b182610723565b73ffffffffffffffffffffffffffffffffffffffff1614611107576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110fe90612865565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611177576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161116e906128a5565b60405180910390fd5b61118483838360016118e3565b8273ffffffffffffffffffffffffffffffffffffffff166111a482610723565b73ffffffffffffffffffffffffffffffffffffffff16146111fa576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111f190612865565b60405180910390fd5b6004600082815260200190815260200160002060006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556001600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825403925050819055506001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540192505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a461138683838360016118e9565b505050565b60006002600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415611437576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161142e906128c5565b60405180910390fd5b80600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3183604051611528919061277d565b60405180910390a3505050565b611540848484611091565b61154c848484846118ef565b61158b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161158290612825565b60405180910390fd5b50505050565b606060405180602001604052806000815250905090565b6060600060016115b784611a86565b01905060008167ffffffffffffffff8111156115d6576115d5612d35565b5b6040519080825280601f01601f1916602001820160405280156116085781602001600182028036833780820191505090505b509050600082602001820190505b600115611675578080600190039150507f3031323334353637383961626364656600000000000000000000000000000000600a86061a8153600a858161165f5761165e612cd7565b5b049450600085141561167057611675565b611616565b819350505050919050565b600061168b82610723565b905061169b8160008460016118e3565b6116a482610723565b90506004600083815260200190815260200160002060006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556001600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825403925050819055506002600083815260200190815260200160002060006101000a81549073ffffffffffffffffffffffffffffffffffffffff021916905581600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a46117ca8160008460016118e9565b5050565b600080848484906014866117e29190612a74565b926117ef93929190612a39565b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050905060148101519150509392505050565b600060095490506118548482611bd9565b8260086000838152602001908152602001600020819055508160076000838152602001908152602001600020819055506009600081548092919061189790612c5f565b919050555050505050565b60008073ffffffffffffffffffffffffffffffffffffffff166118c48361138b565b73ffffffffffffffffffffffffffffffffffffffff1614159050919050565b50505050565b50505050565b60006119108473ffffffffffffffffffffffffffffffffffffffff16611bf7565b15611a79578373ffffffffffffffffffffffffffffffffffffffff1663150b7a02611939610f3b565b8786866040518563ffffffff1660e01b815260040161195b9493929190612708565b602060405180830381600087803b15801561197557600080fd5b505af19250505080156119a657506040513d601f19601f820116820180604052508101906119a391906122ec565b60015b611a29573d80600081146119d6576040519150601f19603f3d011682016040523d82523d6000602084013e6119db565b606091505b50600081511415611a21576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611a1890612825565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614915050611a7e565b600190505b949350505050565b600080600090507a184f03e93ff9f4daa797ed6e38ed64bf6a1f0100000000000000008310611ae4577a184f03e93ff9f4daa797ed6e38ed64bf6a1f0100000000000000008381611ada57611ad9612cd7565b5b0492506040810190505b6d04ee2d6d415b85acef81000000008310611b21576d04ee2d6d415b85acef81000000008381611b1757611b16612cd7565b5b0492506020810190505b662386f26fc100008310611b5057662386f26fc100008381611b4657611b45612cd7565b5b0492506010810190505b6305f5e1008310611b79576305f5e1008381611b6f57611b6e612cd7565b5b0492506008810190505b6127108310611b9e576127108381611b9457611b93612cd7565b5b0492506004810190505b60648310611bc15760648381611bb757611bb6612cd7565b5b0492506002810190505b600a8310611bd0576001810190505b80915050919050565b611bf3828260405180602001604052806000815250611c1a565b5050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b611c248383611c75565b611c3160008484846118ef565b611c70576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611c6790612825565b60405180910390fd5b505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611ce5576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611cdc90612905565b60405180910390fd5b611cee816118a2565b15611d2e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611d2590612885565b60405180910390fd5b611d3c6000838360016118e3565b611d45816118a2565b15611d85576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611d7c90612885565b60405180910390fd5b6001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540192505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4611e8f6000838360016118e9565b5050565b6000611ea6611ea1846129c5565b6129a0565b905082815260208101848484011115611ec257611ec1612d82565b5b611ecd848285612bba565b509392505050565b600081359050611ee4816130be565b92915050565b600081519050611ef9816130be565b92915050565b600081359050611f0e816130d5565b92915050565b600081359050611f23816130ec565b92915050565b600081519050611f38816130ec565b92915050565b600081359050611f4d81613103565b92915050565b600081519050611f6281613103565b92915050565b60008083601f840112611f7e57611f7d612d69565b5b8235905067ffffffffffffffff811115611f9b57611f9a612d64565b5b602083019150836001820283011115611fb757611fb6612d7d565b5b9250929050565b600082601f830112611fd357611fd2612d69565b5b8135611fe3848260208601611e93565b91505092915050565b60006060828403121561200257612001612d6e565b5b81905092915050565b60008135905061201a8161311a565b92915050565b60008151905061202f8161311a565b92915050565b60006020828403121561204b5761204a612d8c565b5b600061205984828501611ed5565b91505092915050565b60006020828403121561207857612077612d8c565b5b600061208684828501611eea565b91505092915050565b6000602082840312156120a5576120a4612d8c565b5b60006120b384828501611eff565b91505092915050565b600080604083850312156120d3576120d2612d8c565b5b60006120e185828601611ed5565b92505060206120f285828601611ed5565b9150509250929050565b60008060006060848603121561211557612114612d8c565b5b600061212386828701611ed5565b935050602061213486828701611ed5565b92505060406121458682870161200b565b9150509250925092565b6000806000806080858703121561216957612168612d8c565b5b600061217787828801611ed5565b945050602061218887828801611ed5565b93505060406121998782880161200b565b925050606085013567ffffffffffffffff8111156121ba576121b9612d87565b5b6121c687828801611fbe565b91505092959194509250565b600080604083850312156121e9576121e8612d8c565b5b60006121f785828601611ed5565b925050602061220885828601611f14565b9150509250929050565b6000806040838503121561222957612228612d8c565b5b600061223785828601611ed5565b92505060206122488582860161200b565b9150509250929050565b6000806040838503121561226957612268612d8c565b5b600061227785828601611eea565b925050602061228885828601612020565b9150509250929050565b6000602082840312156122a8576122a7612d8c565b5b60006122b684828501611f29565b91505092915050565b6000602082840312156122d5576122d4612d8c565b5b60006122e384828501611f3e565b91505092915050565b60006020828403121561230257612301612d8c565b5b600061231084828501611f53565b91505092915050565b60008060008060006080868803121561233557612334612d8c565b5b600086013567ffffffffffffffff81111561235357612352612d87565b5b61235f88828901611fec565b955050602061237088828901611ed5565b94505060406123818882890161200b565b935050606086013567ffffffffffffffff8111156123a2576123a1612d87565b5b6123ae88828901611f68565b92509250509295509295909350565b6000602082840312156123d3576123d2612d8c565b5b60006123e18482850161200b565b91505092915050565b6000806040838503121561240157612400612d8c565b5b600061240f8582860161200b565b925050602083013567ffffffffffffffff8111156124305761242f612d87565b5b61243c85828601611fbe565b9150509250929050565b61244f81612afe565b82525050565b61245e81612b22565b82525050565b600061246f826129f6565b6124798185612a0c565b9350612489818560208601612bc9565b61249281612d91565b840191505092915050565b6124a681612b84565b82525050565b60006124b782612a01565b6124c18185612a1d565b93506124d1818560208601612bc9565b6124da81612d91565b840191505092915050565b60006124f082612a01565b6124fa8185612a2e565b935061250a818560208601612bc9565b80840191505092915050565b6000612523602d83612a1d565b915061252e82612da2565b604082019050919050565b6000612546603283612a1d565b915061255182612df1565b604082019050919050565b6000612569602b83612a1d565b915061257482612e40565b604082019050919050565b600061258c602583612a1d565b915061259782612e8f565b604082019050919050565b60006125af601c83612a1d565b91506125ba82612ede565b602082019050919050565b60006125d2602483612a1d565b91506125dd82612f07565b604082019050919050565b60006125f5601983612a1d565b915061260082612f56565b602082019050919050565b6000612618602983612a1d565b915061262382612f7f565b604082019050919050565b600061263b602083612a1d565b915061264682612fce565b602082019050919050565b600061265e601883612a1d565b915061266982612ff7565b602082019050919050565b6000612681602183612a1d565b915061268c82613020565b604082019050919050565b60006126a4603d83612a1d565b91506126af8261306f565b604082019050919050565b6126c381612b7a565b82525050565b60006126d582856124e5565b91506126e182846124e5565b91508190509392505050565b60006020820190506127026000830184612446565b92915050565b600060808201905061271d6000830187612446565b61272a6020830186612446565b61273760408301856126ba565b81810360608301526127498184612464565b905095945050505050565b60006040820190506127696000830185612446565b61277660208301846126ba565b9392505050565b60006020820190506127926000830184612455565b92915050565b600060408201905081810360008301526127b28185612464565b90506127c160208301846126ba565b9392505050565b60006020820190506127dd600083018461249d565b92915050565b600060208201905081810360008301526127fd81846124ac565b905092915050565b6000602082019050818103600083015261281e81612516565b9050919050565b6000602082019050818103600083015261283e81612539565b9050919050565b6000602082019050818103600083015261285e8161255c565b9050919050565b6000602082019050818103600083015261287e8161257f565b9050919050565b6000602082019050818103600083015261289e816125a2565b9050919050565b600060208201905081810360008301526128be816125c5565b9050919050565b600060208201905081810360008301526128de816125e8565b9050919050565b600060208201905081810360008301526128fe8161260b565b9050919050565b6000602082019050818103600083015261291e8161262e565b9050919050565b6000602082019050818103600083015261293e81612651565b9050919050565b6000602082019050818103600083015261295e81612674565b9050919050565b6000602082019050818103600083015261297e81612697565b9050919050565b600060208201905061299a60008301846126ba565b92915050565b60006129aa6129bb565b90506129b68282612c2e565b919050565b6000604051905090565b600067ffffffffffffffff8211156129e0576129df612d35565b5b6129e982612d91565b9050602081019050919050565b600081519050919050565b600081519050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600081905092915050565b60008085851115612a4d57612a4c612d78565b5b83861115612a5e57612a5d612d73565b5b6001850283019150848603905094509492505050565b6000612a7f82612b7a565b9150612a8a83612b7a565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115612abf57612abe612ca8565b5b828201905092915050565b6000612ad582612b7a565b9150612ae083612b7a565b925082821015612af357612af2612ca8565b5b828203905092915050565b6000612b0982612b5a565b9050919050565b6000612b1b82612b5a565b9050919050565b60008115159050919050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b6000612b8f82612b96565b9050919050565b6000612ba182612ba8565b9050919050565b6000612bb382612b5a565b9050919050565b82818337600083830152505050565b60005b83811015612be7578082015181840152602081019050612bcc565b83811115612bf6576000848401525b50505050565b60006002820490506001821680612c1457607f821691505b60208210811415612c2857612c27612d06565b5b50919050565b612c3782612d91565b810181811067ffffffffffffffff82111715612c5657612c55612d35565b5b80604052505050565b6000612c6a82612b7a565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415612c9d57612c9c612ca8565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600080fd5b600080fd5b600080fd5b600080fd5b600080fd5b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560008201527f72206f7220617070726f76656400000000000000000000000000000000000000602082015250565b7f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560008201527f63656976657220696d706c656d656e7465720000000000000000000000000000602082015250565b7f4f6e6c792073797374656d20636f6e74726163742063616e2063616c6c20746860008201527f69732066756e6374696f6e000000000000000000000000000000000000000000602082015250565b7f4552433732313a207472616e736665722066726f6d20696e636f72726563742060008201527f6f776e6572000000000000000000000000000000000000000000000000000000602082015250565b7f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000600082015250565b7f4552433732313a207472616e7366657220746f20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b7f4552433732313a20617070726f766520746f2063616c6c657200000000000000600082015250565b7f4552433732313a2061646472657373207a65726f206973206e6f74206120766160008201527f6c6964206f776e65720000000000000000000000000000000000000000000000602082015250565b7f4552433732313a206d696e7420746f20746865207a65726f2061646472657373600082015250565b7f4552433732313a20696e76616c696420746f6b656e2049440000000000000000600082015250565b7f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560008201527f7200000000000000000000000000000000000000000000000000000000000000602082015250565b7f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60008201527f6b656e206f776e6572206f7220617070726f76656420666f7220616c6c000000602082015250565b6130c781612afe565b81146130d257600080fd5b50565b6130de81612b10565b81146130e957600080fd5b50565b6130f581612b22565b811461310057600080fd5b50565b61310c81612b2e565b811461311757600080fd5b50565b61312381612b7a565b811461312e57600080fd5b5056fea26469706673582212208ec30120ac9512733e1d4f18bf5c4a8afa3fc0273d281b5d3dfb46f49c21757064736f6c63430008070033";

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
