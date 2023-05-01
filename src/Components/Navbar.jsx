import React, { useState } from "react";

function Navbar() {
  const [hamburger, setHamburger] = useState(true);
  const [sticky, setSticky] = useState(false);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 130) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  });

  const toggleMenu = () => {
    setHamburger(!hamburger);
  };

  return (
    <>
      <nav className={sticky ? "sticky-nav" : ""}>
        <div className="navbar">
          <a href="#home">
            <p>Coin.exch</p>
          </a>
          <button onClick={() => toggleMenu()} className="toggle-button">
            <div className="toggle-button-bar"></div>
            <div className="toggle-button-bar bar2"></div>
            <div className="toggle-button-bar"></div>
          </button>
          <ul>
            <li>
              <a href="#home">home</a>
            </li>
            <li>
              <a href="#market">market</a>
            </li>
            <li>
              <a href="#choose-us">Choose us</a>
            </li>
            <li>
              <a href="#join">join</a>
            </li>
          </ul>
          <span>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-discord"></i>
          </span>
        </div>
      </nav>
      {!hamburger && (
        <>
          <div onClick={() => toggleMenu()} className="mobile-nav">
            <button onClick={() => toggleMenu()} className="toggle-button">
              <div className="toggle-button-bar-open bar1"></div>
              <div className="toggle-button-bar-open bar3"></div>
            </button>
            <ul>
              <li>
                <a onClick={() => toggleMenu()} href="#home">
                  home
                </a>
              </li>
              <li>
                <a onClick={() => toggleMenu()} href="#market">
                  market
                </a>
              </li>
              <li>
                <a onClick={() => toggleMenu()} href="#choose-us">
                  Choose us
                </a>
              </li>
              <li>
                <a onClick={() => toggleMenu()} href="#join">
                  join
                </a>
              </li>
            </ul>
          </div>
        </>
      )}
    </>
  );
}

export default Navbar;
