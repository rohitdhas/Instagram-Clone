import "./styles.css";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Contact from "./Components/Contact";
import Profile from "./Components/Profile";
import Form from "./Components/Form";
import Stories from "./Components/Stories";
import Post from "./Components/Post";
import Sidebar from "./Components/Sidebar";
import Login from "./Components/Login";
import Footer from "./Components/Footer";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/home">
          <Navbar />
          <div className="App">
            <div className="section">
              <Stories />
              <Post />
              <Sidebar />
              <Form />
              <Footer />
            </div>
          </div>
        </Route>
        <Route path="/profile/:id">
          <Navbar />
          <div className="section">
            <Profile />
          </div>
        </Route>
        <Route path="/contact">
          <Navbar />
          <div className="section">
            <Contact />
          </div>
        </Route>
      </Switch>
    </Router>
  );
}
