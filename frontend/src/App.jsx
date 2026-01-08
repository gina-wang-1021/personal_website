import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Header from "./components/Header.jsx";
import Intro from "./components/Intro.jsx";
import SectionBar from "./components/SectionBar.jsx";
import Sections from "./components/Sections.jsx";
import Footer from "./components/Footer.jsx";

const theme = createTheme();
function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Intro />
      <SectionBar />
      <Sections />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
