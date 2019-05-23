import React, { Component } from "react";
import styled from "styled-components";

import ResponsiveMenu from "./responsiveMenu";
import { FaBars, FaWindowClose } from "react-icons/fa";

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  max-width: 1100px;
  h1 {
    padding: 0;
    margin: 0;
    display: inline;
    a {
      text-transform: none;
    }
    @media (max-width: 576px) {
      display: none;
    }
  }

  ul {
    padding: 0;
    margin: 0;
  }

  li {
    display: inline;
    font-size: 13px;
    list-style-type: none;
    margin-left: 30px;
  }

  a {
    text-decoration: none;
    font-size: 20px;
    color: #ccc;
    &:hover {
      color: #444;
    }
  }

  @media (max-width: 576px) {
    padding: 10px 0;
    li {
      padding: 10px 0;
      display: block;
      margin-left: 0;
    }
  }
`;

class NavMenu extends Component {
  render() {
    return (
      <div>
        <ResponsiveMenu
          menuOpenButton={<FaBars size={30} color="#ccc" />}
          menuCloseButton={<FaWindowClose size={30} color="#ccc" />}
          changeMenuOn="576px"
          largeMenuClassName="large-menu"
          smallMenuClassName="small-menu"
          menu={
            <Menu>
              <h1>
                <a href="#showcase">myTunes</a>
              </h1>
              <ul>
                <li>
                  <a href="#showcase">Overview</a>
                </li>
                <li>
                  <a href="#music">Music</a>
                </li>
                <li>
                  <a href="#video">Video</a>
                </li>
                <li>
                  <a href="#gift-cards">Gift Cards</a>
                </li>
              </ul>
            </Menu>
          }
        />
      </div>
    );
  }
}

export default NavMenu;
