import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar.tsx';
import Dashboard from './components/Dashboard.tsx';
import Rules from './components/Rules.tsx';
import Strategy from './components/Strategy.tsx';
import Script from './components/Script.tsx';
import Settings from './components/Settings.tsx';

const App: React.FC = () => {
  const [activePage, setActivePage] = useState('Rules');

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      // Check if the focused element is a number input
      if (
        document.activeElement instanceof HTMLInputElement &&
        document.activeElement.type === 'number'
      ) {
        // Prevent the default wheel action (scrolling to change value)
        e.preventDefault();
      }
    };

    // Add the event listener to the document, with options to prevent passive listener issues.
    document.addEventListener('wheel', handleWheel, { passive: false });

    // Cleanup function to remove the event listener
    return () => {
      document.removeEventListener('wheel', handleWheel);
    };
  }, []); // Empty dependency array ensures this runs only once on mount

  const renderPage = () => {
    switch (activePage) {
      case 'Rules':
        return <Rules />;
      case 'Dashboard':
        return <Dashboard />;
      case 'Strategy':
        return <Strategy />;
      case 'Script':
        return <Script />;
      case 'Settings':
        return <Settings />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex h-screen font-sans">
      <div className="flex h-full w-full text-slate-200">
        <Sidebar activePage={activePage} setActivePage={setActivePage} />
        <main className="flex-1 flex flex-col overflow-hidden">
          {renderPage()}
        </main>
      </div>
    </div>
  );
};

export default App;