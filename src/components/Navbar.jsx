import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { FaHome, FaSearch, FaBell, FaDownload } from "react-icons/fa";
import UserIcon from "../assets/user-icon.png";

const Navbar = ({ setKeyword }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSearch = () => {
    setKeyword(inputValue);
    setInputValue("");
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  const handleBrandClick = () => {
    setKeyword("trending");
    setInputValue("");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black px-2 px-lg-5">
      <div className="container-fluid">
        <div className="row w-100">
          <div className="col-2 d-flex align-items-center">
            <a className="navbar-brand" href="#" onClick={handleBrandClick}>
              <img src={Logo} alt="Stopify" height={40} />
              <span className="font-weight-bold">Stopify</span>
            </a>
          </div>

          <div className="col-8 d-flex justify-content-center align-items-center">
            <div
              className="input-group rounded-pill bg-dark border border-secondary me-2"
              style={{ maxWidth: "400px" }}>
              <span className="input-group-text bg-transparent border-0 text-light">
                <FaSearch />
              </span>
              <input
                type="text"
                className="form-control bg-transparent border-0 text-light placeholder-light"
                placeholder="What do you want to play?"
                aria-label="Search"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyPress}
              />
              <button className="btn btn-outline-light rounded-pill" onClick={handleSearch}>
                Search
              </button>
            </div>
          </div>

          <div className="col-2 d-flex justify-content-end align-items-center">
            <a href="#" className="d-flex align-items-center">
              <img
                src={UserIcon}
                alt="User"
                className="rounded-circle border border-grey p-1"
                height={40}
              />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
