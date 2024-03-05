// import React from 'react'
// import BasicNav from './BasicNav'
// import Footer from './Footer'
import Web3 from "web3";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BasicNav from "./BasicNav";
import Footer from "./Footer";
import { voteForCandidate } from "../contractUtilsKolkata";

const Kolkata = () => {
  const [votingCount, setVotingCount] = useState(0);
  const [userAddress, setUserAddress] = useState("");
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
          console.error("Error fetching user address:", error);
        }
      }
    }
    fetchUserAddress();
  }, [userAddress]);
  console.log(5);
  console.log(userAddress);
  // Function to handle voting
  const handleVote = async (candidateId) => {
    if (!userAddress) {
      console.error("User address not available");
      return;
    }
    const success = await voteForCandidate(candidateId, userAddress);
    if (success) {
      // Increment voting count
      setVotingCount((votingCount) => votingCount + 1);
      // Redirect to the "/thanks" route
      navigate("/thanks");
    }
  };

  return (
    <>
      <BasicNav />
      <div className="text-center mt-3">
        <h1>Kolkata Candidates</h1>
      </div>
      <div className="container container-voting">
        <div className="card-deck card-deck-voting">
          <div className="card card-voting">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
              className="card-img-top"
              alt="..."
              width="30%"
              height="90%"
            />
            <div className="card-body">
              <h5 className="card-title">Debashish Debnath</h5>
              <p className="card-text">
                This seeks to create a society with equal opportunities and
                wealth distribution through socialist policies.
              </p>
              <button
                type="button"
                className="btn btn-voting btn-success"
                onClick={() => handleVote(1)}
              >
                Give Vote
              </button>
            </div>
          </div>
          <div className="card card-voting">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
              className="card-img-top"
              alt="..."
              width="30%"
              height="90%"
            />
            <div className="card-body">
              <h5 className="card-title">Soham Agarwal</h5>
              <p className="card-text">
                This prioritizes Bengali cultural identity and economic
                development within the framework of a federal India.
              </p>
              <button
                type="button"
                className="btn btn-voting btn-success"
                onClick={() => handleVote(2)}
              >
                Give Vote
              </button>
            </div>
          </div>
          <div className="card card-voting">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
              className="card-img-top"
              alt="..."
              width="30%"
              height="90%"
            />
            <div className="card-body">
              <h5 className="card-title">Prem Chatterjee</h5>
              <p className="card-text">
                This promotes a vision of a unified India based on Hindu
                nationalism and social conservatism.
              </p>
              <button
                type="button"
                className="btn btn-voting btn-success"
                onClick={() => handleVote(3)}
              >
                Give Vote
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Kolkata;
