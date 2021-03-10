import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Dropdown from "react-dropdown";
import { NavDropDown } from "./DropDown";
interface Props {
  justfiyContent?: "flex-start" | "flex-end";
}
export const Container = styled.div`
  display: flex;
  direction: rtl;
  /* position: fixed; */
  margin: 10px;
  margin: 0;
  height: 50px;
  background-color: #fffafa;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 0.2em 0.1em #e4e4e4;
  width: 100%;
`;

export const Menu = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const MenuItem = styled.div<Props>`
  margin-right: 30px;
  font-size: 1em;
  white-space: nowrap;
  justify-content: ${(props) =>
    props.justfiyContent ? props.justfiyContent : ""};
`;

export default function NavBar() {
  return (
    <Container>
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
          <Link
            to="/seller-data-input"
            style={{ color: "black", textDecoration: "none" }}
          >
            seller
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="/client" style={{ color: "black", textDecoration: "none" }}>
            پنل کاربر
          </Link>
        </MenuItem>
      </Menu>
      <MenuItem
        justfiyContent="flex-end"
        style={{ color: "black", textDecoration: "none" }}
      >
        <NavDropDown />
      </MenuItem>
    </Container>
  );
}
