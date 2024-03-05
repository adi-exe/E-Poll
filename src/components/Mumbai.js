import Web3 from "web3";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BasicNav from "./BasicNav";
import Footer from "./Footer";
import { voteForCandidate } from "../contractUtilsKolkata";

const Mumbai = () => {
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
        <h1>Mumbai Candidates</h1>
      </div>
      <div className="container container-voting">
        <div className="card-deck card-deck-voting">
          <div className="card card-voting">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
              className="card-img-top"
              alt="..."
              width="30%"
              height="60%"
            />
            <div className="card-body">
              <h5 className="card-title">Raj Shinde</h5>
              <p className="card-text">
                This Emphasizes individual rights, personal freedoms, and
                limited government intervention.
              </p>
              <button
                type="button"
                className="btn btn-voting btn-success"
                onClick={() => handleVote(4)}
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
              height="60%"
            />
            <div className="card-body">
              <h5 className="card-title">Milind Thackrey</h5>
              <p className="card-text">
                This Promotes a strong Hindu identity and cultural unity for
                India, sometimes advocating for prioritization of Hindu
                interests.
              </p>
              <button
                type="button"
                className="btn btn-voting btn-success"
                onClick={() => handleVote(5)}
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
              height="60%"
            />
            <div className="card-body">
              <h5 className="card-title">Nikhil Shah</h5>
              <p className="card-text">
                This Calls for a mixed economy with state intervention, social
                welfare programs, and equality of opportunity.
              </p>
              <button
                type="button"
                className="btn btn-voting btn-success"
                onClick={() => handleVote(6)}
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

export default Mumbai;
