import React, { Component } from "react";
// import PropTypes from "prop-types";
import styled from "styled-components";

const SmallMenu = styled.div`
  background-color: #333;
  ${"" /* height: ${props => (props.menuHeight ? null : "81px;")}; */}
  display: none;
  text-align: center;
  @media (max-width: ${props => props.size}) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const LargeMenu = styled.div`
background-color: #333;
display: flex;
justify-content: center;

position: fixed;
top: 0;
width: 100%;
  ${"" /* large menu 'display' is 'none' on displays up to 'max-width' */}
  @media (max-width: ${props => props.size}) {
    display: none;
  }
`;

const IconDiv = styled.div`
  margin-top: 7px;
`;
const MenuIcon = ({ onClick, icon }) => (
  <IconDiv role="button" onClick={onClick}>
    {icon}
  </IconDiv>
);

class ResponsiveMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false
    };
  }

  handleClick = () => {
    this.setState({ showMenu: !this.state.showMenu });
  };

  render() {
    const {
      menu,
      largeMenuClassName,
      smallMenuClassName,
      changeMenuOn,
      menuOpenButton,
      menuCloseButton
    } = this.props;
    return (
      <div>
        <LargeMenu className={largeMenuClassName} size={changeMenuOn}>
          {menu}
        </LargeMenu>

        <SmallMenu
          className={smallMenuClassName}
          size={changeMenuOn}
          menuHeight={this.state.showMenu}
        >
          {!this.state.showMenu ? (
            <MenuIcon onClick={this.handleClick} icon={menuOpenButton} />
          ) : (
            <MenuIcon onClick={this.handleClick} icon={menuCloseButton} />
          )}

          {this.state.showMenu ? <div>{menu}</div> : null}
        </SmallMenu>
      </div>
    );
  }
}
// ResponsiveMenu.propTypes = {
//   menu: PropTypes.node.isRequired,
//   largeMenuClassName: PropTypes.string,
//   smallMenuClassName: PropTypes.string,
//   changeMenuOn: PropTypes.string.isRequired,
//   menuOpenButton: PropTypes.node.isRequired,
//   menuCloseButton: PropTypes.node.isRequired
// };

// ResponsiveMenu.defaultProps = {
//   largeMenuClassName: "",
//   smallMenuClassName: ""
// };
export default ResponsiveMenu;
