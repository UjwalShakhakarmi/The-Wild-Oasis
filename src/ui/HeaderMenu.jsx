import { HiOutlineUser } from "react-icons/hi2";
import ButtonIcon from "./ButtonIcon";
import { useNavigate } from "react-router-dom";
import Logout from "../features/authentication/Logout";
import styled from "styled-components";

const StyledHeaderMenu = styled.ul`
  display: flex;
  gap: 0.4rem;
`;
function HeaderMenu() {
  const navigate = useNavigate();
  return (
    <StyledHeaderMenu>
      <li>
        <ButtonIcon onClick={() => navigate("/")}>
          <HiOutlineUser />
        </ButtonIcon>
      </li>
      <li>
        <Logout />
      </li>
    </StyledHeaderMenu>
  );
}

export default HeaderMenu;
