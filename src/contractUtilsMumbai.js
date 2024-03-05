// import Web3 from 'web3';
// import MumbaiVotingContract from './MumbaiVoting.json';

// const web3 = new Web3(Web3.givenProvider || 'http://localhost:7545');

// export const getContractInstance = async () => {
//   const networkId = await web3.eth.net.getId();
//   const deployedNetwork = MumbaiVotingContract.networks[networkId];
  
//   if (!deployedNetwork) {
//     throw new Error('Contract not deployed on this network');
//   }

//   const contractInstance = new web3.eth.Contract(
//     MumbaiVotingContract.abi,
//     deployedNetwork.address
//   );

//   return contractInstance;
// };

// export const voteForCandidate = async (candidateId, userAddress) => {
//   const MumbaiVoting = await getContractInstance();
  
//   try {
//     await MumbaiVoting.methods.vote(candidateId).send({ from: userAddress });
//     return true;
//   } catch (error) {
//     console.error('Error voting:', error);
//     return false;
//   }
// };

// Other utility functions for contract interaction
