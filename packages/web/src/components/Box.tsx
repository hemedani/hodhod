import styled from "styled-components";
import { shadowValues } from "../sharedCompnents/FormContainer";
export const SellerRegFormCon = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 1rem 4rem;
  box-shadow: ${shadowValues};
  border-radius: 1rem;
  /* border: 1px solid red; */
  /* margin-top: 10px; */
`;
const HeaderBox = styled.h2`
  display: flex;
  direction: rtl;
`;
const BodyBox = styled.div`
  display: flex;
  /* border: 1px solid red; */
`;
interface Props {
  headerText?: string;
}

export const Box: React.FC<Props> = ({ children, headerText }) => {
  return (
    <SellerRegFormCon>
      {headerText && <HeaderBox>{headerText}</HeaderBox>}
      <BodyBox>{children}</BodyBox>
    </SellerRegFormCon>
  );
};
