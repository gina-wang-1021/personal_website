import ExperienceCard from "./cards/ExperienceCard.jsx";
import ProjectCard from "./cards/ProjectCard.jsx";
import OtherCard from "./cards/OtherCard.jsx";
import { Box, Grid, Stack, Typography } from "@mui/material";
import WorkIcon from "@mui/icons-material/Work";
import BuildCircleIcon from "@mui/icons-material/BuildCircle";
import WorkspacesIcon from "@mui/icons-material/Workspaces";
import { motion } from "motion/react";

import { sectionReveal, cardReveal } from "../helpers/motion_animation.js";

const cards = {
  tech_work: ExperienceCard,
  projects: ProjectCard,
  other: OtherCard,
};

const icons = {
  tech_work: WorkIcon,
  projects: BuildCircleIcon,
  other: WorkspacesIcon,
};

const MotionGrid = motion(Grid);
const MotionBox = motion(Box);

function Sections({ content }) {
  const MyCard = cards[content.id];
  const MyIcon = icons[content.id];

  return (
    <MotionBox
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.15 }}
      variants={sectionReveal}
      sx={{ px: 5, py: 4 }}
    >
      <Stack direction="row" pt={1} pb={2} alignItems="center" spacing={1}>
        <MyIcon fontSize="medium" />
        <Typography variant="h4" fontWeight={600} color="inherit">
          {content.title}
        </Typography>
      </Stack>
      <Grid container spacing={3}>
        {content.data.map((item, index) => (
          <MotionGrid
            item
            xs={12}
            sm={6}
            md={4}
            key={item.id}
            variants={cardReveal}
            custom={index % 3}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
          >
            <MyCard exp={item} key={MyCard + item.id} />
          </MotionGrid>
        ))}
      </Grid>
    </MotionBox>
  );
}

export default Sections;
