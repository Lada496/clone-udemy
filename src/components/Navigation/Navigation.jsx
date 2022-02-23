import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import LanguageIcon from "@mui/icons-material/Language";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import LinkButton from "../../share/UIElements/LinkButton/LinkButton";
import MenuButtom from "../../share/UIElements/MenuButton/MenuButtom";
import SearchBar from "./SearchBar/SearchBar";

const Navigation = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          bgcolor: "background.paper",
          height: 72,
          px: 2.4,
        }}
      >
        <Toolbar disableGutters sx={{ my: "auto", gap: 1 }}>
          <Box>
            <img
              src="/images/header/logo-udemy.svg"
              alt="Udemy"
              width="100"
              //   height="34"
            />
          </Box>
          <MenuButtom>Categories</MenuButtom>
          <Box sx={{ flexGrow: 1 }}>
            <SearchBar />
          </Box>
          <MenuButtom>Udemy Business</MenuButtom>
          <MenuButtom>Teach on Udemy</MenuButtom>
          <MenuButtom>
            <ShoppingCartOutlinedIcon sx={{ fontSize: 26 }} />
          </MenuButtom>
          <LinkButton color="white" height="2rem" width="6.3rem">
            Log in
          </LinkButton>
          <LinkButton height="2rem" width="6.3rem">
            Sign up
          </LinkButton>
          <LinkButton color="white" height="2rem">
            <LanguageIcon fontSize="large" />
          </LinkButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default Navigation;
