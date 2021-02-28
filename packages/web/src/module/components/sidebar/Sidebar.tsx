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
            <Link to={item.route}>
              <SidebarItem key={index} isActive={index === activeIndex}>
                <p>{item.name} </p>
              </SidebarItem>
            </Link>
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
  /* justify-content: center; */
  background: blue;
  min-height: 100%;
  text-align: right;
  padding: 1rem;
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
    color: blue;
    text-decoration: none;
  }
`;
const SidebarParent = styled.div`
  background: blue;
  width: 150px;
  height: 100vh;
  margin-top: 0;
`;
const SidebarItem = styled.div<Props>`
  padding: 16px 24px;
  /* transition: all 0.25s ease-in-out; */
  //Change the background color if 'active' prop is received
  background: ${(props) => (props.isActive ? "gray" : "")};
  margin: 4px 12px;
  border-radius: 4px;

  p {
    color: white;
    font-weight: bold;
    text-decoration: none;
  }

  &:hover {
    cursor: pointer;
  }

  &:hover:not(:first-child) {
    background: blue;
  }
`;
export const Avatar = styled.div`
  width: 5rem;
  height: 5rem;
  margin-left: 2.5rem;
`;
