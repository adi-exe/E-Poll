// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import BasicNav from './BasicNav';
// import Footer from './Footer';

// const Voting = () => {

//     const [votingCount, setVotingCount] = useState(0);
//     const navigate = useNavigate();
  
//     // // Function to handle voting
//     // const handleVote = () => {
//     //   // Increment voting count
//     //   setVotingCount(prevCount => prevCount + 1);
//     //   // Redirect to the "/thanks" route
//     //   navigate('/thanks');
//     // };
    


//   return (
//     <>
//     <BasicNav />

//         <div className="container container-voting">
//   <div className="card-deck card-deck-voting">
//     <div className="card card-voting">
//       <img src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png" className="card-img-top" alt="..." width="30%" />
//       <div className="card-body">
//         <h5 className="card-title">Candidate A</h5>
//         <p className="card-text">
//           This is a longer card with supporting text below as a natural lead-in
//           to additional content.
//         </p>
//         {/* <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> */}
//         <button type="button" className="btn btn-voting btn-success" onClick={handleVote}>
//           Give Vote
//         </button>
//       </div>
//     </div>
//      <div className="card card-voting">
//       <img src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png" className="card-img-top" alt="..." width="30%" />
//       <div className="card-body">
//         <h5 className="card-title">Candidate B</h5>
//         <p className="card-text">
//           This is a longer card with supporting text below as a natural lead-in
//           to additional content.
//         </p>
//         {/* <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> */}
//         <button type="button" className="btn btn-voting btn-success" onClick={handleVote}>
//           Give Vote
//         </button>
//       </div>
//     </div>
//     <div className="card card-voting">
//       <img src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png" className="card-img-top" alt="..." width="30%" />
//       <div className="card-body">
//         <h5 className="card-title">Candidate C</h5>
//         <p className="card-text">
//           This is a longer card with supporting text below as a natural lead-in
//           to additional content.
//         </p>
//         {/* <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> */}
//         <button type="button" className="btn btn-voting btn-success" onClick={handleVote}>
//           Give Vote
//         </button>
//       </div>
//     </div>


//   </div>
// </div>


//     <Footer />
//     </>
//   )
// }

// export default Voting

import Web3 from 'web3';
import React, { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import BasicNav from './BasicNav';
import Footer from './Footer';
import { voteForCandidate } from '../contractUtilsKolkata'; // Import voteForCandidate function

const Voting = () => {
    const [votingCount, setVotingCount] = useState(0);
    const [userAddress, setUserAddress] = useState('');
    const navigate = useNavigate();
  
    useEffect(() => {
      async function fetchUserAddress() {
          if (window.ethereum) {
              try {
                  // Request account access if needed
                  await window.ethereum.enable();
                  const web3 = new Web3(window.ethereum);
                  // Get the user's accounts
                  const accounts = await web3.eth.getAccounts();
                  setUserAddress(accounts[0]);
                  console.log(userAddress);
              } catch (error) {
                  console.error('Error fetching user address:', error);
              }
          }
      }
      fetchUserAddress();
  }, [userAddress]);
    console.log(5);
    console.log(userAddress);
    // Function to handle voting
    const handleVote = async (candidateId,userAddress) => {
      if (!userAddress) {
        console.error('User address not available');
        return;
    }
        const success = await voteForCandidate(candidateId, userAddress);
        if (success) {
            // Increment voting count
            setVotingCount(votingCount => votingCount + 1);
            // Redirect to the "/thanks" route
            navigate('/thanks');
        }
    };
    
    return (
        <>
            <BasicNav />
            <div className='text-center mt-3'>
            <h1>Candidates</h1>      
            </div>
            <div className="container container-voting">
                <div className="card-deck card-deck-voting">
                    <div className="card card-voting">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png" className="card-img-top" alt="..." width="30%" />
                        <div className="card-body">
                            <h5 className="card-title">Candidate A</h5>
                            <p className="card-text">
                                This is a longer card with supporting text below as a natural lead-in
                                to additional content.
                            </p>
                            <button type="button" className="btn btn-voting btn-success" onClick={() => handleVote(1, userAddress)}>
                                Give Vote
                            </button>
                        </div>
                    </div>
                    <div className="card card-voting">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png" className="card-img-top" alt="..." width="30%" />
                        <div className="card-body">
                            <h5 className="card-title">Candidate B</h5>
                            <p className="card-text">
                                This is a longer card with supporting text below as a natural lead-in
                                to additional content.
                            </p>
                            <button type="button" className="btn btn-voting btn-success" onClick={() => handleVote(2, userAddress)}>
                                Give Vote
                            </button>
                        </div>
                    </div>
                    <div className="card card-voting">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png" className="card-img-top" alt="..." width="30%" />
                        <div className="card-body">
                            <h5 className="card-title">Candidate C</h5>
                            <p className="card-text">
                                This is a longer card with supporting text below as a natural lead-in
                                to additional content.
                            </p>
                            <button type="button" className="btn btn-voting btn-success" onClick={() => handleVote(3, userAddress)}>
                                Give Vote
                            </button>
                           
                        </div>
                         
                    </div>
                </div>
            </div>
            
            <Footer />
        </>
    )
}

export default Voting;
