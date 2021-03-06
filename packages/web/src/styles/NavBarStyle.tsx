import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  /* justify-content: flex-end; */
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
