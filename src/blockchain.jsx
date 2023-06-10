
//Change this contract address
const contractAddress = "0x793414D4816A95389D9491cFDa9D1bFDad7e" 

//Paste here the full ABI bellow
const contractABI = { 
  "_format": "hh-sol-artifact-1",
  "contractName": "MyEpicNFT",
  "sourceName": "contracts/MyEpicNFT.sol",
  "abi": [
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "approved",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
      ],
      "name": "transferFrom",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "bytecode": "0x608060405260405180610460203e",
  "deployedBytecode": "0x608060405234801561001057600080fd5b506004361061010b5760003560e01c806370a08231116100a2578063b88d4fde11610071578063b88d4fde146102dc5758221220d22fae4228e123da2a26c0b721c21125b80abca23331a31db337a595964c8e3964736f6c63430008010033",
  "linkReferences": {},
  "deployedLinkReferences": {}
}


const { contractName } = contractABI;
const { abi } = contractABI;

export default {
	contractAddress,
	contractName,
	abi
};
