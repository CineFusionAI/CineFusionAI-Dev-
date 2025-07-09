import React, { useState, useEffect } from 'react';
import SplashScreen from './SplashScreen'; // Import the splash screen component
import MainMenu from './MainMenu';     // Assuming you have a MainMenu component
import HomePage from './HomePage';     // Assuming you have a HomePage component

// Optional: If you have general app-wide CSS, you might import it here
// import './App.css'; 

/**
 * App Component
 * This is the main component of your application.
 * It manages the display of the splash screen during initial loading
 * and then renders the main application content (MainMenu, HomePage, etc.).
 */
function App() {
  // State to control whether the splash screen is currently loading.
  // Initially true to show the splash screen.
  const [isLoading, setIsLoading] = useState(true);

  // State to track if the actual application's data/modules have finished initializing.
  // This is separate from the minimum splash screen display time.
  const [appInitialized, setAppInitialized] = useState(false); 

  /**
   * useEffect Hook for Application Initialization and Splash Screen Management.
   * This hook runs once when the App component mounts.
   */
  useEffect(() => {
    /**
     * Asynchronous function to simulate application-specific initialization tasks.
     * In a real application, this would involve:
     * - Loading user settings from local storage or a backend.
     * - Initializing global state management (e.g., Redux, Zustand, React Context).
     * - Performing user authentication checks.
     * - Fetching critical initial data from APIs.
     * - Setting up any global services or preloading assets (like AI models).
     */
    const initializeApp = async () => {
      console.log("Starting CineFusion AI application initialization...");
      // Simulate a network request or heavy computation that takes time.
      // Replace this with your actual asynchronous setup tasks.
      await new Promise(resolve => setTimeout(resolve, 2500)); // Simulates a 2.5-second loading time
      console.log("CineFusion AI application initialization complete.");
      setAppInitialized(true); // Mark that the application's core logic is ready
    };

    // Start the application initialization process.
    initializeApp();

    // Set a minimum display time for the splash screen.
    // This ensures that the user sees the splash screen for a noticeable duration,
    // even if the actual app initialization is very fast.
    const minSplashDisplayTime = 1500; // Minimum 1.5 seconds display time for the splash screen
    const splashTimer = setTimeout(() => {
      setIsLoading(false); // After the minimum time, allow the splash screen to hide
    }, minSplashDisplayTime);

    // Cleanup function: Clear the timer if the component unmounts before the timer finishes.
    return () => clearTimeout(splashTimer);

  }, []); // The empty dependency array [] ensures this effect runs only once when the component mounts.

  // Determine whether to show the splash screen.
  // The splash screen is shown if either:
  // 1. The minimum display time has not passed (`isLoading` is true).
  // 2. The application's core initialization tasks are not yet complete (`appInitialized` is false).
  const showSplash = isLoading || !appInitialized;

  return (
    <>
      {showSplash ? (
        // If showSplash is true, render the SplashScreen component.
        <SplashScreen /> 
      ) : (
        // Otherwise, render the main application content.
        // The style here provides a dark background for the main app container.
        <div className="main-app-container" style={{ backgroundColor: '#1a1a1a', minHeight: '100vh', color: '#eee' }}>
          {/* Render your main application components here */}
          <MainMenu />
          <HomePage />
          {/* You would add other core components of your video editing suite here */}
        </div>
      )}
    </>
  );
}

export default App;
