import styled from "styled-components";
export const shadowValues = "-0.1em 0.3em 2em -0.5em #c2bebe";
export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 90%;
  width: 95%;
  /* min-height: 30%; */
  /* min-width: 40vw; */
  margin: 20px;
  justify-content: space-between;
  border: 0.1rem solid #e4e4e4;
  box-shadow: ${shadowValues};
  border-radius: 0.3rem;
  border: 1px solid red;
`;
