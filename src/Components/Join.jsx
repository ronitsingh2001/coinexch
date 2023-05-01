import React from "react";
import Btc from '../assets/bitcoin.png'
import Eth from '../assets/ethereum.png'

function Join() {
  return (
    <>
      <section id="join" className="join">
        <div className="container">
          <div className="join-content">
            <div className="join-content__text">
              <img className="btc-float" src={Btc} alt="floating-el" />
              <h1>
                join us via<br/>
                <span> discord</span>
              </h1>
              <img className="eth-float" src={Eth} alt="floating-el" />

              <p>Invest and manage all your crypto at one place.</p>
              <a href="#">join via discord</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Join;
