import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

function SectionBar({ sections }) {
  return (
    <Stack direction="row" spacing={2} px={5} py={1}>
      {sections.map((section) => (
        <Button variant="text" key={section.id}>
          {section.title}
        </Button>
      ))}
    </Stack>
  );
}

export default SectionBar;
