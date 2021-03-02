import { Link } from "react-router-dom";
import styled from "styled-components";
import { SidebarItems } from "../../data/SidebarItems";
import user from "../../../assets/images/user.png";
import { useNav } from "../../../hooks/UseNav";

export const Sidebar = () => {
  const activeIndex = useNav();

  return (
    <SideMenu>
      <Avatar>
        <img src={user} alt="user" style={{ width: "80px" }} />
      </Avatar>
      <SidebarParent>
        {SidebarItems.map((item, index) => {
          return (
            <SidebarItem key={index} isActive={index === activeIndex}>
              <Link to={item.route}>
                <p>{item.name} </p>
              </Link>
            </SidebarItem>
          );
        })}
      </SidebarParent>
    </SideMenu>
  );
};

interface Props {
  isActive: boolean;
}

export const SideMenu = styled.nav`
  display: flex;
  flex-direction: column;
  background: #376495;
  min-height: 100%;
  text-align: right;
  position: sticky;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;

  /* @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
  } */

  a {
    font-size: 1rem;
    padding: 2rem 0;
    font-weight: bold;
    color: #376495;
    text-decoration: none;
  }
`;
const SidebarParent = styled.div`
  background: #376495;
  width: 150px;
  height: 100vh;
  margin-top: 2rem;
`;
const SidebarItem = styled.div<Props>`
  /* padding: 16px 24px; */
  /* transition: all 0.25s ease-in-out; */
  //Change the background color if 'active' prop is received

  box-shadow: 0px 0px 1px #888888;
  border-right: ${(props) => (props.isActive ? "2px solid #F1F1F1" : "")};
  border-bottom: ${(props) => (props.isActive ? "0.1em solid #F1F1F1" : "")};
  background-color: ${(props) => (props.isActive ? "#47709D" : "")};
  /* margin: 4px 12px; */

  p {
    color: white;
    font-weight: bold;
    text-decoration: none;
    padding: 10px 10px 10px 0px;
  }

  &:hover {
    cursor: pointer;
  }

  &:hover {
    background: #c0bfbf;
  }
`;
export const Avatar = styled.div`
  width: 5rem;
  height: 5rem;
  margin-left: 2.5rem;
  margin-top: 2.5rem;
`;
