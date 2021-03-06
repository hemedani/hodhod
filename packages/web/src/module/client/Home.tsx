import { Sidebar } from "../components/sidebar/Sidebar";
import { Page } from "../components/wrappers/Page";
import { Wrapper } from "../components/wrappers/Wrapper";
import styled from "styled-components";
import { Box } from "../components/wrappers/Box";
import totaltrans from "../../assets/images/totaltrans.jpg";
import thisweekpayments from "../../assets/images/thisweekpayments.jpg";
import thisweekdebts from "../../assets/images/thisweekdebts.jpg";

export const Home = () => {
  return (
    <Box flexDirection="column">
      <Box flexDirection="row" boxShadow="none" width="20px">
        <Box boxShadow="none">
          <img src={totaltrans} alt="totaltrans" />
        </Box>
        <Box boxShadow="none">
          <img src={thisweekdebts} alt="totaltrans" />
        </Box>
        <Box boxShadow="none">
          <img src={thisweekpayments} alt="totaltrans" />
        </Box>
      </Box>
    </Box>
  );
};
