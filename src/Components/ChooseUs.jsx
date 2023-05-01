import React from "react";
import illustration from "../assets/illustration.png";
import Choosebox from "./Choosebox";

function ChooseUs() {
  return (
    <>
      <section className="choose-us" id="choose-us">
        <div className="container">
          <div className="choose-container">
            <h2>
              Why <span>Choose us</span>
            </h2>
            <div className="choose-container__content">
              <div className="choose-container__content__1">
              <Choosebox
                  img="fa-solid fa-wallet"
                  title="CONNECT YOUR WALLET"
                  text="Use Trust Wallet, Metamask or to connect to the app."
                />
                <Choosebox
                  img="fa-solid fa-pen-ruler"
                  title="SELECT YOUR QUANTITY"
                  text="Upload your crypto and set a title, description and price."
                />
                <Choosebox
                  img="fa-solid fa-bolt"
                  title="CONFIRM TRANSACTION"
                  text="Earn by selling your crypto on our marketplace."
                />
              </div>
              <div className="choose-container__content__2">
                <img src={illustration} alt="" />
              </div>
              <div className="choose-container__content__3">
                <Choosebox
                  img="fa-solid fa-satellite-dish"
                  title="RECEIVE YOUR OWN NFTS"
                  text="Invest all your crypto at one place on one platform."
                />
                <Choosebox
                  img="fa-solid fa-chess-knight"
                  title="TAKE A MARKET
                  TO SELL"
                  text="Discover, collect the right crypto collections to buy or sell."
                />
                <Choosebox
                  img="fa-solid fa-boxes-stacked"
                  title="DRIVE YOUR COLLECTION"
                  text="We make it easy to Discover, Invest and manage."
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ChooseUs;
