import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useState } from "react";
import './App.css';
import Footer from './Components/Footer/Footer.jsx';
import Header from './Components/Header/Header.jsx';
import Search from './Components/MenuPages/SearchBar/Search.jsx';

function App() {
  const [selectedSection, setSelectedSection] = useState(null);

  return (
    <>
      <Routes>
        {/* Fullscreen Search Page */}
        <Route path="/search" element={<Search />} />

        {/* Default route includes header and footer */}
        <Route
          path="/"
          element={
            <>
              <Header setSelectedSection={setSelectedSection} />

               {/* <FOOTER /> */}
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
