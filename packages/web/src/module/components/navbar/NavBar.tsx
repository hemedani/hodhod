import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

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
  width: 100%;
`;

export const Menu = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: row-reverse;
`;

export const MenuItem = styled.div`
  margin-right: 30px;
  font-size: 1em;
`;

export default function NavBar() {
  return (
    <div>
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
            <Link to="/seller-data-input">seller</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/user-panel">پنل کاربر</Link>
          </MenuItem>
        </Menu>
      </Container>
    </div>
  );
}
