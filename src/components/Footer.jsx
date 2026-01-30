import { Box, Typography } from "@mui/material";
import ButtonSection from "./ButtonSection.jsx";

function Footer({ githubLink, linkedinLink }) {
  return (
    <Box
      component="footer"
      mt={8}
      py={6}
      display="flex"
      flexDirection="column"
      alignItems="center"
      gap={3}
    >
      <Typography
        variant="subtitle1"
        sx={{
          fontFamily: "Dancing Script, Neuton, serif",
          fontStyle: "italic",
          textAlign: "center",
          maxWidth: "700px",
          color: "#32425D",
          fontSize: "2rem",
        }}
      >
        Be Curious.
      </Typography>
      <ButtonSection githubLink={githubLink} linkedinLink={linkedinLink} />
    </Box>
  );
}

export default Footer;
