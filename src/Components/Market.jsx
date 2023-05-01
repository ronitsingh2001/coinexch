import React, { useEffect, useState } from "react";
import Btn from "../assets/bitcoin.png";
import { Link } from "react-router-dom";
import axios from "axios";

function Market() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [apiLoad, setApiLoad] = useState(true);

  const pages = [];
  for (let i = 1; i <= 5; i++) {
    pages.push(
      <button
        key={i}
        onClick={() => setCurrentPage(i)}
        className={`"activePage" ${currentPage == i ?'active':''}`}
      >
        {i}
      </button>
    );
  }

  const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=${currentPage}&sparkline=false
    `;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error("Error");
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
      <section className="market-section" id="market">
        <div className="container">
          <div className="market-content">
            <h2>Market Updates</h2>
            <div className="market-content__coin-list">
              <div className="market-content__coin-list__top">
                <p>Coin</p>
                <p>Price</p>
                <p>24h Change</p>
                <p>Market cap</p>
              </div>
              <div
                onLoad={() => setApiLoad(false)}
                className="market-content__coin-list__row"
              >
                {apiLoad && <div className="loader"></div>}
                {data.map((coin) => (
                  <Link className="coin-row">
                    <span>
                      <img src={coin?.image} alt="" />{" "}
                      {coin?.name.length < 16
                        ? coin.name
                        : coin.name.substring(0, 8) + "..."}
                    </span>
                    <p>${coin.current_price.toFixed(2)}</p>
                    <p
                      className={`"slider-coin__price" ${
                        coin.price_change_percentage_24h > 0
                          ? "green-text"
                          : "red-text"
                      }`}
                    >
                      {coin.price_change_percentage_24h.toFixed(2)}%
                    </p>
                    <p>${coin.market_cap.toFixed(2)}</p>
                  </Link>
                ))}
              </div>
            </div>
            <div className="market-content__coin-list__pagination">{pages}</div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Market;
