import { Box, Menu, IconButton, MenuItem } from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import { useState } from "react";

function Header({ githubLink, linkedinLink }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="flex-end"
      px={6}
      py={2}
    >
      <IconButton
        aria-label="share"
        size="medium"
        sx={{
          "&:hover": {
            color: "#111B2B",
            backgroundColor: "transparent",
          },
        }}
        onClick={handleClick}
      >
        <ShareIcon fontSize="inherit" />
      </IconButton>
      <Menu
        id="share-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem
          aria-label="linkedin"
          onClick={handleClose}
          component="a"
          href={linkedinLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconButton
            sx={{
              "&:hover": {
                backgroundColor: "transparent",
              },
            }}
          >
            <LinkedInIcon fontSize="medium" />
          </IconButton>
        </MenuItem>
        <MenuItem
          aria-label="github"
          onClick={handleClose}
          component="a"
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconButton
            sx={{
              "&:hover": {
                backgroundColor: "transparent",
              },
            }}
          >
            <GitHubIcon fontSize="medium" />
          </IconButton>
        </MenuItem>
        <MenuItem
          aria-label="email"
          onClick={handleClose}
          component="a"
          href="mailto:ginawang1021@gmail.com"
        >
          <IconButton
            sx={{
              "&:hover": {
                backgroundColor: "transparent",
              },
            }}
          >
            <EmailIcon fontSize="medium" />
          </IconButton>
        </MenuItem>
      </Menu>
    </Box>
  );
}

export default Header;
