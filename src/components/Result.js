// import React from 'react'
// import BasicNav from './BasicNav'
// import Footer from './Footer'

// const Result = () => {
//   return (
//     <>
//     <BasicNav />

//         <div className="container text-center">
//   <h1>Winner's List</h1>
//   <div className="row align-items-start">
//     <div className="col col-res">
//       <h2>Mumbai</h2>
//       <div className="cardiie" style={{ width: "18rem" }}>
//         <img src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png" className="card-img-top" alt="..." />
//         <div className="card-body">
//           <h5 className="card-title">Card title</h5>
//           <h6 className="count">... Votes</h6>
//           {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
//           {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
//         </div>
//       </div>
//       <div className="cardiie" style={{ width: "18rem" }}>
//         <img src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png" className="card-img-top" alt="..." />
//         <div className="card-body">
//           <h5 className="card-title">Card title</h5>
//           <h6 className="count">... Votes</h6>
//           {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
//           {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
//         </div>
//       </div>
//       <div className="cardiie" style={{ width: "18rem" }}>
//         <img src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png" className="card-img-top" alt="..." />
//         <div className="card-body">
//           <h5 className="card-title">Card title</h5>
//           <h6 className="count">...Votes</h6>
//           {/* <p class="card-text"></p> */}
//           {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
//         </div>
//       </div>
//     </div>
//     <div className="col-res col">
//       <h2>Delhi</h2>
//       <div className="cardiie" style={{ width: "18rem" }}>
//         <img src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png" className="card-img-top" alt="..." />
//         <div className="card-body">
//           <h5 className="card-title">Card title</h5>
//           {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
//           {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
//           <h6 className="count">... Votes</h6>
//         </div>
//       </div>
//       <div className="cardiie" style={{ width: "18rem" }}>
//         <img src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png" className="card-img-top" alt="..." />
//         <div className="card-body">
//           <h5 className="card-title">Card title</h5>
//           {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
//           {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
//           <h6 className="count">... Votes</h6>
//         </div>
//       </div>
//       <div className="cardiie" style={{ width: "18rem" }}>
//         <img src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png" className="card-img-top" alt="..." />
//         <div className="card-body">
//           <h5 className="card-title">Card title</h5>
//           <h6 className="count">... Votes</h6>
//           {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
//           {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
//         </div>
//       </div>
//     </div>
//   </div>
// </div>

// <Footer />

//     </>
//   )
// }

// export default Result

import React, { useState, useEffect } from 'react';
import BasicNav from './BasicNav';
import Footer from './Footer';
import { getContractInstance } from '../contractUtils'; // Import getContractInstance function

const Result = () => {
    const [voteCounts, setVoteCounts] = useState({});

    useEffect(() => {
        async function fetchVoteCounts() {
            try {
                const KolkataVoting = await getContractInstance();
                const candidatesCount = await KolkataVoting.methods.candidatesCount().call();
                const voteCounts = {};

                for (let i = 1; i <= candidatesCount; i++) {
                    const candidate = await KolkataVoting.methods.candidates(i).call();
                    voteCounts[candidate.name] = candidate.voteCount;
                }

                setVoteCounts(voteCounts);
            } catch (error) {
                console.error('Error fetching vote counts:', error);
            }
        }

        fetchVoteCounts();
    }, []);

    return (
        <>
            <BasicNav />
            <div className="containerrr text-center">
                <h1 class="ff">Final Vote Count</h1>
                <div className="row align-items-start">
                    <div className="col col-res">
                        <h2>Mumbai</h2>
                        <div className="cardiie" style={{ width: "18rem" }}>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Raj Shinde</h5>
                                <h6 className="count">{voteCounts['Candidate A']} Votes</h6>
                            </div>
                        </div>
                        <div className="cardiie" style={{ width: "18rem" }}>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Milind Thackrey</h5>
                                <h6 className="count">{voteCounts['Candidate B']} Votes</h6>
                            </div>
                        </div>
                        <div className="cardiie" style={{ width: "18rem" }}>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Nikhil Shah</h5>
                                <h6 className="count">{voteCounts['Candidate C']} Votes</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-res col">
                        <h2>Kolkata</h2>
                        <div className="cardiie" style={{ width: "18rem" }}>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Debashish Debnath</h5>
                                <h6 className="count">{voteCounts['Candidate D']} Votes</h6>
                            </div>
                        </div>
                        <div className="cardiie" style={{ width: "18rem" }}>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Soham Agarwal</h5>
                                <h6 className="count">{voteCounts['Candidate E']} Votes</h6>
                            </div>
                        </div>
                        <div className="cardiie" style={{ width: "18rem" }}>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Prem Chatterjee</h5>
                                <h6 className="count">{voteCounts['Candidate F']} Votes</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Result;
