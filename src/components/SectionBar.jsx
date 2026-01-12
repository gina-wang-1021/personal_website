import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

function SectionBar({ sections, sectionRefs, activeSection }) {
  const scrollToSection = (id) => {
    sectionRefs[id]?.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <Stack direction="row" spacing={2} px={5} py={1}>
      {sections.map((section) => {
        const isActive = section.id === activeSection;

        return (
          <Button
            variant="text"
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            sx={{
              fontSize: "1.6rem",
              color: isActive ? "#32425D" : "#A0AFC0",
              transition: "color 0.2s ease, font-weight 0.2s ease",
              backgroundColor: "transparent",
              "&:hover": {
                backgroundColor: "transparent",
                color: "#32425D",
                textDecoration: "underline",
              },
            }}
          >
            {section.title}
          </Button>
        );
      })}
    </Stack>
  );
}

export default SectionBar;
