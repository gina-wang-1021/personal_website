import { Typography, Card, CardContent, Stack, Link } from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";

const CARD_BG = "#b8c6d3";
const CHIP_BG = "#2f3f57";
const DARK_FONT = "#111B2B";
const DARK_FONT2 = "#32425D";
const LIGHT_FONT = "#E2E9F0";
const LIGHT_FONT2 = "#A8B6C6";

function OtherCard({ exp }) {
  const { title, description, website_link, image_link } = exp;

  return (
    <Card
      sx={{
        backgroundColor: CARD_BG,
        color: DARK_FONT,
        borderRadius: 4,
        height: "100%",
        transition: "all 0.3s ease",
        "&:hover": {
          backgroundColor: CHIP_BG,
          color: LIGHT_FONT,

          "& .MuiChip-root": {
            backgroundColor: CARD_BG,
            color: DARK_FONT,
          },

          "& .secondary-text": {
            color: LIGHT_FONT2,
          },
        },
      }}
    >
      <CardContent
        sx={{
          p: 3,
        }}
      >
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
          {website_link && (
            <Stack direction="row" spacing={1} alignItems="center">
              <LanguageIcon fontSize="small" />
              <Link
                href={website_link}
                target="_blank"
                rel="noopener noreferrer"
                underline="hover"
                color={DARK_FONT2}
                className="secondary-text"
                sx={{
                  textDecoration: "none",
                  color: "inherit",
                  cursor: "pointer",

                  "&:hover": {
                    textDecoration: "underline",
                    textDecorationColor: "currentColor",
                  },
                }}
              >
                Visit Website
              </Link>
            </Stack>
          )}
        </Stack>
      </CardContent>
    </Card>
  );
}

export default OtherCard;
