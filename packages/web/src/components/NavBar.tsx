import React from "react";
import { Container, Menu, MenuItem } from "../sharedCompnents/NavBarStyle";
import { Link } from "react-router-dom";

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
            <Link to="/sellerdatainput">sellerData</Link>
          </MenuItem>
        </Menu>
      </Container>
    </div>
  );
}
