import styled from "styled-components";
const shadowValues = "-0.1em 0.3em 2em -0.5em #c2bebe";
export const Logo = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 90%;
  width: 90%;
  /* min-height: 40%; */
  /* min-width: 40vw; */
  margin: 20px;
  border: 0.1rem solid #e4e4e4;
  box-shadow: ${shadowValues};
  border-radius: 0.3rem;
  overflow: hidden;
  > img {
    width: 100%;
  }
`;
