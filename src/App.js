import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import SearchPage from "./pages/SearchPage/SearchPage";
import { ThemeProvider, createTheme } from "@mui/material/styles";

// TO DO: Add theme
const theme = createTheme();

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="app">
        <Router>
          <Header />
          <Switch>
            <Route path="/search">
              <SearchPage />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </div>
    </ThemeProvider>
  );
};

export default App;
