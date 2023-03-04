import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavTabs from './components/NavTabs';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Project from './components/pages/Project';
import Contact from './components/pages/Contact';


function App() {
  return (
    <Router>
      <div>
        <NavTabs />
        {/* Wrap Route elements in a Routes component */}
        <Routes basename="design-portfolio-with-react">
          {/* Define routes using the Route component to render different page components at different paths */}
          {/* Define a default route that will render the Home component */}
          <Route path="/design-portfolio-with-react/" element={<Home />} />
          <Route path="/design-portfolio-with-react/about" element={<About />} />
          <Route path="/design-portfolio-with-react/contact" element={<Contact />} />
          <Route path="/design-portfolio-with-react/project" element={<Project />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
