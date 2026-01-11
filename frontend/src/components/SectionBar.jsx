import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

function SectionBar({ sections, sectionRefs }) {
  const scrollToSection = (id) => {
    sectionRefs[id]?.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <Stack direction="row" spacing={2} px={5} py={1}>
      {sections.map((section) => (
        <Button
          variant="text"
          key={section.id}
          onClick={() => scrollToSection(section.id)}
          sx={{
            fontSize: "1.6rem",
            color: "#32425D",
            backgroundColor: "transparent",
            "&:hover": {
              backgroundColor: "transparent",
              textDecoration: "underline",
            },
          }}
        >
          {section.title}
        </Button>
      ))}
    </Stack>
  );
}

export default SectionBar;
