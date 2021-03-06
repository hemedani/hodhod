import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Dropdown from "react-dropdown";
import { NavDropDown } from "./DropDown";
interface Props {
  justfiyContent?: "flex-start";
}
export const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  /* position: fixed; */
  margin: 10px;
  margin: 0;
  height: 50px;
  background-color: #fffafa;
  align-items: center;
  box-shadow: 0 0.2em 0.1em #e4e4e4;
  width: 100vw;
`;

export const Menu = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: row-reverse;
`;

export const MenuItem = styled.div<Props>`
  margin-right: 30px;
  font-size: 1em;
  justify-content: ${(props) =>
    props.justfiyContent ? props.justfiyContent : ""};
`;

export default function NavBar() {
  return (
    <div>
      <Container>
        <MenuItem justfiyContent="flex-start">
          <NavDropDown />
        </MenuItem>
        <Menu>
          <MenuItem>
            <Link style={{ color: "black", textDecoration: "none" }} to="/">
              خانه
            </Link>
          </MenuItem>
          <MenuItem>بلاگ</MenuItem>
          <MenuItem>
            <Link
              style={{ color: "black", textDecoration: "none" }}
              to="/sellerregistration"
            >
              ثبت نام فروشنده
            </Link>
          </MenuItem>
          <MenuItem>درباره ما</MenuItem>
          <MenuItem>
            <Link to="/seller-data-input">seller</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/client">پنل کاربر</Link>
          </MenuItem>
        </Menu>
      </Container>
    </div>
  );
}
