import React, { useState } from "react";
import styled from "styled-components";
import user from "../../../assets/images/user.png";
export const NavDropDown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const options = ["کاربر", "فروشنده", "ادمین", "تنظیمات", "خروج"];
  const toggling = () => setIsOpen(!isOpen);
  const onOptionClicked = (value: any) => {
    setSelectedOption(value);
    setIsOpen(false);
    console.log(selectedOption);
  };
  return (
    <Main>
      <DropDownContainer>
        <DropDownHeader onClick={toggling}>کاربر بی نام</DropDownHeader>
        {isOpen && (
          <DropDownListContainer>
            <DropDownList>
              {options.map((option) => (
                <ListItem onClick={onOptionClicked} key={Math.random()}>
                  {option}
                </ListItem>
              ))}
            </DropDownList>
          </DropDownListContainer>
        )}
      </DropDownContainer>
      <ListItem>
        <Avatar>
          <img
            src={user}
            alt="user"
            style={{ width: "60px", borderRadius: "50%" }}
          />
        </Avatar>
      </ListItem>
    </Main>
  );
};

interface Props {
  value: string;
}
const Main = styled("div")`
  font-family: sans-serif;
  background: #f0f0f0;
  margin: 10rem;
  margin-right: 24.5rem;
  min-width: 200px;
  display: flex;
  /* position: absolute; */
`;

const DropDownContainer = styled("div")`
  width: 10.5em;
  margin: 0;
`;

const DropDownHeader = styled("div")`
  /* margin-bottom: 0.8em; */
  padding: 0.4em 2em 0.4em 1em;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
  font-weight: 500;
  font-size: 1.3rem;
  color: #3faffa;
  background: #ffffff;
  /* margin-top: 4rem; */
`;

const DropDownListContainer = styled("div")`
  width: 14.4em;
`;

const DropDownList = styled("ul")`
  padding: 0;
  margin: 0;
  padding-left: 1em;
  background: #ffffff;
  border: 2px solid #e5e5e5;
  box-sizing: border-box;
  color: #3faffa;
  border: 1px solid red;
  font-size: 1.3rem;
  font-weight: 500;
  &:first-child {
    padding-top: 0.8em;
  }
`;

const ListItem = styled("li")`
  list-style: none;
  /* margin-bottom: 0.8em; */
`;
export const Avatar = styled.div`
  display: flex;
  justify-content: center;
  /* margin-top: 3rem; */
  height: 50px;
`;
