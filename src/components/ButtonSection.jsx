import { Box, Stack, IconButton } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

function ButtonSection({ githubLink, linkedinLink }) {
  return (
    <>
      <Stack direction="row">
        <IconButton
          aria-label="linkedin"
          size="medium"
          component="a"
          href={linkedinLink}
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            "&:hover": {
              color: "#111B2B",
              backgroundColor: "transparent",
            },
          }}
        >
          <LinkedInIcon fontSize="medium" />
        </IconButton>
        <IconButton
          aria-label="github"
          size="medium"
          component="a"
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            "&:hover": {
              color: "#111B2B",
              backgroundColor: "transparent",
            },
          }}
        >
          <GitHubIcon fontSize="inherit" />
        </IconButton>
        <IconButton
          aria-label="email"
          size="medium"
          component="a"
          href="mailto:ginawang1021@gmail.com"
          sx={{
            "&:hover": {
              color: "#111B2B",
              backgroundColor: "transparent",
            },
          }}
        >
          <EmailIcon fontSize="inherit" />
        </IconButton>
      </Stack>
    </>
  );
}

export default ButtonSection;
