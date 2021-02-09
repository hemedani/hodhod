import styled from "styled-components";
export const AddressInput = styled.input`
  margin-left: 6rem;
  width: 48rem;
  border: none;
  direction: rtl;

  border-bottom: 1px solid;
  border-bottom-color: #929292;
  ::placeholder {
    color: #929292;
  }
  &:hover {
    border-width: 2px;
    transition: 0.2s;
  }

  &:focus {
    outline: none;
    border: none;
    border-bottom: 1px solid;
    border-bottom-color: #929292;
    box-shadow: 0px 0px 2px white;
  }
`;
