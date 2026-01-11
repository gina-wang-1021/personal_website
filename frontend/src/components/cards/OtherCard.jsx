import {
  Typography,
  Chip,
  Card,
  CardMedia,
  CardContent,
  Box,
  Stack,
  Link,
} from "@mui/material";
import LaunchIcon from "@mui/icons-material/Launch";

const CARD_BG = "#b8c6d3";
const CHIP_BG = "#2f3f57";
const DARK_FONT = "#111B2B";
const DARK_FONT2 = "#32425D";
const LIGHT_FONT = "#E2E9F0";

function OtherCard({ exp }) {
  const { title, description, website_link, image_link } = exp;

  return (
    <Card
      sx={{
        backgroundColor: CARD_BG,
        color: DARK_FONT,
        borderRadius: 4,
        height: "100%",
      }}
    >
      <CardContent sx={{ pt: 0 }}>
        <Stack spacing={1.5} mt={2}>
          <Typography variant="h5" fontWeight={600} color="inherit">
            {title}
          </Typography>
          <Typography
            variant="body1"
            sx={{ lineHeight: 1.6, fontWeight: 500 }}
            color="inherit"
          >
            {description}
          </Typography>
          <Stack direction="row" spacing={1} alignItems="center">
            <LaunchIcon fontSize="small" />
            <Link
              href={website_link}
              target="_blank"
              rel="noopener noreferrer"
              underline="hover"
              color={DARK_FONT2}
            >
              Visit Website
            </Link>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
}

export default OtherCard;
