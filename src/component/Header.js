import React from "react";

const Header = () => {
  return (
    <div className="headWrap">
      <div className="logoHead">
        <img src="./images/logo--Gaggle.svg" alt="" />
        <div className="err">
          <i
            className="fa-solid fa-triangle-exclamation"
            style={{ color: "red" }}
          ></i>{" "}
          <span style={{ borderRight: "1px solid #ddd", paddingRight: "20px" }}>
            Save unsuccessfull
          </span>
          <i class="fa-regular fa-loader"></i> Retrying
        </div>
      </div>

      <div className="allbtn">
        <div className="two_btn">
          <div className="btn1">
            <div className="btngrp">
              <i class="fa-solid fa-cloud-arrow-up"></i>
              <i class="fa-solid fa-greater-than"></i> <br />
            </div>
            <span>Button 2</span>
          </div>
          <div className="btn1">
            <div className="btngrp">
              <i class="fa-solid fa-file-zipper"></i>
              <i class="fa-solid fa-greater-than"></i>
            </div>
            <span>Button 3</span>
          </div>
        </div>

        <div className="search">
          <div className="searchWrap">
            <div className="searchBox">
              <i class="fa-solid fa-filter"></i>
              <input type="text" placeholder="Find" /> <br />
            </div>
            <span style={{ display: "flex", justifyContent: "center" }}>
              Filter by Keyword
            </span>
          </div>
          <div className="two_btn">
            <i class="fa-solid fa-file-arrow-down"></i>
            <span>Export</span>
          </div>
        </div>
      </div>

      <div className="tbl">
        <span>Date</span>
        <div
          className="incident"
          style={{ display: "flex", columnGap: "40px" }}
        >
          <span
            style={{
              borderRight: "1px solid #9b9b9b",
              borderLeft: "1px solid #9b9b9b",
              padding: "0px 5px",
            }}
          >
            Incident Type
          </span>
          <span>Status</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
