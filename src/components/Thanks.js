import React from 'react'
import BasicNav from './BasicNav'
import Footer from './Footer'

const Thanks = () => {


  


  return (
    <>
    <BasicNav />

  <div className="container">
  <div className="confetti" />
  <div className="confetti" />
  <div className="confetti" />
  <div className="confetti" />
  <div className="confetti" />
  <div className="confetti" />
  <div className="confetti" />
  <div className="confetti" />
  <div className="confetti" />
  <div className="confetti" />
</div>


    <div className="container mt-5">
  <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
    <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
      <h1 className="display-4 fw-bold lh-1">Thanks for Voting</h1>
      <p className="lead">Your vote has been registered</p>
      {/* <div class="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
      <button type="button" class="btn btn-primary btn-lg px-4 me-md-2 fw-bold" fdprocessedid="3okxya">Primary</button>
      <button type="button" class="btn btn-outline-secondary btn-lg px-4" fdprocessedid="kmnez">Default</button>
    </div> */}
    </div>
    <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
      <img className="rounded-lg-3" src="https://images.thequint.com/thequint/2018-05/e26ee1ae-cf95-44af-85d9-a21ad83bef00/Untitled_2__6_.jpg?auto=format,compress&fmt=webp&format=webp&w=1200&h=900&dpr=1.0" alt="" width={720} />
    </div>
  </div>
</div>
  




<Footer />


    </>
  )
}

export default Thanks