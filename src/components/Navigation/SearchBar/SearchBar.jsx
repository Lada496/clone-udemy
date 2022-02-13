import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";

const SearchBar = () => {
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: 50,
    backgroundColor: alpha(theme.palette.grey[200], 0.5),
    marginLeft: 0,
    border: "1.5px solid #1c1d1f",
    width: "100%",
    height: 50,
    color: theme.palette.text.secondary,
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: theme.palette.common.black,
    "& .MuiInputBase-input": {
      padding: theme.spacing(1.9, 1, 1, 1),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      fontSize: 15,
    },
  }));
  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon sx={{ fontSize: 25 }} />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Search for anything"
        inputProps={{ "aria-label": "search" }}
      />
    </Search>
  );
};

export default SearchBar;
