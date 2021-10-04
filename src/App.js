import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './component/HomePage/Home/Home';
import Navbar from './component/HomePage/Navbar/Navbar';
import Footer from './component/HomePage/Footer/Footer';
import NotFound from './component/NotFound/NotFound';
import Contact from './component/HomePage/Contact/Contact';
import AboutUs from './component/HomePage/AboutUs/AboutUs';
import Features from './component/HomePage/Features/Features';
import AllCourses from './component/AllCourses/AllCourses';
import ViewCourse from './component/HomePage/ViewCourse/ViewCourse';

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/contact">
          <Contact></Contact>
        </Route>
        <Route path="/about">
          <AboutUs></AboutUs>
        </Route>
        <Route path="/feature">
          <Features></Features>
        </Route>
        <Route path="/courses">
          <AllCourses></AllCourses>
        </Route>
        <Route path="/destination/:id">
            <ViewCourse></ViewCourse>
          </Route>
        <Route path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>
      <Footer></Footer>
    </Router>
  );
}

export default App;
