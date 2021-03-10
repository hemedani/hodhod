import { Sidebar } from "../components/sidebar/Sidebar";
import { Page } from "../components/wrappers/Page";
import { Wrapper } from "../components/wrappers/Wrapper";
import styled from "styled-components";
import { Box } from "../components/wrappers/Box";
import totaltrans from "../../assets/images/totaltrans.jpg";
import thisweekpayments from "../../assets/images/thisweekpayments.jpg";
import thisweekdebts from "../../assets/images/thisweekdebts.jpg";
import { shadowValues } from "../../styles/Shadow";
import { items } from "../data/DelayedcardElements";

export const Home = () => {
  const elements = items.map((item) => <Label>{item.value}</Label>);
  return (
    <>
      <Box flexDirection="row" boxShadow="none" width="33%" margin="1rem ">
        <Img src={totaltrans} alt="totaltrans" />
        <Img src={thisweekdebts} alt="totaltrans" />
        <Img src={thisweekpayments} alt="totaltrans" />
      </Box>

      <p style={{ alignSelf: "flex-start", marginRight: "2rem" }}>معوقه ها</p>
      <DelayedCard>{elements}</DelayedCard>
      <DelayedCard>{elements}</DelayedCard>
      <DelayedCard>{elements}</DelayedCard>
      <DelayedCard>{elements}</DelayedCard>
    </>
  );
};

const Img = styled.img`
  width: 100%;
  height: 100%;
`;
const DelayedCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  box-shadow: ${shadowValues};
  margin: 0.5rem 2rem;
  padding: 1rem;
`;

const Label = styled.label`
  /* width: %; */
  border: none;
  direction: rtl;
  font-weight: 900;
  margin: 0.5rem 1rem;
  margin-left: 16rem;
  color: #acabab;
`;
