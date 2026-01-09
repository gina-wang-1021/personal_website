import ExperienceCard from "./cards/ExperienceCard.jsx";
import ProjectCard from "./cards/ProjectCard.jsx";
import OtherCard from "./cards/OtherCard.jsx";
import { Box, Grid } from "@mui/material";

const cards = {
  tech_work: ExperienceCard,
  projects: ProjectCard,
  other: OtherCard,
};

function Sections({ content }) {
  const MyCard = cards[content.id];

  return (
    <Box px={5} py={1}>
      <Box py={1}>{content.title}</Box>
      <Grid container spacing={3}>
        {content.data.map((item) => (
          <Grid item key={item.id} xs={12} sm={6} md={4}>
            <MyCard exp={item} key={MyCard + item.id} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Sections;
