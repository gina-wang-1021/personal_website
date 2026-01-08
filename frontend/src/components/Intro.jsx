import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function Intro() {
  return (
    <Box px={5} py={3}>
      <Typography variant={"h5"} pb={1.5}>
        Headline!
      </Typography>
      <Typography variant={"body1"}>bio</Typography>
    </Box>
  );
}

export default Intro;
