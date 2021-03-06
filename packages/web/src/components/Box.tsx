import styled from "styled-components";
export const shadowValues = "-0.1em 0.3em 2em -0.5em #c2bebe";
interface Props {
  headerText?: string;
}
export const SellerRegFormCon = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 1rem 4rem;
  box-shadow: ${shadowValues};
  border-radius: 1rem;
  flex: 1;
  height: 90%;
  width: 95%;
  margin: 20px;
  /* justify-content: space-between; */
  border: 0.1rem solid #e4e4e4;
  border: 1px solid red;
`;
const HeaderBox = styled.h2`
  display: flex;
  direction: rtl;
`;
const BodyBox = styled.div`
  display: flex;
  flex-direction: ;
  /* border: 1px solid red; */
`;
export const Card = styled.div`
  display: flex;
  flex-direction: row-reverse;
  flex-wrap: wrap;
  /* margin-right: 6rem; */
  /* justify-content: space-around; */
  /* border: 1px solid red; */
`;

export const CardElement = styled.div`
  display: flex;
  margin: 10px 10px 30px 10px;
  /* border: 1px solid red; */
`;

export const Box: React.FC<Props> = ({ children, headerText }) => {
  return (
    <SellerRegFormCon>
      {headerText && <HeaderBox>{headerText}</HeaderBox>}
      <BodyBox>
        {children}
        {/* {
          <Card>
            <CardElement></CardElement>
          </Card>
        } */}
      </BodyBox>
    </SellerRegFormCon>
  );
};
