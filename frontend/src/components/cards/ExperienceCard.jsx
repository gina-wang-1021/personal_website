import { Typography, Chip, Card, CardMedia } from "@mui/material";
import photo from "../../assets/photo.png";

function ExperienceCard({ exp }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia sx={{ height: 140 }} image={photo} title="photo" />
      <Typography>Title</Typography>
      <Typography>company</Typography>
      <Typography>date</Typography>
      <Typography>description</Typography>
      <Typography>website link</Typography>
      <Chip label="Skill" />
    </Card>
  );
}

export default ExperienceCard;
