import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import the Header, Footer, and pages
import Header from './include/theheader';
import Footer from './include/thefooter';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import NotFound from './pages/notfound';

function App() {
  return (
    <Router basename="/techvedhu"> {/* Specify the base path for GitHub Pages */}
      <div>
        {/* Header will be displayed on all pages */}
        <Header />

        <main>
          <Routes>
            {/* Define routes for your application */}
            <Route path="/techvedhu" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} /> {/* Catch-all route for 404 */}
          </Routes>
        </main>

        {/* Footer will be displayed on all pages */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
