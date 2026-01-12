import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Header from "./components/Header.jsx";
import Intro from "./components/Intro.jsx";
import SectionBar from "./components/SectionBar.jsx";
import Sections from "./components/Sections.jsx";
import Footer from "./components/Footer.jsx";
import Box from "@mui/material/Box";
import { useEffect, useState, useRef } from "react";
import { fetchAllData } from "./helpers/fetch_data.js";

const theme = createTheme({
  palette: {
    background: {
      default: "#E2E9F0",
    },
  },
  typography: {
    fontFamily:
      "Nunito, system-ui, -apple-system, BlinkMacSystemFont, sans-serif",

    h1: {
      fontFamily: "Neuton, serif",
      fontWeight: 700,
    },
    h2: {
      fontFamily: "Neuton, serif",
      fontWeight: 700,
    },
    h3: {
      fontFamily: "Neuton, serif",
      fontWeight: 700,
    },
    h4: {
      fontFamily: "Neuton, serif",
      fontWeight: 600,
    },
    h5: {
      fontFamily: "Neuton, serif",
      fontWeight: 600,
      fontSize: "1.6rem",
    },
    h6: {
      fontFamily: "Neuton, serif",
      fontWeight: 600,
    },

    body1: {
      fontFamily: "Nunito, system-ui, sans-serif",
      fontWeight: 400,
      fontSize: "1.2rem",
      whiteSpace: "pre-line",
    },
    body2: {
      fontFamily: "Nunito, system-ui, sans-serif",
      fontWeight: 400,
      fontSize: "1.05rem",
      whiteSpace: "pre-line",
    },

    subtitle1: {
      fontFamily: "Nunito, system-ui, sans-serif",
      fontWeight: 500,
    },
    subtitle2: {
      fontFamily: "Nunito, system-ui, sans-serif",
      fontWeight: 500,
    },

    button: {
      fontFamily: "Neuton, system-ui, sans-serif",
      fontWeight: 600,
      textTransform: "none",
    },
  },
});

function App() {
  const [metadata, setMetadata] = useState(null);
  const [techWork, setTechWork] = useState([]);
  const [projects, setProjects] = useState([]);
  const [otherExp, setOtherExp] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState(null);

  const sectionRefs = {
    tech_work: useRef(null),
    projects: useRef(null),
    other: useRef(null),
  };

  const sections = [
    {
      id: "tech_work",
      title: "AI & Software-related Work Experiences",
      data: techWork,
    },
    {
      id: "projects",
      title: "Personal Projects",
      data: projects,
    },
    {
      id: "other",
      title: "Other Experiences",
      data: otherExp,
    },
  ];

  useEffect(() => {
    setActiveSection("tech_work");
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.dataset.sectionId);
          }
        });
      },
      {
        threshold: 0.4,
      }
    );

    Object.entries(sectionRefs).forEach(([id, ref]) => {
      if (ref.current) {
        ref.current.dataset.sectionId = id;
        observer.observe(ref.current);
      }
    });
    return () => observer.disconnect();
  });

  useEffect(() => {
    async function loadData() {
      try {
        const { meta, exp, projects, other } = await fetchAllData();

        setMetadata(meta);
        setTechWork(exp);
        setProjects(projects);
        setOtherExp(other);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  if (loading) return null;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header
        githubLink={metadata.github_link}
        linkedinLink={metadata.linkedin_link}
      />
      <Intro title={metadata.title} bio={metadata.bio} />
      <SectionBar
        sections={sections}
        sectionRefs={sectionRefs}
        activeSection={activeSection}
      />
      {sections.map((section) => (
        <Box
          key={section.id + "_section"}
          ref={sectionRefs[section.id]}
          sx={{ scrollMarginTop: "80px" }}
        >
          <Sections content={section} />
        </Box>
      ))}
      <Footer
        githubLink={metadata.github_link}
        linkedinLink={metadata.linkedin_link}
      />
    </ThemeProvider>
  );
}

export default App;
