// import Web3 from 'web3';
// import KolkataVotingContract from './KolkataVoting.json'; // Import your contract ABI from the compiled artifact

// // Initialize Web3
// const web3 = new Web3(Web3.givenProvider || 'http://localhost:7545');

// // Define function to get contract instance
// export const getContractInstance = async () => {
//     // Get network ID
//     const networkId = await web3.eth.net.getId();

//     // Get deployed network
//     const deployedNetwork = KolkataVotingContract.networks[networkId];

//     if (!deployedNetwork) {
//         throw new Error('Contract not deployed on this network');
//     }

//     // Get contract instance
//     const contractInstance = new web3.eth.Contract(
//         KolkataVotingContract.abi,
//         deployedNetwork.address
//     );

//     return contractInstance;
// };
