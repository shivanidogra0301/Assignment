import React from 'react';
import Navigation from './components/Navigation/Navigation'
import './App.css';
import AboutSection from './components/AboutSection/AboutSection';
import PhotosGallery from './components/PhotosGallery/PhotosGallery'
function App() {
  return (
    <div className="App">
      <Navigation/>
      <div  className="MainBody">
        <AboutSection/>
        <PhotosGallery/>
      </div>
    </div>
  );
}

export default App;
