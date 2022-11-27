import { styled} from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";

export default function SearchAppBar() {
  const Search = styled("div")(({ theme }) => ({
    borderRadius: theme.shape.borderRadius,
    backgroundColor: "var(--cor-de-fundo)",
    width: "20%",
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",

    paddingLeft: "12%",
  }));
  return (
    <Search>
      <SearchIconWrapper>

        </SearchIconWrapper>
      <StyledInputBase
        placeholder="Search…"
        inputProps={{ "aria-label": "search" }}
      />
    </Search>
  );
}
