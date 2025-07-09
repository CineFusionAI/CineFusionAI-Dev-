import React from 'react';
import './SplashScreen.css'; // Import the CSS file for styling the splash screen

/**
 * SplashScreen Component
 * This component is responsible for displaying the splash screen image.
 * It uses CSS to center the image and control its size within the full screen.
 */
const SplashScreen = () => {
  return (
    // The main container for the splash screen.
    // Its styles (from SplashScreen.css) make it cover the entire viewport
    // and center its child elements.
    <div className="splash-screen-container">
      {/* The image element for the splash screen background.
        The 'src' attribute points to the image located in the 'public/images/' folder.
        The 'alt' attribute provides accessible text for the image.
        The 'className' links to the CSS rules that define its size and appearance.
      */}
      <img
        src="/images/CineFusion AI Splash Screen Background.jpg" // Path to your uploaded image in public/images/
        alt="CineFusion AI Loading"
        className="splash-screen-image"
      />
      
      {/* Optional: You can uncomment and customize this paragraph to add
        loading text, a version number, or a simple spinner below the image.
      */}
      {/* <p className="loading-text">Loading CineFusion AI...</p> */}
    </div>
  );
};

export default SplashScreen;
