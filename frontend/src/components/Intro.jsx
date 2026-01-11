import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const CARD_BG = "#b8c6d3";
const CHIP_BG = "#2f3f57";
const DARK_FONT = "#111B2B";
const DARK_FONT2 = "#32425D";
const LIGHT_FONT = "#E2E9F0";
const LIGHT_FONT2 = "#A8B6C6";

function Intro({ title, bio }) {
  return (
    <Box px={5} py={3}>
      <Typography variant={"h3"} pb={2} color={DARK_FONT}>
        {title}
      </Typography>
      <Typography variant={"body1"} color={DARK_FONT2}>
        {bio}
      </Typography>
    </Box>
  );
}

export default Intro;
