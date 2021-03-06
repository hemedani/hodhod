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
        <img
          src={user}
          alt="user"
          style={{ width: "60px", borderRadius: "50%" }}
        />
      </Avatar>
      <P>کاربر</P>
      <P>تلفن</P>
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
  background: #027558;
  min-height: 100%;
  text-align: right;
  position: sticky;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  a {
    font-size: 1rem;
    padding: 2rem 0;
    color: #027558;
    text-decoration: none;
  }
`;
const SidebarParent = styled.div`
  background: #027558;
  width: 150px;
  height: 100vh;
  margin-top: 1rem;
`;
const SidebarItem = styled.div<Props>`
  /* box-shadow: 0px -1px 1px 0.5px #888888; */
  border-top: 0.1px solid #488e69;
  border-right: ${(props) => (props.isActive ? "3px solid #FCB366" : "")};
  border-bottom: ${(props) => (props.isActive ? "0.1em solid #FCB366" : "")};
  background-color: ${(props) => (props.isActive ? "#027558" : "")};
  p {
    color: white;
    text-decoration: none;
    padding: 12px 20px;
    font-size: 0.8em;
  }
  P:hover {
    color: #027558;
  }
  &:hover {
    cursor: pointer;
    background-color: #c0bfbf;
  }
  :last-child {
    border-bottom: 0.1px solid #488e69;
  }
`;
export const Avatar = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3rem;
`;

const P = styled.p`
  align-self: center;
  font-size: 0.9em;
  color: white;
  text-decoration: none;
  margin: 7px 7px;
`;
