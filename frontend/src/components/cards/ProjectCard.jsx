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
import { parseSkills } from "../../helpers/preprocessing.js";
import LaunchIcon from "@mui/icons-material/Launch";

const CARD_BG = "#b8c6d3";
const CHIP_BG = "#2f3f57";
const DARK_FONT = "#111B2B";
const DARK_FONT2 = "#32425D";
const LIGHT_FONT = "#E2E9F0";

function ProjectCard({ exp }) {
  const {
    project_name,
    description,
    website_link,
    github_link,
    image_link,
    skills,
  } = exp;

  const skills_arr = parseSkills(skills);

  return (
    <Card
      sx={{
        backgroundColor: CARD_BG,
        color: DARK_FONT,
        borderRadius: 4,
        height: "100%",
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
            {project_name}
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
              Website
            </Link>
          </Stack>
          <Stack direction="row" spacing={1} alignItems="center">
            <LaunchIcon fontSize="small" />
            <Link
              href={github_link}
              target="_blank"
              rel="noopener noreferrer"
              underline="hover"
              color={DARK_FONT2}
            >
              Github
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

export default ProjectCard;
