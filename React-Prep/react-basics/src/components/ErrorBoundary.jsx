import React, { useEffect, useState } from "react";

const ErrorBoundary = ({ children }) => {
  const [haserror, setHasError] = useState(false);

  // This lifecycle method is invoked after an error has been thrown by a descendant component
  // It receives the error that was thrown as a parameter
  useEffect(() => {
    const handleComponentError = (error, info) => {
      console.log('handleComponentError called');
      // console.error("ErrorBoundary caught an error:", error, info);
      setHasError(true); // Set the hasError state to true
    };
    // Register the error handler
    window.addEventListener("error", handleComponentError);

    // Cleanup function
    return () => {
      window.removeEventListener("error", handleComponentError);
    };
  }, []);

  // If an error was caught, render the fallback UI
  if (haserror) {
    return <div>Something went wrong.</div>;
  }

  // If no error occurred, render the children components as normal
  return children;
 
};

export default ErrorBoundary;
