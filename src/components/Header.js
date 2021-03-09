import styled from "styled-components";
import { Avatar } from "@material-ui/core";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import SearchIcon from "@material-ui/icons/Search";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";

const Header = () => {
  return (
    <HeaderContainer>
      {/* Header Left */}
      <HeaderLeft>
        <HeaderAvatar
        // TODO Add onCLick
        />

        <AccessTimeIcon />
      </HeaderLeft>

      {/* Header Search */}
      <HeaderSearch>
        <SearchIcon />
        <input type="text" placeholder="Search..." />
      </HeaderSearch>

      {/* Header Right */}

      <HeaderRight>
        <HelpOutlineIcon />
      </HeaderRight>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  display: flex;
  border: 2px solid red;
  position: fixed;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  background-color: var(--slack-color);
  color: white;
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  flex: 0.3;
  margin-left: 20px;
  border: 2px solid green;

  > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 30px;
  }
`;

const HeaderAvatar = styled(Avatar)`
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }
`;

const HeaderSearch = styled.div`
  border: 1px solid gray;
  flex: 0.4;
  opacity: 1;
  border-radius: 6px;
  background-color: #421f44;
  display: flex;
  padding: 0 50px;
  color: gray;

  > input {
    background-color: transparent;
    border: none;
    text-align: center;
    min-width: 30vw;
    outline: none;
    color: #fff;
  }
`;

const HeaderRight = styled.div`
  flex: 0.3;
  border: 2px solid blue;
  display: flex;
  align-items: flex-end;

  > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 20px;
  }
`;