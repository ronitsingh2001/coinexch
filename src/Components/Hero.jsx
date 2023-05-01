import React, { useEffect, useState } from "react";
import Btc from "../assets/bitcoin.png";
import Eth from "../assets/ethereum.png";
import { Link } from "react-router-dom";

function Hero() {
  const [coinsLoad, setCoinsLoad] = useState(true);
  const [data, setData] = useState([]);

  const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=4&page=1&sparkline=false`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error("Error!");
        }
        const jsonData = await res.json();
        setData(jsonData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [url]);

  // console.log(data);

  return (
    <>
      <section className="hero-section" id="home">
        <div className="container">
          <div className="hero-content">
            <div className="hero-content__text">
              <img className="btc-float" src={Btc} alt="floating-el" />
              <h1>
                Track and Trade
                <br /> <span>Crypto currencies</span>
              </h1>
              <img className="eth-float" src={Eth} alt="floating-el" />
            </div>
          </div>
        </div>
        <div className="mobile-btn-hero">
          <a href="#market">See Price</a>
        </div>

        <div onLoad={() => setCoinsLoad(false)} className="coin-slider">
          {coinsLoad && <span className="loader"></span>}
          {data.map((coin) => (
            <Link to={`/coin/${coin.id}`} className="slider-coin" key={coin.id}>
              <img src={coin?.image} alt={coin?.name} />
              <p className="slider-coin__name">
                {coin?.name}{" "}
                <span
                  className={
                    coin.price_change_percentage_24h > 0
                      ? `green-text`
                      : `red-text`
                  }
                >{coin.price_change_percentage_24h.toFixed(2)}%</span>
              </p>
              <p>$ {coin?.current_price.toFixed(2)}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}

export default Hero;
