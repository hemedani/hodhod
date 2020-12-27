import React from "react";
import { Container, Menu, MenuItem } from "../sharedCompnents/NavBarStyle";

export default function NavBar() {
  return (
    <div>
      <Container>
        <Menu>
          <MenuItem>خانه</MenuItem>
          <MenuItem>بلاگ</MenuItem>
          <MenuItem>ثبت نام فروشنده</MenuItem>
          <MenuItem>درباره ما</MenuItem>
        </Menu>
      </Container>
    </div>
  );
}
