import {
  Typography,
  Chip,
  Card,
  CardMedia,
  Box,
  CardContent,
  Stack,
  Link,
} from "@mui/material";
import BusinessIcon from "@mui/icons-material/Business";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LaunchIcon from "@mui/icons-material/Launch";
import { formatDates, parseSkills } from "../../helpers/preprocessing.js";

const CARD_BG = "#b8c6d3";
const CHIP_BG = "#2f3f57";
const DARK_FONT = "#111B2B";
const DARK_FONT2 = "#32425D";
const LIGHT_FONT = "#E2E9F0";
const LIGHT_FONT2 = "#A8B6C6";

function ExperienceCard({ exp }) {
  const {
    position,
    company,
    start_date,
    end_date,
    description,
    website_link,
    image_link,
    skills,
  } = exp;

  const skills_arr = parseSkills(skills);

  // address the line changing issue

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
      <Box p={2}>
        <CardMedia
          sx={{
            height: 160,
            borderRadius: 3,
            objectFit: "cover",
            backgroundColor: "white",
          }}
          component="img"
          image={image_link}
          title="photo"
        />
      </Box>
      <CardContent sx={{ pt: 0 }}>
        <Stack spacing={1.5}>
          <Typography variant="h5" fontWeight={600} color="inherit">
            {position}
          </Typography>
          <Stack direction="row" spacing={1} alignItems="center">
            <BusinessIcon fontSize="small" />
            <Typography
              variant="body1"
              color={DARK_FONT2}
              className="secondary-text"
            >
              {company}
            </Typography>
          </Stack>

          <Stack direction="row" spacing={1} alignItems="center">
            <CalendarMonthIcon fontSize="small" />
            <Typography
              variant="body1"
              color={DARK_FONT2}
              className="secondary-text"
            >
              {formatDates(start_date, end_date)}
            </Typography>
          </Stack>

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
              className="secondary-text"
            >
              Visit Website
            </Link>
          </Stack>

          <Stack direction="row" spacing={1} flexWrap="wrap" rowGap={0.5}>
            {skills_arr.map((skill) => (
              <Chip
                key={skill}
                label={skill}
                sx={{
                  backgroundColor: CHIP_BG,
                  color: LIGHT_FONT,
                }}
              />
            ))}
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
}

export default ExperienceCard;
