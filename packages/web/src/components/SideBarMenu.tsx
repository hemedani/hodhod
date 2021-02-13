import styled from "styled-components";

interface Props {
  userName: string;
}
export const SideBarCon = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 1rem 4rem;
  /* border-radius: 1rem; */
  flex: 1;
  height: 90%;
  width: 40%;
  /* justify-content: space-between; */
  border: 0.1rem solid #e4e4e4;
  border: 1px solid red;
`;

const BarBody = styled.div`
  display: flex;
`;
const BarElements = styled.div`
  display: flex;
`;

export const SideBar: React.FC<Props> = ({ userName }) => {
  return (
    <SideBarCon>
      <BarBody>{userName}</BarBody>
      <BarElements></BarElements>
    </SideBarCon>
  );
};
