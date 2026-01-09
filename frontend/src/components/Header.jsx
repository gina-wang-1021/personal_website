import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ShareIcon from "@mui/icons-material/Share";

// TODO: implement menu and share button drop down and implement navigation

function Header({ githubLink, linkedinLink }) {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      px={2}
      py={2}
    >
      <IconButton aria-label="menu" size="medium">
        <MenuIcon fontSize="inherit" />
      </IconButton>
      <IconButton aria-label="share" size="medium">
        <ShareIcon fontSize="inherit" />
      </IconButton>
    </Box>
  );
}

export default Header;
