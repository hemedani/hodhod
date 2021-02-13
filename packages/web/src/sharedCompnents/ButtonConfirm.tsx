import styled from "styled-components";

interface Props {
  backgroundcolor?: string;
  buttonText?: string;
  fontsize?: string;
}

export const ButtonShape = styled.button`
  display: inline-block;
  border-radius: 35px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  color: white;
  width: 11rem;
  background-color: blue;
  border: 2px solid white;
  outline: none;
  &:hover {
    border-width: 2px;
    transition: 0.2s;
    background-color: black;
  }

  &:focus {
    outline: none;
    border: none;
    border-bottom: 1px solid;
    border-bottom-color: #929292;
    box-shadow: 0px 0px 2px white;
  }
`;
const ButtonText = styled.p`
  font-size: white;
`;

export const Button: React.FC<Props> = ({
  buttonText,
  backgroundcolor,
  fontsize,
}) => {
  return (
    <ButtonShape>
      <ButtonText>{buttonText}</ButtonText>
    </ButtonShape>
  );
};
