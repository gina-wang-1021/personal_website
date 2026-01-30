import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

function SectionBar({ sections, sectionRefs, activeSection }) {
  const scrollToSection = (id) => {
    sectionRefs[id]?.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <Box
      sx={{
        display: "flex",
        px: 5,
        py: 1,
        "@media (max-width:600px)": {
          px: 3,
          py: 2,
        },
      }}
    >
      <Box
        sx={{
          display: "none",
          "@media (max-width:600px)": {
            display: "block",
            width: "3px",
            backgroundColor: "#32425D",
            borderRadius: "2px",
            marginRight: 2,
          },
        }}
      />

      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 0.5, sm: 2 }}
        sx={{
          width: "100%",
          alignItems: { xs: "flex-start", sm: "center" },
        }}
      >
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
                textAlign: { xs: "left", sm: "center" },
                justifyContent: { xs: "flex-start", sm: "center" },
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
    </Box>
  );
}

export default SectionBar;
