import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Header from "./components/Header.jsx";
import Intro from "./components/Intro.jsx";
import SectionBar from "./components/SectionBar.jsx";
import Sections from "./components/Sections.jsx";
import Footer from "./components/Footer.jsx";
import { useEffect, useState } from "react";
import { fetchAllData } from "./helpers/fetch_data.js";

const theme = createTheme();

function App() {
  const [metadata, setMetadata] = useState(null);
  const [techWork, setTechWork] = useState([]);
  const [projects, setProjects] = useState([]);
  const [otherExp, setOtherExp] = useState([]);
  const [loading, setLoading] = useState(true);

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

  if (loading) return null; // return null for now but ideally add loading component

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header
        githubLink={metadata.github_link}
        linkedinLink={metadata.linkedin_link}
      />
      <Intro title={metadata.title} bio={metadata.bio} />
      <SectionBar sections={sections} />
      {sections.map((section) => (
        <Sections content={section} key={section.id + "_section"} />
      ))}
      <Footer />
    </ThemeProvider>
  );
}

export default App;
