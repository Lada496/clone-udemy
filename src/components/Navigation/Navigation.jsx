import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import LanguageIcon from "@mui/icons-material/Language";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import LinkButton from "../../share/UIElements/LinkButton/LinkButton";
import MenuButtom from "../../share/UIElements/MenuButton/MenuButtom";
import RightTooltip from "./RightTooltip/RightTooltip";
import SearchBar from "./SearchBar/SearchBar";
import CartTooltip from "./CartTooltip/CartTooltip";
import Categories from "./Categories/Categories";
const udemyBusinessMessage =
  "Get your team access to over 6,000 top Udemy courses, anytime, anywhere.";
const techOnUdemy =
  "Turn what you know into an opportunity and reach millions around the world.";
const Navigation = () => {
  const RightTooltipWithStyle = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: "transparent",
      // minWidth: 250,
      color: theme.palette.grey[900],
      borderRadius: 0,
      padding: 0,
    },
  }));
  const LeftTooltipWithStyle = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: "transparent",
      minWidth: 830,
      color: theme.palette.grey[900],
      borderRadius: 0,
      padding: 0,
    },
  }));

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          bgcolor: "background.paper",
          height: "7.2rem",
          px: "2.4rem",
          boxShadow: "0 2px 4px rgb(0 0 0 / 8%), 0 4px 12px rgb(0 0 0 / 8%)",
        }}
      >
        <Toolbar disableGutters sx={{ my: "auto", gap: 1 }}>
          <Box>
            <img
              src="/images/header/logo-udemy.svg"
              alt="Udemy"
              width="91"
              height="34"
            />
          </Box>
          <MenuButtom>
            <LeftTooltipWithStyle
              title={<Categories />}
              placement="bottom-start"
            >
              <span>Categories</span>
            </LeftTooltipWithStyle>
          </MenuButtom>
          <Box sx={{ flexGrow: 1 }}>
            <SearchBar />
          </Box>

          <MenuButtom>
            <RightTooltipWithStyle
              title={
                <RightTooltip
                  text={udemyBusinessMessage}
                  buttonMessage="Try Udemy Business"
                />
              }
              placement="bottom-end"
            >
              <span>Udemy Business</span>
            </RightTooltipWithStyle>
          </MenuButtom>

          <MenuButtom>
            <RightTooltipWithStyle
              title={
                <RightTooltip text={techOnUdemy} buttonMessage="Learn more" />
              }
              placement="bottom-end"
            >
              <span>Teach on Udemy</span>
            </RightTooltipWithStyle>
          </MenuButtom>
          <MenuButtom>
            <RightTooltipWithStyle
              title={<CartTooltip />}
              placement="bottom-end"
            >
              <ShoppingCartOutlinedIcon sx={{ fontSize: 24 }} />
            </RightTooltipWithStyle>
          </MenuButtom>
          <LinkButton
            fontSize="1.4rem"
            color="white"
            height="4rem"
            width="8rem"
          >
            Log in
          </LinkButton>
          <LinkButton fontSize="1.4rem" height="4rem" width="8rem">
            Sign up
          </LinkButton>
          <LinkButton color="white" height="4rem" width="4rem">
            <LanguageIcon sx={{ fontSize: "2rem" }} />
          </LinkButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default Navigation;
